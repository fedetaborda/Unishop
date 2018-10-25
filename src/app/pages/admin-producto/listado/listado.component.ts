import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})




export class ListadoComponent implements OnInit {

  productos: Producto[]  = [];

  constructor() { }

  ngOnInit() { }


}
