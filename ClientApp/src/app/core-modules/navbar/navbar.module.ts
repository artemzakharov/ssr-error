import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { SharedNavbarComponent } from "./components/shared-navbar.component";
import { NavbarService } from "./services/navbar.service.";


@NgModule({
  imports: [],
  exports: [
    SharedNavbarComponent
  ],
  declarations: [
    SharedNavbarComponent
  ],
  providers: []
})

export class NavbarModule
{
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: NavbarModule,
      providers: [
        NavbarService,
      ]
    }
  }
}
