import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalzadoComponent } from './components/calzado/calzado.component';
import { HomeComponent } from './components/home/home.component';
import { InferiorComponent } from './components/inferior/inferior.component';
import { LoginComponent } from './components/login/login.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { SuperiorComponent } from './components/superior/superior.component';

const routes: Routes = [
  {path: '', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'calzado', component: CalzadoComponent},
  {path: 'inferior', component: InferiorComponent },
  {path: 'superior', component: SuperiorComponent},
  {path: 'navmenu', component: NavmenuComponent},
  {path: '**', component: PagenotfoundComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
