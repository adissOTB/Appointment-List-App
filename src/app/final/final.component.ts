import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  appoints: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        //console.log(params['_appId']);

        this.taskService.getAppoint().subscribe((appoints: any) => {
          this.appoints = appoints;
        })
      }
    )
    
   
  }

  createNewAppoint(appName: string, appDate: string, appTime1: string, appTime2: string){
    this.taskService.createAppoint(appName, appDate, appTime1, appTime2).subscribe((response : any) =>{
      console.log(response);

    });
  }

  /*cancelNewAppoint() {
    return this.taskService.cancelAppoint(this.appoints).subscribe((res: any) => {
      console.log(res);  
    }); 
  }*/ 
}        
