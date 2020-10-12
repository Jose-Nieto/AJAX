import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class Cliente {
  constructor(
  public id: number,
  public nombre: string,
  public nacionalidad: string,
  public edad?: number
  ) {}
 }

export class ClienteComponent implements OnInit {

nacionalidad=['', 'El Salvador', ' Mexico',' Rusia',' Mongolia'];
cliente=new Cliente (1,' ',' ',23);
enviar=false;

  constructor() { }

  ngOnInit() {
  }
onSubmit(){
  this.enviar=true;
}
}
