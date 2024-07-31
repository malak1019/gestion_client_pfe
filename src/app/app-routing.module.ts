import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClientComponent } from './client/client.component';
import { FactureComponent } from './facture/facture.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import {ModifierClientComponent} from './modifier-client/modifier-client.component';
import {AjouterContratComponent} from './ajouter-contrat/ajouter-contrat.component';

const routes: Routes = [
  { path:'login', component: LoginFormComponent},
  {path :'dashboard', component:DashbordComponent},
  {path :'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'client', component:ClientComponent},
  {path:'client/Ajout', component:AjoutClientComponent},
  {path:'client/Modifier', component:ModifierClientComponent},
  {path:'facture', component:FactureComponent},
  { path: 'promotions/:code_contrat', component: PromotionsComponent },
  { path: 'modifier-client/:id', component: ModifierClientComponent },
  {path:'contrat/Ajout', component:AjouterContratComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
