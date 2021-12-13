import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [  //Aqui declaramos componentes o directivas
    AppComponent
  ],
  imports: [  //Modulo de angular que queremos utilizar
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],  
  bootstrap: [AppComponent],  //Aqui le indicamos nuestro contenedor, solo esta en nuestro modulo principal
  exports :[],  //Aqui colocamos los componentes que queramos exponer a otros modulos
})



export class AppModule { }
