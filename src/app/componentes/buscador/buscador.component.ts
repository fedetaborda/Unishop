import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  

  constructor(public router: Router) { }

  ngOnInit() {

  }

  buscar( termino: string ) {

    if ( termino ) {
      this.router.navigate(['/busqueda/', termino ]);
    }

  }

}
