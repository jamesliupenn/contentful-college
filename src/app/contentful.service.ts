import { Injectable } from '@angular/core';
import { createClient, Entry, ContentfulClientApi } from 'contentful';

const CONFIG = {
  space: 'cfi49wuhi5hh',
  accessToken: '79d1391385833423130a674eaec484f4bdb5ef25471c590bedcc0084fcd30e35',
  contentTypeIds: {
    lesson: 'lesson',
    course: 'course'
  }
}

@Injectable({
  providedIn: 'root'
})

// This is the Contentful Service that connects to the API and 
// handles requests sent from the app
export class ContentfulService {
  private cfClient = createClient({
  	space: CONFIG.space,
  	accessToken: CONFIG.accessToken,
  });
  spaceList: Function[];

  constructor() { 
  	this.getSpace();
  	this.spaceList = [];
  }

  getSpace() {
  	return this.cfClient.getSpace()
  		.then((space) => {
  			this.spaceList.forEach(handler => handler(space.name));
  			return space;
  		})
  		.catch(console.error);
  }

  // fetch all the lessons
  getLessons(query?: object): Promise<Entry<any>[]> {
  	return this.cfClient.getEntries(Object.assign({
  		content_type: CONFIG.contentTypeIds.lesson
  	}, query))
  	.then(res => res.items);
  }

  getLesson(slug: string): Promise<Entry<any>> {
  	return this.getLessons({ 'fields.slug': slug })
  		.then(result => result[0]);
  }

  // fetch all the courses
  getCourses(query?: object): Promise <Entry<any>[]> {
  	return this.cfClient.getEntries(Object.assign({
  		content_type: CONFIG.contentTypeIds.course
  	}, query))
    .then(res => res.items);
  }

  getCourse(slug: string): Promise <Entry<any>> {
    return this.getCourses({ 'fields.slug': slug})
      .then(result => result[0]);
  }


}
