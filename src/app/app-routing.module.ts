import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AssistirComponent } from './pages/assistir/assistir.component';
import { CaracteresComponent } from './pages/caracteres/caracteres.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'assistir', component: AssistirComponent },
  { path: 'caracteres', component: CaracteresComponent },
  { path: 'galeria', component: GaleriaComponent},
  { path: 'contato', component: ContatoComponent},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
