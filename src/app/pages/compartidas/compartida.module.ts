import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// component
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';
import { Productoscompra2Component } from '../componentes/productoscompra/productoscompra2.component';
import { CartComponent } from './cart/cart.component';

// PIPES
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule

    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        BuscadorComponent,
        CartComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent
        
    ]
  })
  export class CompartidaModule {}