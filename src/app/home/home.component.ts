import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  timelineData=[];
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {

    // this.timelineData=this._auth.timeline();
    // console.log(this.timelineData)
    this.showtimeline();

  }
  showtimeline(){this._auth.timeline().subscribe(
    (res) => {this.timelineData = res;console.log(res);console.log(this.timelineData);},
    (err) => console.log(err)
  )
}
like(){this._auth.likeapost(this.timelineData[0].job_id).subscribe(
  (res) => {this.timelineData = res;console.log(res);console.log(this.timelineData);},
  (err) => console.log(err)
)
}



}
