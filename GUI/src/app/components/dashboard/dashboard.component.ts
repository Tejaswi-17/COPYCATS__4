import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    // this.postProducts()
    // let p = localStorage.getItem('token_laya')
    // if (p===null){
    //   console.log("p",p)
    //   this.route.navigate(['/login'])
    // }
  }

  
  


}
