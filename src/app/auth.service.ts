import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public mainlink = 'https://cec9228fe707.ngrok.io';

  private _registerUrl = this.mainlink + '/users/signup';
  private _loginUrl = this.mainlink + '/users/login';
  private _writeUrl = '';
  private ulink = this.mainlink + '/users/upload';
  private _EmailUrl = this.mainlink + '/users/reset';
  private _resetpassconfirmlink = this.mainlink + '/users/reset/confirm';

  // private _vlink='https://1ddac15b40a3.ngrok.io/user/confirm/';
  private _editprofile = this.mainlink + '/users/details';
  private _profiledata = this.mainlink + '/users/';
  private _searchlink;
  private _jobpostlink =
    this.mainlink +
    '/institutes/' +
    localStorage.getItem('CurrentUserPageID') +
    '/new/jobpost';
  private _createpagelink = this.mainlink + '/institutes/new';
  private _timelineLink = this.mainlink + '/users/timeline';
  _profiledataF;
  followlink;
  _likeapostlink;

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  articalPublish(user) {
    return this.http.post<any>(this._writeUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('CurrentUserID');
    localStorage.removeItem('CurrentUserPageID');

    this._router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  loggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  verify(link) {
    return this.http.get<any>(link);
  }

  upload(fd) {
    return this.http.post<any>(this.ulink, fd);
  }

  resetpassemail(user) {
    return this.http.post<any>(this._EmailUrl, user);
  }

  resetpasswordconfirm(user) {
    return this.http.post<any>(this._resetpassconfirmlink, user);
  }
  editprofile(user) {
    return this.http.post<any>(this._editprofile, user);
  }
  changepassword(user, dimeruid) {
    const changepasslink = this.mainlink + '/user/' + dimeruid + '/change';

    return this.http.post<any>(changepasslink, user);
  }

  profileData(userid) {
    this._profiledataF = this._profiledata + userid;
    return this.http.get<any>(this._profiledataF);
  }

  searchdata(something) {
    this._searchlink = this.mainlink + something;

    return this.http.get<any>(this._searchlink);
  }
  postajob(user) {
    return this.http.post<any>(this._jobpostlink, user);
  }
  pagecreate(user) {
    return this.http.post<any>(this._createpagelink, user);
  }
  Follow(dimeruid) {
    this.followlink = this.mainlink + '/users/' + dimeruid + '/follower/new';
    return this.http.post<any>(this.followlink, this.followlink);
  }
  timeline() {
    return this.http.get<any>(this._timelineLink);
  }
  likeapost(something) {
    this._likeapostlink=this.mainlink+'institutes/jobposts/'+something+'/like'
    return this.http.post<any>(this._likeapostlink, something);
  }
}
