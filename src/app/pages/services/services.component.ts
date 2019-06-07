import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  private pageInfo:any;
  constructor() {
    this.pageInfo = {
                    "img" : "../assets/banner-services.png",
                    "sheading": "services",
                    "paragraph" : "We deliver smart and flexible solutions ever."
                  }
    localStorage.setItem('page',JSON.stringify(this.pageInfo));
   }

  ngOnInit() {
  }

}
