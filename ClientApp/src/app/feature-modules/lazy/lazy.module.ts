import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavbarModule } from "../../core-modules/navbar/navbar.module";
import { LazyComponent } from './components/lazy.component';

@NgModule({
  imports: [
    NavbarModule,
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' },
    ])
  ],
  exports: [
    LazyComponent,
  ],
  declarations: [
    LazyComponent,
  ],
  providers: []
})

export class LazyModule { }
