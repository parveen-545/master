import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private pageInfo:any;
  constructor() {
    this.pageInfo = {
                    "img" : "../assets/banner-contact.png",
                    "sheading": "Contact Us",
                    "paragraph" : "We will answer you."
                  }
    localStorage.setItem('page',JSON.stringify(this.pageInfo));
   }

  ngOnInit() {
  }

}
