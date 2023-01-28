import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService ) {}

  createAppoint( appName: string, appDate: string, appTime1: string, appTime2: string ){
    return this.webReqService.post('appointments', {appName, appDate, appTime1, appTime2});
  }

  getAppoint() {
    return this.webReqService.get('appointments');
  }

  /*cancelAppoint( _id: string) {
    return this.webReqService.delete(`appointments/${_id}`);
  }*/
}