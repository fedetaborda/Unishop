import { Component, OnInit } from '@angular/core';




declare function init_plugins();

@Component({
  selector: 'app-buscadorview2',
  templateUrl: './buscadorview2.component.html'
})
export class Buscadorview2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
