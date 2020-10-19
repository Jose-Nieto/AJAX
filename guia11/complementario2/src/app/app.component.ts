import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gasolinera';

  gasolinas:any=[4.25,4.05,3.96];

  total:any=0;
  tipoGas:string='';

  radioChangeHandler(event:any, cantidad, i:number){
    this.total=(cantidad*1)*(event.target.value)*1;
   
  }
}
