import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router , ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-resetpassconfirm',
  templateUrl: './resetpassconfirm.component.html',
  styleUrls: ['./resetpassconfirm.component.css']
})
export class ResetpassconfirmComponent implements OnInit {

  user={"link":"","password":""};
  public link="";

  constructor(private route:ActivatedRoute,private _auth: AuthService) { }

  ngOnInit(): void {
  }
  resetpassconfirm(){

  
      let id=this.route.snapshot.paramMap.get('id');
      this.link=id;
      this.user.link=this.link;
      this._auth.resetpasswordconfirm(this.user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )      
  
    
    



  }

}
