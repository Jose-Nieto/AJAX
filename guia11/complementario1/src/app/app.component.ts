import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  =  'Calculadora';
  employeesSaldo=[]
  numEmpleado:number=1;
  getValue(salario){
    this.employeesSaldo.push(salario*1);
    this.numEmpleado++;
  }

}
