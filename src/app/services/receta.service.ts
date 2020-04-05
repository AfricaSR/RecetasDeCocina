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

  //El primer paso es llamar a los datos que se encuentran en la base de datos alojada en firestone

  constructor(private firebase: AngularFireDatabase) { }

  //Recibe las recetas de la lista almacenadas en la base de datos
  getReceta(){
    return this.recetaList = this.firebase.list('recetas');
  }

  //Genera una receta nueva a partir de los datos introducidos en el formulario de creación
  insertReseta(receta: Receta){
    this.recetaList.push({
      titulo: receta.titulo,
      preparacion: receta.preparacion,
      ingredientes: receta.ingredientes,
      imagen: receta.imagen,
      comentarios: [],
    })
  }

  //Reemplaza el array de reviews de la receta por uno que incluya la nueva review realizada
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

  updateReceta(receta: Receta) {
    
    let r = new Receta();
    r.imagen = receta.imagen;
    r.comentarios = receta.comentarios;
    r.ingredientes = receta.ingredientes;
    r.preparacion = receta.preparacion;
    r.titulo = receta.titulo;

    this.recetaList.set(receta.$key, r);
}
deleteReceta(receta: Receta){
  this.recetaList.remove(receta.$key);
}
}
