import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ForumListComponent } from './component/forum/forum-list/forum-list.component';
import { ForumPostComponent } from './component/forum/forum-post/forum-post.component';
import { AssessmentListComponent } from './component/assessment/assessment-list/assessment-list.component';
import { AssessmentCreateComponent } from './component/assessment/assessment-create/assessment-create.component';
import { TakeAssessmentComponent } from './component/assessment/take-assessment/take-assessment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'forum', component: ForumListComponent },
  { path: 'forum/:id', component: ForumPostComponent },
  { path: 'assessments', component: AssessmentListComponent },
  { path: 'create-assessment', component: AssessmentCreateComponent },
  { path: 'take-assessment/:id', component: TakeAssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
