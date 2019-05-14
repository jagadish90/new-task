import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule,Routes } from '@angular/router';
import { LedgerComponent } from './ledger/ledger.component';
import { SignupComponent } from './signup/signup.component';
const myroutes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'ledger',component:LedgerComponent},
  {path:'register',component:SignupComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LedgerComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
