import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {
  user = { "email": ""};

  constructor(public dialog: MatDialog,private _auth: AuthService) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(Notify);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  resetemail() {
    this._auth.resetpassemail(this.user).subscribe(
      (res) => {
        console.log(true);
      },
      (err) => console.log(err)
    );
  }










}

@Component({
  selector: 'app-notify',
  templateUrl: 'notify.html',
})
export class Notify {}
