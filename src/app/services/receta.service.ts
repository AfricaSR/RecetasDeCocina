import { Injectable } from '@angular/core';
import { Receta } from '../models/receta';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetaList: AngularFireList<any>;
  reviewList: Array<Review>;
  selectReceta: Receta = new Receta();
  selectReview: Review = new Review();

  

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

  insertReview(receta: Receta, review: Review){
    
    this.reviewList = Object.values(receta.comentarios);
    
    
    this.reviewList.push(review);

    let r = new Receta();
    r.imagen = receta.imagen;
    r.comentarios = this.reviewList;
    r.ingredientes = receta.ingredientes;
    r.preparacion = receta.preparacion;
    r.titulo = receta.titulo;
    this.recetaList.set(receta.$key, r);
    
  }
}
