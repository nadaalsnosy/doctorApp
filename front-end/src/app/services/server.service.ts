import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  getAll(url: string) {
    return this.http.get(`${environment.base_url}/${url}`);
  }

  post(url: String, data: object) {
    return this.http.post(`${environment.base_url}/${url}`, data);
  }

  patch(url: String, data: object) {
    return this.http.patch(`${environment.base_url}/${url}`, data);
  }

  delete(url: String, id: any) {
    return this.http.delete(`${environment.base_url}/${url}/${id}`);
  }
}
