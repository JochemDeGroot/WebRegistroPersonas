import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../../services/db.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-view-panel',
  templateUrl: './view-panel.component.html',
  styleUrls: ['./view-panel.component.css']
})
export class ViewPanelComponent implements OnInit {


  users: User[];

  constructor(private todoService: DbService) { }

  ngOnInit() {

    this.todoService.getUsers().subscribe(users => {
      this.users = users;
    });
  }


}
