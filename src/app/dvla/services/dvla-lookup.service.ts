import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP_OPTIONS } from 'src/app/models/http-helpers';
import { environment } from 'src/environments/environment';
import { DvlaRequest } from '../models/dvla-request.model';
import { DvlaResponse } from '../models/dvla-response.model';
import { DvlaVehicle } from '../models/dvla-vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class DvlaLookupService {

  constructor(private http: HttpClient) { }

  get = (registration: string) => {
    var url: string = environment.apis.dvlaLookup;
    const req: DvlaRequest = {
      registration: registration
    };

    return this.http.post<DvlaResponse>(url,  req, HTTP_OPTIONS).pipe();
  }

  getById = (request: DvlaRequest) => {
    var url: string = `${environment.apis.dvlaLookup}/1`;
    return this.http.get<DvlaVehicle>(url, HTTP_OPTIONS).pipe();
  }
}
