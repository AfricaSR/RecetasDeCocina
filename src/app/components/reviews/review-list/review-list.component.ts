import { Component, OnInit, Input } from '@angular/core';
import { Review} from '../../../models/review';
import { Receta } from '../../../models/receta';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input() review: Review;
  constructor() { }

  ngOnInit(): void {
    

  }

}
