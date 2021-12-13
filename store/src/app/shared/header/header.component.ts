import { Component, OnInit } from '@angular/core';


//Marca el comportamiento de una clase
@Component({
  selector: 'app-header',  //Es el nombre que le damos al componente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
