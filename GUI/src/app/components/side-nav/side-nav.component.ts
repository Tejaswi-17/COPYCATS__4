import { Component, OnInit } from '@angular/core';

import { faHome, faLaptopCode, faUsers, faTools, faUserSecret, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  clicked = this.gen.click;

  constructor(private gen: GeneralService) { }

  ngOnInit(): void {
  }

  c(){
    console.log(this.gen.click)
    this.gen.click = true;
    console.log("after",this.gen.click)

  }

}
