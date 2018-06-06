import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vistas-prod',
  templateUrl: './vistas-prod.component.html'
})
export class VistasProdComponent implements OnInit {

  @Output('buscardorProd') buscardorProd: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
