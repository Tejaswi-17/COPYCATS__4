import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist = this.list.wishList;

  // icons
  heart = faHeart

  constructor(private list: WishlistService) { }

  ngOnInit(): void {
  }

}
