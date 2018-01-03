import { Inject, Injectable } from '@angular/core';
import { CartService } from "../../cart/services/cart.service";

@Injectable()
export class NavbarService
{
  constructor(private cartService: CartService)
  {
  }
}
