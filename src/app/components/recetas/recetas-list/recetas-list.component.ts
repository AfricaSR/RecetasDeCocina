import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../../services/receta.service';
import { Receta } from '../../../models/receta';
@Component({
  selector: 'app-recetas-list',
  templateUrl: './recetas-list.component.html',
  styleUrls: ['./recetas-list.component.css']
})
export class RecetasListComponent implements OnInit {
  searchText;
  recetaList: Receta[];

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
        x["$key"] = element.key;
        this.recetaList.push(x as Receta);
      });
    });
  }

}
