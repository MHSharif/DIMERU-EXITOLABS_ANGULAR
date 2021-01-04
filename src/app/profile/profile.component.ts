import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profiledata = {
    DimeruID: '',
    joined: '',
    name: '',
    FatherName: '',
    MotherName: '',
    BirthDay: '',
    email: '',
    phone: '',
    PresAddress: '',
    PermAddress: '',
    NID: '',
    passport: '',
    driving: '',
    password: '',
    salt: '',
    verifid: true,
    bio: '',
    summery: '',
    objective: '',
    isActive: true,
    image: '',
    deployAddress: '',
    followers: [],
    following: [],
    institute: [],
    university: [
      {
        req_id: 1,
        requestedBy: '',
        requestedTo: '',
        reg: '',
        UniName: '',
        StudentName: '',
        StuFatherName: '',
        StuMotherName: '',
        BirthDay: '',
        StuEmail: '',
        Department: '',
        Degree: '',
        Session: '',
        Result: '',
        Passing: '',
        isApproved: false,
      },
    ],
    secondary: [
      {
        req_id: 2,
        requestedBy: '',
        requestedTo: '',
        roll: '',
        registration: '',
        Name: '',
        Board: '',
        Grade: '',
        year: '',
        isApproved: false,
        type: '',
      },
      {
        req_id: 1,
        requestedBy: '',
        requestedTo: '',
        roll: '',
        registration: '',
        Name: '',
        Board: '',
        Grade: '',
        year: '',
        isApproved: false,
        type: '',
      },
    ],
    workplace: [
      {
        req_id: 1,
        requestedBy: '',
        requestedTo: '',
        name: '',
        designation: '',
        department: '',
        type: '',
        salary: 50000,
        start: '',
        end: 'never',
        current: false,
        isApproved: false,
        contractEnd: 'never',
      },
    ],
    achievement: [
      {
        req_id: 1,
        requestedBy: '',
        requestedTo: '',
        orgName: '',
        title: '',
        topic: '',
        description: '',
        duration: '',
        start: '',
        end: '',
        achievement: '',
        certificateID: '',
        certificationExpire: '',
        location: '',
        isApproved: false,
      },
    ],
    skills: [
      {
        skillID: 1,
        userID: '10061773',
        name: 'C++',
        score: 0,
        endoresedBy: [],
        verified: false,
      },
    ],
  };
  avatarlink;
  value = 'true';
  DimeruID = localStorage.getItem('CurrentUserID');
  PageID = localStorage.getItem('CurrentUserPageID');
  proidL = localStorage.getItem('CurrentUserID');
  proid;
  profiledataUni=this.profiledata.university

  constructor(private _auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.proid = this.route.snapshot.paramMap.get('id');
    this._auth.profileData(this.proid).subscribe(
      (res) => {
        // if(res.university[0]==null){console.log('universitynull');console.log(res);res=  res+this.profiledata;console.log(res)}
        return (this.profiledata = res);
      },
      (err) => {
        return console.log(err);
      }
    );
    this.avatarlink = this._auth.mainlink + '/users/' + this.proid + '/avatar';
  }

  getdimeruid() {
    return this.DimeruID;
  }

  userdata1() {
    return this.profiledata;
  }

  univerify() {
    return this.profiledata.university[0].isApproved;
  }

  follow() {
    this._auth.Follow(this.proid).subscribe(
      (res) => {
        console.log(true);
      },
      (err) => console.log(err)
    );
  }
}
