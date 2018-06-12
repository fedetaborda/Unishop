import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { safeUrlPipe } from './url.pipe';



@NgModule({
  imports: [ ],
  declarations: [
    ImagenPipe,
    safeUrlPipe
  ],
  exports: [
    ImagenPipe,
    safeUrlPipe
  ]
})
export class PipesModule { }