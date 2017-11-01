import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featuredCourses: any ;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
  this.http.get('https://api.cebroker.com/v2/featuredCoursesProfession?profession=36').subscribe(data => {
    this.featuredCourses = data;
    console.log(this.featuredCourses[0]);
  });
}
}
