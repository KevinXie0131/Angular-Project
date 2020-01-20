import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [

  {    
    path:'home',component:HomeComponent,
  },
  { 
    path:'product',component:ProductComponent,
  },
  {
    path:'user',component:UserComponent
  },
  {
    path:'pcontent/:id',component:DetailsComponent
  },
  {
    path:'**',redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
