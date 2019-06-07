import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  private pageInfo:any;
  constructor() {
    this.pageInfo = {
                    "img" : "../assets/banner-services.png",
                    "sheading": "Career",
                    "paragraph" : "We deliver smart and flexible solutions ever."
                  }
    localStorage.setItem('page',JSON.stringify(this.pageInfo));
   }

  ngOnInit() {
  }

}
