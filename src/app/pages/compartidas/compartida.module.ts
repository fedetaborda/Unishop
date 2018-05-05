import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// component


// PIPES
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule

    ],
    declarations: [

    ],
    exports: [

    ]
  })
  export class CompartidaModule {}