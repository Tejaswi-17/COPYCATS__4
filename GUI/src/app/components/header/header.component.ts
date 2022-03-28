import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  check = this.general.click

  constructor(private general: GeneralService,
    private route: Router) { }

  ngOnInit(): void {
  }

  // ngDoCheck():void{
  //   this.general.click = false;
  // }

  c(){
    this.general.click = false;
  }

  logout(){
    localStorage.removeItem('token_laya')
    this.route.navigate(['/login'])
  }

}
