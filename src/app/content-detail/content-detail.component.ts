import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  lesson: Entry<any>;
  course: Entry<any>;

  constructor(
  	private contentfulService: ContentfulService,     
  	private route: ActivatedRoute,
  	private location: Location
  ) {}

  // On init, get the individual response of each lesson or
  // course according to the 'slug' parameter
  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) =>
    	this.contentfulService.getLesson(params.get('slug'))))
    	.subscribe(lesson => this.lesson = lesson);
    this.route.paramMap.pipe(switchMap((params: ParamMap) =>
      this.contentfulService.getCourse(params.get('slug'))))
      .subscribe(course => this.course = course);
  }

  // Assign a goBack function for button
  goBack() {
    this.location.back();
  }

  // A goToLesson function to get individual response
  goToLesson() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) =>
      this.contentfulService.getLesson(params.get('slug'))))
      .subscribe(lesson => this.lesson = lesson);
  }
}
