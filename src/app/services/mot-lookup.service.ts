import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotRequest } from '../models/mot-request.model';
import { environment } from 'src/environments/environment';
import { HTTP_OPTIONS } from '../models/http-helpers';
import { Vehicle } from '../models/vehicle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotLookupService {

  constructor(private http: HttpClient) { }
  
  get = (request: MotRequest): Observable<Vehicle> => {
    let url: string = environment.apis.motLookup;

    return this.http.post<Vehicle>(url, request, HTTP_OPTIONS)
      .pipe();
  }
}
