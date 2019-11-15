import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  forma: FormGroup;

  usuario: Object={
    nombreCompleto: {
      nombre: "Carmen",
      apellido: "Baena"
    },
    correo: "carmen@hotmail.com"
  }


  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
          Validators.required,
          this.noApellidoFernandez
        ])
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])
    });
    this.forma.setValue(this.usuario);
  }


  guardarCambios(){
    console.log(this.forma.value);
    //Resetear info del Formularios
    this.forma.reset({
      nombreCompleto: {
        nombre:"",
        apellido: ""
      },
      correo:""
    });
  }

  noApellidoFernandez( control: FormControl ): any{
    if( control.value === "Fernández"){
      return {
        noFernandez: true
      }
    }
    return null;
  }


  ngOnInit() {
  }

}
