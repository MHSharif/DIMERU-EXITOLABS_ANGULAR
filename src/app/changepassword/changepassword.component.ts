import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _auth: AuthService,
    private _pro: ProfileComponent
  ) {}

  user = { old: '', newPass: '' };
  // dimeruid: string;


  ngOnInit(): void {}

  changepass() {
    var dimeruid = this._pro.getdimeruid();
    console.log(dimeruid);
    this._auth.changepassword(this.user, dimeruid).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
