import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class CartService
{
  constructor(private router: Router)
  {
  }
}
