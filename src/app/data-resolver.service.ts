import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestServiceService } from './request-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver {

  constructor(private requestService: RequestServiceService) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
    console.log('resolver dziala');
    return this.requestService.getData();
  }
}
