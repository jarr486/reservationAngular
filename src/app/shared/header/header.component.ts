import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Declarar variables
  btnInicio:string;
  btnHoteles:string;
  
  constructor() {
  
     this.btnInicio ="Inicio";
     this.btnHoteles ="Tipos Hoteles";
    
  }

  ngOnInit() {
  }

}
