import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientComponent } from './client/client.component';
import { FactureComponent } from './facture/facture.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import * as $ from "jquery";
import { ToastrModule } from 'ngx-toastr';
import { AjouterContratComponent } from './ajouter-contrat/ajouter-contrat.component';



const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'dashboard', component: DashbordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'facture', component: FactureComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavbarComponent,
    HomePageComponent,
    DashbordComponent,
    HeaderComponent,
    SidebarComponent,
    ClientComponent,
    FactureComponent,
    PromotionsComponent,
    AjoutClientComponent,
    ModifierClientComponent,
    AjouterContratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // Position des notifications
      timeOut: 3000, // Durée d'affichage des notifications
      closeButton: true, // Affiche un bouton pour fermer la notification
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
