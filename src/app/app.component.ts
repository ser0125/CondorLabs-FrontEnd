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
  ready = false;
  constructor(public cebrokerProvider: CeBrokerProvider, private http: HttpClient) {
  }
  ngOnInit(): void {
  this.http.get('https://api.cebroker.com/v2/featuredCoursesProfession?profession=36').subscribe(data => {
    this.featuredCourses = data;
  });
}
searchCourse(course) {
  this.cebrokerProvider.getCourse(course).then((data) => {
  this.coursesInfo = data;
  console.log(this.coursesInfo);
    }).catch((error) => {
  console.log(error)
    })
  }
}
