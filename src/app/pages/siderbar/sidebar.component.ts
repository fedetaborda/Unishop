import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  subTotal: string;

  constructor(public _productoService: ProductoService) { }

  ngOnInit() {

    this.subTotal = this._productoService.subTotal;
  }

}
