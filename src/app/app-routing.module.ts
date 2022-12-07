import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent} from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { MymessageComponent } from './page/mymessage/mymessage.component';
import { AllmessageComponent } from './page/allmessage/allmessage.component';
import { CreateMessageComponent } from './page/create-message/create-message.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'mymessage', component:MymessageComponent},
  {path:'allmessage', component:AllmessageComponent},
  {path:'create', component:CreateMessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
