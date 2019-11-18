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
    correo: "carmen@hotmail.com",
    password1: "algo",
    password2:"algo"
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
        ]),
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });


    this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma )
    ]);
  }


  noIgual( control: FormControl): any {
    let forma: any = this;

    if ( control.value !== forma.controls['password1'].value ) {
        return{
          noiguales: true
        }
    }
    return null;
  }


  guardarCambios(){
    console.log(this.forma.value);
    //Resetear info del Formularios
    this.forma.reset({
      nombreCompleto: {
        nombre:"",
        apellido: ""
      },
      correo:"",
      password1:"",
      password2: ""
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
