import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Object> {
    const req = this.http.get('https://jsonplaceholder.typicode.com/posts');
    return req;
  }
}
