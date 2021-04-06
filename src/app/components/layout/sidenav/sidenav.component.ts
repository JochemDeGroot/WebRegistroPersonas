import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened = false;
  addPanelActive = false;
  viewPanelActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAdd() {
    if (this.addPanelActive === false) {
      this.addPanelActive = true;
      this.viewPanelActive = false;
    }
    this.opened = false;
  }

  showView() {
    if (this.viewPanelActive == false) {
      this.viewPanelActive = true;
      this.addPanelActive = false;
    }
    this.opened = false;
  }

  log(state: any) {
    console.log(state);
  }

}
