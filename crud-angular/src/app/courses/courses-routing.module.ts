import { CoursesComponent } from './courses/courses.component';//2.fez o import automaticamente
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CoursesComponent} //1.defino o caminho para acessar determinado componente
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
