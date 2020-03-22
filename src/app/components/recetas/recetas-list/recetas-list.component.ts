import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../../services/receta.service';
import { Receta } from '../../../models/receta';
import { Review } from '../../../models/review';
import { OrderPipe } from 'ngx-order-pipe';
import { isUndefined } from 'util';


@Component({
  selector: 'app-recetas-list',
  templateUrl: './recetas-list.component.html',
  styleUrls: ['./recetas-list.component.css']
})
export class RecetasListComponent implements OnInit {
  searchText;
  recetaList: Receta[];
  reviewList: Array<Review>;
  titulo: string = 'titulo';
  ingredientes: string = 'ingredientes';
  selectedDevice = '0';
  constructor(
    public recetaService: RecetaService, private orderPipe: OrderPipe
  ) { }

  ngOnInit() {

    this.searchText = null;
    this.recetaService
    .getReceta()
    .snapshotChanges()
    .subscribe(item => {
      this.recetaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        let r = x["comentarios"];
        if (isUndefined(r)){
          x["comentarios"] = {};
        }
        x["$key"] = element.key;
        this.recetaList.push(x as Receta);
        
        
      });
    });


  
    
  }
  
  onChange(newValue) {

    switch (newValue){
      case "1":
        this.recetaList.sort((a,b) => a.titulo.localeCompare(b.titulo));
        break;
      case "2":
        this.recetaList.sort((b,a) => a.titulo.localeCompare(b.titulo));
        break;
      case "3":
        this.recetaList.sort((a,b) => a.ingredientes.localeCompare(b.ingredientes));
        break;
      case "4":
        this.recetaList.sort((b,a) => a.ingredientes.localeCompare(b.ingredientes));
        break;
      default:
        this.recetaList;
        break;
    }
    this.selectedDevice = newValue;
    
}
}
