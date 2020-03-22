import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/review';
import { Receta } from '../../models/receta';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  //Para imprimir la lista de reviews de una receta se importa el componente Receta dentro del Review-list
  @Input() receta: Receta;
  public reviewList: Review[];
  constructor() { }

  ngOnInit(): void {
    
    this.reviewList = Object.values(this.receta.comentarios);

  }

}
