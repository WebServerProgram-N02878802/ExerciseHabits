import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/app/dashboard/dashboard.component';
import { MapComponent } from './components/app/map/map.component';
import { TodoComponent } from './components/app/todo/todo.component';

import { AppService } from './services/app.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MapComponent,
    TodoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'login', component: LoginComponent},
        { path: 'app/dashboard', component: DashboardComponent },
        { path: 'app/map', component: MapComponent },
        { path: 'app/todo', component: TodoComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: 'app', redirectTo: '/app/dashboard', pathMatch: 'full'}
    ])
  ],
  //services already dep-injected to module via class decorator in angular 6
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
