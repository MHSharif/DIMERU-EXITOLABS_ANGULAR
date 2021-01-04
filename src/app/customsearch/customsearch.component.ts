import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-customsearch',
  templateUrl: './customsearch.component.html',
  styleUrls: ['./customsearch.component.css'],
})
export class CustomsearchComponent implements OnInit {
  search = {
    title: '',
    location: '',
    company: '',
    type: '',
    skill: '',
    designation: '',
  };
  link;

  constructor(private cs: SearchComponent) {}

  ngOnInit(): void {}
  csearch() {
    this.link =
      '/institutes/jobposts?' +
      'search=' +
      this.search.title +
      '&skill=' +
      this.search.skill +
      '&company=' +
      this.search.company +
      '&location=' +
      this.search.location +
      '&type=' +
      this.search.type +
      '&designation=' +
      this.search.designation;
      localStorage.setItem('CustomSearch',this.link);

    // if (this.search.title != '') {
    //   this.link1 = this.link1 + 'search=' + this.search.title;
    // }
    // if (this.search.skill != '') {
    //   this.link1 = this.link1 + '&skill=' + this.search.skill;
    // }
    // if (this.search.company != '') {
    //   this.link1 = this.link1 + '&skill=' + this.search.company;
    // }
    // if (this.search.location != '') {
    //   this.link1 = this.link1 + '&skill=' + this.search.location;
    // }
    // this.link=this.link+this.link1;

    // this.cs.showres(this.link);
  }
}
