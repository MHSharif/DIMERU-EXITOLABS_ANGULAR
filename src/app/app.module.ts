import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavtopComponent } from './navtop/navtop.component';
import { NavbottomComponent } from './navbottom/navbottom.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { SearchComponent } from './search/search.component';
import { VerificationComponent } from './verification/verification.component';
import { UploadComponent } from './upload/upload.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ResetpassconfirmComponent } from './resetpassconfirm/resetpassconfirm.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PagesComponent } from './pages/pages.component';
import { CreatepageComponent } from './createpage/createpage.component';
import { EditpageComponent } from './editpage/editpage.component';
import { CustomsearchComponent } from './customsearch/customsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    NavtopComponent,
    NavbottomComponent,
    EditprofileComponent,
    ResetpassComponent,
    SearchComponent,
    VerificationComponent,
    UploadComponent,
    ResetpassconfirmComponent,
    ChangepasswordComponent,
    PagesComponent,
    CreatepageComponent,
    EditpageComponent,
    CustomsearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    ProfileComponent,
    EditprofileComponent,
    SearchComponent,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
