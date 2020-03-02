import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetaService } from '../../../services/receta.service';
@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  constructor(public recetaService: RecetaService) { }

  onSubmit(recetaForm: NgForm){
    this.recetaService.insertReseta(recetaForm.value);
  }

  ngOnInit() {
    this.recetaService.getReceta();
  }

}
