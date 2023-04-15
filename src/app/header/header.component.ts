import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: any;
  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        name: 'Home',
        link: '',
        display: true,
        active: true
      },
      {
        name: 'About us',
        link: '',
        display: true,
        active: false
      },
      {
        name: 'Courses',
        link: '',
        display: false,
        active: true
      },
      {
        name: 'My progress',
        link: '',
        display: false,
        active: false
      },
      {
        name: 'Test',
        link: '',
        display: false,
        active: false
      },
      {
        name: 'Certificate',
        link: '',
        display: false,
        active: false
      },
      {
        name: 'Forum',
        link: '',
        display: false,
        active: false
      },
      {
        name: 'Log out',
        link: '',
        display: false,
        active: false
      },
      {
        name: 'Log in',
        link: '',
        display: true,
        active: false
      }
    ]
  }

}
