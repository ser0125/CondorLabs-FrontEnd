import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CeBrokerProvider } from '../providers/cebroker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  featuredCourses: any ;
  coursesInfo: any;
  coursesInfoPage: any;
  ready = false;
  page= 1;
  mycourse: any;
  constructor(public cebrokerProvider: CeBrokerProvider, private http: HttpClient) {
  }
  ngOnInit(): void {
  this.http.get('https://api.cebroker.com/v2/featuredCoursesProfession?profession=36').subscribe(data => {
    this.featuredCourses = data;
  });
}
searchCourse(course) {
  this.mycourse = course;
  this.cebrokerProvider.getCourse(course).then((data) => {
  this.coursesInfo = data;
  this.ready = true;
  console.log(this.coursesInfo);
    }).catch((error) => {
  console.log(error)
    })
  }
}
