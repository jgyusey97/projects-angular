import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({

  //Si usa root ya no es necesario llamar al app.module en provider
  providedIn: 'root'  //Esto quiere decir que el servicio estara disponible en toda la aplicacion
})
export class ProductsService {
  
  //peticiones http 
constructor(private http: HttpClient) {
 





   }
}
