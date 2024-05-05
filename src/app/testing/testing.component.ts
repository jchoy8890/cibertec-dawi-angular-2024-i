import { Component } from '@angular/core';
import { Docente } from '../../models/Models';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

  title = 'Cibertec';
  author = "Jonathan Choy";
  flag = true;
  frutas = ['Pera', 'Manzana', 'Palta', 'Melon', 'Sandia', 'Papaya', 'Naranja']
  docente: Docente = new Docente(1, 'Jonathan', 'Choy', 'pjchoyri@cibertec.edu.pe')
  docentes: Docente[] = [this.docente, new Docente(2, 'Juanito', 'Machucafuerte', 'pjmachuca@cibertec.edu.pe')]


}
