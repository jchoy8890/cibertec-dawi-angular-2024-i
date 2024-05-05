import { Component, OnInit } from '@angular/core';
import { Docente } from '../models/Models';
import { HttpClient } from '@angular/common/http';
import { APIHttpService } from '../core/APIHttpService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  httpService: APIHttpService;

  constructor(private http: APIHttpService) {
    this.httpService = http;
  }

  docentesAPI!: Docente[]
  title = 'Cibertec';
  author = "Jonathan Choy";
  flag = true;
  frutas = ['Pera', 'Manzana', 'Palta', 'Melon', 'Sandia', 'Papaya', 'Naranja']
  docente: Docente = new Docente(1, 'Jonathan', 'Choy', 'pjchoyri@cibertec.edu.pe')
  docentes: Docente[] = [this.docente, new Docente(2, 'Juanito', 'Machucafuerte', 'pjmachuca@cibertec.edu.pe')]

  ngOnInit() {
    this.docentesAPI = this.http.getDocentes()
  }





  miFuncion() {
    let nombre = "a"
    nombre = "b"
  }

}
