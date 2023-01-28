import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css']
})
export class ViewappComponent implements OnInit {
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
      
  }

  /*cancelNewAppoint(_appId: string){
    this.taskService.cancelAppoint(_appId);
  }*/
}
