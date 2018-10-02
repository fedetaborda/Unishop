import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import { Producto } from '../../../../models/producto';

declare var jQuery: any;

declare function init_vendor();
declare function init_plugins();



@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  @Input() productos: Producto;

  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('caracteristicas') caracteristicas: ElementRef;

  constructor() { }

  ngOnInit() {

    init_vendor();
    init_plugins();
  }
  modalCaracteristicas() {
    jQuery(this.caracteristicas.nativeElement).appendTo("body").modal('show');
  }

  modal() {

    jQuery(this.myModal.nativeElement).appendTo("body").modal('show');
    

  }

}
