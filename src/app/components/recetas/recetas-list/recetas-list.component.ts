import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../../services/receta.service';
import { Receta } from '../../../models/receta';
import { Review } from '../../../models/review';
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

  constructor(
    public recetaService: RecetaService
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

}
