import { Component, OnInit } from '@angular/core';

declare function init_plugins();
declare function init_vendor();

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html'
})
export class InteresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    //init_vendor();
  }

}
