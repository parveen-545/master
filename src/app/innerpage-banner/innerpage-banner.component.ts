import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerpage-banner',
  templateUrl: './innerpage-banner.component.html',
  styleUrls: ['./innerpage-banner.component.css']
})
export class InnerpageBannerComponent implements OnInit {
  pageInfo: any;
  sliderimg: { "img": any; "sheading": any; "paragraph": any; }[];
  constructor(){
   const Page = localStorage.getItem('page');
   this.pageInfo = JSON.parse(Page);
   this.sliderimg = [
      {
        "img": this.pageInfo.img,
        "sheading": this.pageInfo.sheading,
        "paragraph" : this.pageInfo.paragraph
      }
    ];
  }
  ngOnInit() {
  }
}
