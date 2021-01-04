import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { SearchComponent } from './search/search.component';
import { VerificationComponent } from './verification/verification.component';
import { UploadComponent } from './upload/upload.component';
import { ResetpassconfirmComponent } from './resetpassconfirm/resetpassconfirm.component';
import {ChangepasswordComponent} from './changepassword/changepassword.component'
import { CreatepageComponent } from './createpage/createpage.component';
import { PagesComponent } from './pages/pages.component';
import { EditpageComponent } from './editpage/editpage.component';
import { CustomsearchComponent } from './customsearch/customsearch.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
  },
  {
    path: 'editprofile',
    component: EditprofileComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'resetpassword',
    component:ResetpassComponent,
  },
  {
    path:'search',
    component:SearchComponent,
  },
  {
    path:'verification/:id',
    component:VerificationComponent,
  },
  {
    path:'upload',
    component:UploadComponent,
  },
  {
    path:'resetpassconfirm/:id',
    component:ResetpassconfirmComponent,
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent,
  },
  {
    path:'createpage',
    component:CreatepageComponent,
  },
  {
    path:'pages/:pid',
    component:PagesComponent,
  },
  {
    path:'editpage',
    component:EditpageComponent,
  },
  {
    path:'customsearch',
    component: CustomsearchComponent
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
