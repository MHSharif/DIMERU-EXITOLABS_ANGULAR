import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  link1=localStorage.getItem('CustomSearch');
  results = [];
  constructor(private auth: AuthService) {}

  ngOnInit(): void {this.showres(this.link1)}

  showres(something) {
    this.link1 = something;
    this.auth.searchdata(something).subscribe(
      (res) => this.results = res,
      (err) => console.log(err)
    );
    localStorage.removeItem('CustomSearch');
  }
}
  