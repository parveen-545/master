import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  private pageInfo:any;
  constructor() {
    this.pageInfo = {
                    "img" : "../assets/banner-about.png",
                    "sheading": "About Us",
                    "paragraph" : "Winux Software Solutions has a rich experience in developing and deploying ASP and ASP.NET software solutions to clients worldwide."
                  }
    localStorage.setItem('page',JSON.stringify(this.pageInfo));
   }

  ngOnInit() {
  }

}
