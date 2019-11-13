import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  // usuario: Object = {
  //   nombre: "Nombre por defecto",
  //   apellido:"apellido por defecto",
  //   email:"emailXdefecto@gmail.com"
  // } <!-- [(ngModel)]="usuario.nombre" poner esta linea en el input de nombre en html

  usuario: Object = {
    nombre: null,
    apellido:null,
    email: null
  }


  constructor() { }

  ngOnInit() {
  }

  guardar(form: NgForm){
    console.log(form);
  }

}
