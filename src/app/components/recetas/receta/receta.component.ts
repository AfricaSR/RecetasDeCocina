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
  //Se llama a la función que creará una receta nueva en base a los valores del formulario
  onSubmit(recetaForm: NgForm){
    this.recetaService.insertReseta(recetaForm.value);
  }
  //Generará la lista de recetas al inicializarse
  ngOnInit() {
    this.recetaService.getReceta();
  }

}
