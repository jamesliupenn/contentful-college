import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})

// This is the component that shows all the contents that 
// we have on Contentful
export class ContentListComponent implements OnInit {

  courses: Entry<any>[];
  lessons: Entry<any>[];

  constructor(
    private contentfulService: ContentfulService
  ) {}
 
  // On init, we load both the lessons and the courses 
  // storing the response into an array of Entries
  ngOnInit() {
  	this.contentfulService.getLessons()
  	.then(lessons => {
  		this.lessons = lessons;
  		// console.log(lessons);
  	})

  	this.contentfulService.getCourses()
  	.then(courses => {
  		this.courses = courses;
  		// console.log(courses);
  	})


  }

}
