import { Injectable } from '@angular/core';
import { Receta } from '../models/receta';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetaList: AngularFireList<any>;
  reviewList: Review[];
  selectReceta: Receta = new Receta();

  

  constructor(private firebase: AngularFireDatabase) { }

  getReceta(){
    return this.recetaList = this.firebase.list('recetas');
  }

  insertReseta(receta: Receta){
    this.recetaList.push({
      titulo: receta.titulo,
      preparacion: receta.preparacion,
      ingredientes: receta.ingredientes,
      imagen: receta.imagen,
      comentarios: [],
    })
  }

  //insertReview()
}
