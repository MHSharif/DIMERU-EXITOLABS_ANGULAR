import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.css'],
})
export class CreatepageComponent implements OnInit {
  createpage = { name: '', type: '', head: '' };
  selectedValue: string;
  selectedCar: string;

  types: Type[] = [
    { value: 'Institution', viewValue: 'Institution' },
    { value: 'Non-Profitable', viewValue: 'Non-Profitable' },
    { value: 'Organization', viewValue: 'Organization' },
  ];
  constructor(private _auth:AuthService) {}

  ngOnInit(): void {}



  createP() {
    this._auth.pagecreate(this.createpage)
      .subscribe(
        res => {
          console.log(true)
        },
        err => console.log(err)
      )
  }
}
