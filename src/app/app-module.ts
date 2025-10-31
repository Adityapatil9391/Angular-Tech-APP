import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Notes } from './component/notes/notes';
import { FormsModule } from '@angular/forms';
import { AddTech } from './component/add-tech/add-tech';
import { AddQuestions } from './component/add-questions/add-questions';
import { Dashboard } from './component/dashboard/dashboard';
import { SignUp } from './component/sign-up/sign-up';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { Home } from './component/home/home';
import { Login } from './component/login/login';


@NgModule({
  declarations: [
    App,
    Notes,
    AddTech,
    AddQuestions,
    Dashboard,
    Footer,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUp,
    Login,
    Navbar,
    FormsModule,
    Navbar,
    Login,
    SignUp,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
