import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  pagedata;
  avatarlink;
  jobpost = {
    title: '',
    desc: '',
    req: '',
    loc: '',
    type: '',
    designation: '',
  };
pid;
pidL=localStorage.getItem('CurrentUserPageID');
  constructor(private _auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('pid');
    console.log(this.pid)
  }

  postthisjob() {
    this._auth.postajob(this.jobpost).subscribe(
      (res) => {
        console.log(true);
      },
      (err) => console.log(err)
    );
  }
  follow() {
    this._auth.Follow(this.pid).subscribe(
      (res) => {
        console.log(true);
      },
      (err) => console.log(err)
    );
  }
}
