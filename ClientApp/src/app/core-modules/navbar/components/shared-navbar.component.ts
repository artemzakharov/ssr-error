import { Component, Inject } from '@angular/core';
import { CartService } from "../../cart/services/cart.service";

import { NavbarService } from "../services/navbar.service.";

@Component({
  selector: 'shared-navbar',
  templateUrl: './shared-navbar.component.html'
})
export class SharedNavbarComponent 
{
  constructor(public cartService: CartService)
  {
  }
}
