import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { WishlistService } from 'src/app/services/wishlist.service';

import { faHeart,faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
  mensCloth:any = []

  //icons
  heart = faHeart
  check = faHeartCircleCheck

  constructor(private products: ProductsService,
    private wishlist: WishlistService) { }

  ngOnInit(): void {this.products.getProducts()
    .subscribe(data=>{
      this.mensCloth = data.filter((eachItem:any)=>{
        eachItem.brand==='men'
      })
    })

    console.log("men",this.mensCloth)
  }

  addProductToWishlist(i:any){
    // console.log(i,i.added)
    i.added = !i.added
    let p = {
      added: i.added ? false: true,
      ...i
    }
    console.log(p,i.added)
    this.wishlist.addWishlist(p);
  }



}
