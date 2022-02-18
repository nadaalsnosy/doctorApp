import { ServerService } from './server.service';
import { Injectable } from '@angular/core';
import { DOCTORS } from './mock-doctors';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VisitsService {
  constructor(private ServerService: ServerService, private http: HttpClient) {}

  addVisit(data: any) {
    console.log(data);
    data.date = new Date(
      data.date.year,
      data.date.month,
      data.date.day
    ).toISOString();
    return this.ServerService.post('visits', data);
  }

  getAll() {
    return this.ServerService.getAll('visits');
  }

  // add(url: String, data: object) {
  //   return this.http.post(`${environment.base_url}/${url}`, data);
  // }

  // edit(url: String, data: object) {
  //   return this.http.patch(`${environment.base_url}/${url}`, data);
  // }

  // delete(url: String, id: any) {
  //   return this.http.delete(`${environment.base_url}/${url}/${id}`);
  // }
}
