import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../../../models/review';
import { Receta } from '../../../models/receta';
import { RecetaService } from '../../../services/receta.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  //Para referenciar una review con su respectiva receta, hay que importar el componente Receta en Reviews
  @Input() receta: Receta;
  public review: Review;
  constructor(public recetaService: RecetaService) { }

  ngOnInit(): void {
  }

  onSubmit(reviewForm: NgForm){
    this.review = reviewForm.value;
    this.review.fecha = new Date().toLocaleString();
    this.recetaService.insertReview(this.receta, this.review);
    reviewForm.reset();
  }

}
