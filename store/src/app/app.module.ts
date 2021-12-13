import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [  //Aqui declaramos componentes o directivas
    AppComponent, HeaderComponent
  ],
  imports: [  //Modulo de angular que queremos utilizar
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    
  ],

  providers: [],  
  bootstrap: [AppComponent],  //Aqui le indicamos nuestro contenedor, solo esta en nuestro modulo principal
  exports :[],  //Aqui colocamos los componentes que queramos exponer a otros modulos
})



export class AppModule { }
