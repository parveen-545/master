import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  private pageInfo:any;
  constructor() {
    this.pageInfo = {
                    "img" : "../assets/banner-portfolio.png",
                    "sheading": "Portfolio",
                    "paragraph" : "We deliver smart and flexible solutions ever."
                  }
    localStorage.setItem('page',JSON.stringify(this.pageInfo));
   }


 
  ngOnInit() {
  }

}
