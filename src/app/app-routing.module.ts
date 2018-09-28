import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'professores', loadChildren: './professores/professores.module#ProfessoresPageModule' },
  { path: 'professor-detalhe', loadChildren: './professor-detalhe/professor-detalhe.module#ProfessorDetalhePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
