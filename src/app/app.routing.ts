import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './pages/home/home.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscador', component: BuscadorComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: HomeComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
