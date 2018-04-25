import { Component, OnInit } from '@angular/core';

declare function init_plugin();

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styles: []
})


export class BarraLateralComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    init_plugin();
  }

}
