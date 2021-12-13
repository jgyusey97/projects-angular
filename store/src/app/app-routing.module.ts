import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{ path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
{path:'**', redirectTo :'', pathMatch:'full'}  //Esta siempre debe de ir al ultimo para atrapar las que no existan y las rediriga




];
//Definimos el routing de nuestro modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
