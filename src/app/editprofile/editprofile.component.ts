import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  UserProfile = {
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
        isApproved: true,
      },
    ],
    secondary: [
      {
        req_id: '',
        requestedBy: '',
        requestedTo: '',
        roll: '',
        registration: '',
        Name: '',
        Board: '',
        Grade: '',
        year: '',
        isApproved: true,
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
        isApproved: true,
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
        end: '',
        current: false,
        isApproved: false,
        contractEnd: '',
      },
    ],
    achievement: [
      {
        req_id: 1,
        requestedBy: '10061773',
        requestedTo: '22047126',
        orgName: 'Exitolabs',
        title: 'ksdafjksldfjf',
        topic: 'sdlfkjsdfkjsdklf',
        description: 'sdlfkjasfljsdflkjdsfkljsdfklj',
        duration: '100',
        start: '2001-09-19T18:00:00.000Z',
        end: '2001-09-28T18:00:00.000Z',
        achievement: '',
        certificateID: 'asdlkajdlkajdlkajdlkadjakldj',
        certificationExpire: '2021-01-31T18:00:00.000Z',
        location: 'Mirpur DOHS',
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
ProfileNav='/profile/'+localStorage.getItem('CurrentUserID');
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _pro: ProfileComponent
  ) {}
  ngOnInit() {
    this.UserProfile = this._pro.userdata1();
  }

  UpdateInfo() {
    this._auth.editprofile(this.UserProfile).subscribe(
      (res) => {
        this._router.navigate([this.ProfileNav]);
      },
      (err) => console.log(err)
    );
  }
}
