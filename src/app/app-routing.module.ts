import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente/docente.component';
import { TestingComponent } from './testing/testing.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
  { path: 'docentes', component: DocenteComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'curso', component: CursoComponent },
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
