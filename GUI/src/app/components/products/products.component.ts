import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { faHeart,faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { WishlistService } from 'src/app/services/wishlist.service';
import { GeneralService } from 'src/app/services/general.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  token = localStorage.getItem('token_laya')

  added = false;
  clicked = this.general.click;

  //icons
  heart = faHeart
  check = faHeartCircleCheck

  products:any = []


  constructor(private wishlist: WishlistService,
              private general: GeneralService,
              private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    
  }

  ngDoCheck():void{
    this.clicked = this.general.click;
    console.log("products",this.clicked, this.general.click)
  }

  getProducts(){
    this.service.getProducts()
      .subscribe((data:any) => {
        this.products = data;
        console.log(this.products)
      });
  }

  postProducts(){
    this.service.postProducts()
    .subscribe((data) => {
        console.log(data);
      });
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
