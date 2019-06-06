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
      "name": "Home",
      "link":"home"
    },    
    {
      "name": "about us",
      "link":"about"
    },
    {
      "name": "services",
      "link":"services"
    },
    {
      "name": "portfolio",
      "link":"portfolio"
    },

    {
      "name": "career",
      "link":"career"
    },
    {
      "name": "contact us",
      "link":"contact"
    }
  ];
}
