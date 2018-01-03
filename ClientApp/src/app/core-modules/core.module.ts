import { NgModule, ModuleWithProviders } from '@angular/core';
import { CartModule } from "./cart/cart.module";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
  imports: [
    CartModule.forRoot(),
    NavbarModule.forRoot(),
  ],
  exports: [],
  declarations: [
  ],
  providers: []
})

export class CoreModule
{
}
