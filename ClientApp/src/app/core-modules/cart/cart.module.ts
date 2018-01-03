import { NgModule, ModuleWithProviders } from '@angular/core';
import { CartService } from "./services/cart.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: []
})

export class CartModule
{
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: CartModule,
      providers: [
        CartService
      ]
    }
  }
}
