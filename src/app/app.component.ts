import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  public imagesUrl;
 
ngOnInit() {
    this.imagesUrl = [
    '../assets/portfolio-1.png',
    '../assets/portfolio-2.png',
    '../assets/portfolio-3.png',    
    '../assets/portfolio-4.png',    
    '../assets/portfolio-5.png',    
    '../assets/portfolio-6.png',
    '../assets/portfolio-7.png',
    '../assets/portfolio-8.png',
    ];
}


hservices: any[] = [
  {
    "heading": "Mobile App Development",
    "img" : "../assets/serv-icon1.png",
    "paragraph" : "Mobile apps are reigning supreme and for a business to make the right impression on the clients it is most important to get it made by experienced mobile app developers."
   },
   {
    "heading": "Ecommerce Development",
    "img" : "../assets/serv-icon2.png",
    "paragraph" : "With the advent of the Internet, e-Commerce online has become the necessity. We at Team In India design and develop the best e-Commerce websites for you – something that are an exact match of what you were expecting."
   },
   {
    "heading": "Web Design & Development",
    "img" : "../assets/serv-icon3.png",
    "paragraph" : "WINUX Software Solutions creates complete web sites that rival the best. We create unique web designs with mobile first approach there by creating sites that are responsive and work best on all devices putting forward your business goals in best possible way."
   }
];


}
