import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/producto';

declare function init_plugin();

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styles: []
})


export class BarraLateralComponent implements OnInit {

@Input() productos: Producto;


  constructor() { }

  ngOnInit() {
    init_plugin();
  }
  

}
