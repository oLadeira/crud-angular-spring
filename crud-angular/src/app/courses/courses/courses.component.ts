import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService; //dependencia

  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    //this.coursesService = new CoursesService(); //injecao de dependencia
    this.courses = this.coursesService.list(); //atribuindo ao array courses os valores encontrados na camada de Service
  }

  ngOnInit(): void {
  }

}
