import { Component } from '@angular/core';


//Un componente tiene de entrada y salida, tiene un ciclo de vida






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {  //Esta clase de typescript, tiene la logica ha esa vista
  title = 'Aloima';

 getName():void{




  console.log('Hola como estas');
 }

}
