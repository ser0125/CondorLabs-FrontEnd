import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CeBrokerProvider {

  link1: any = `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=`;
  link2: any = `&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=`;
  constructor(private http: HttpClient) {}

  /*Method to search by item on the app*/
  getCourse(page: number, course: string) {
    return new Promise((resolve, reject) => {
      const url: string = this.link1 + page + this.link2 + course;
      this.http.get(url).subscribe(
        (data) => {
          resolve(data)
        },
        (error) => {
          reject( 'Error:' + error)
        })
    })}
}