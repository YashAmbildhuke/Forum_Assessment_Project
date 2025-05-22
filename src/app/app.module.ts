import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ForumListComponent } from './component/forum/forum-list/forum-list.component';
import { ForumPostComponent } from './component/forum/forum-post/forum-post.component';
import { AssessmentListComponent } from './component/assessment/assessment-list/assessment-list.component';
import { AssessmentCreateComponent } from './component/assessment/assessment-create/assessment-create.component';
import { TakeAssessmentComponent } from './component/assessment/take-assessment/take-assessment.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ForumListComponent,
    ForumPostComponent,
    AssessmentListComponent,
    AssessmentCreateComponent,
    TakeAssessmentComponent,
    HomeComponent,
    AppComponent,
   
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
