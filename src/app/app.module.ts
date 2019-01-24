import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardComponent } from './card/card.component';
import { GeeComponent } from './gee/gee.component';
import { MeComponent } from './me/me.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

const routes = [
  { path: 'gee', component: GeeComponent},
  { path: 'me', component: MeComponent },
  { path: '', component:HomeComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    CardComponent,
    GeeComponent,
    MeComponent,
    HomeComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
