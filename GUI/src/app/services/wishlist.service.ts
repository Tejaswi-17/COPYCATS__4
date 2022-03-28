import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishList:any = []

  constructor() { }

  addWishlist(i:any){
    // console.log(i)
    this.wishList.push(i);
    console.log(this.wishList)
  }
}
