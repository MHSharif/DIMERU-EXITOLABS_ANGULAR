import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  public link="https://1ddac15b40a3.ngrok.io/user/confirm/";


  constructor(private route:ActivatedRoute,private _auth: AuthService) { }

  ngOnInit(): void {
    
  }
  verify(){
    let id=this.route.snapshot.paramMap.get('id');
    this.link=this.link+id;
    this._auth.verify(this.link)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )      

  }

}
