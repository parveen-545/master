import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

  sliderImages: any[] = [
  {
    "img" : "../assets/banner1.jpg",
    "sheading": "Web Design and Development",
    "paragraph" : "Design, develop and deploy custom application solutions with smooth functioning technologies"
   },
   {
    "img" : "../assets/banner2.jpg",
    "sheading": "Mobile App Development",
    "paragraph" : "Add custom web and app efficiency, Go Mobile"
   },
   {
    "img" : "../assets/banner3.jpg",
    "sheading": "Website Development",
    "paragraph" : "Design, development and deploy custom application solutions with smooth functioning technologies"
   }
];
 
 
}
