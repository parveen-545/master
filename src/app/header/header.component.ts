import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
    menus: any[] = [
    {
      "name": "Home"
    },
    {
      "name": "services"
    },
    {
      "name": "portfolio"
    },
    {
      "name": "about us"
    },
    {
      "name": "career"
    },
    {
      "name": "contact us"
    }
  ];
}
