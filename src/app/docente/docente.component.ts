import { Component, OnInit } from '@angular/core';
import { APIHttpService } from '../../core/APIHttpService';
import { FormBuilder } from '@angular/forms';
import { Docente } from '../../models/Models';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.css'
})
export class DocenteComponent implements OnInit {

  httpService: APIHttpService;
  docenteForm = this.formBuilder.group({
    id: 0,
    nombre: '',
    lastName: '',
    email: ''
  })


  constructor(private http: APIHttpService, private formBuilder: FormBuilder) {
    this.httpService = http;
  }

  docentesAPI: Docente[] = []

  // ngOnInit() {
  // this.http.getDocentes().subscribe(
  //   data =>{
  //     this.docentesAPI = data
  //   },
  //   err =>{
  //     console.log(err)
  //   },
  //   ()=>{
  //     console.log("Complete")
  //   }
  // )

  // }

  ngOnInit(): void {
    this.http.getDocentes().subscribe(
      data => {
        this.docentesAPI = data
      }
    )
  }

  onSubmit(): void {

    let newDocente: Docente = new Docente(0, this.docenteForm.value.nombre || '', this.docenteForm.value.lastName || '', this.docenteForm.value.email || '')
    // Process checkout data here
    console.log(newDocente)
    this.http.saveDocente(newDocente).subscribe(
      resp => {
      console.log(resp)
    });
    console.warn('Your order has been submitted', this.docenteForm.value.nombre);
    this.docenteForm.reset();
  }



  miFuncion() {
    let nombre = "a"
    nombre = "b"
  }

}
