/** Import all Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

/** Import all Components */
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

/** Import all Models */
import { User } from './models/user';
import { Chore } from './models/chore';

/** Import all Services */
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { DbService } from './services/db.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    ListTodoComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [UserService, AuthService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
