import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  switch = true;
  errorMsg = null;

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.minLength(8),Validators.required])
  })

  constructor(private Auth: LoginServiceService,
    private router: Router) { }

  ngOnInit(): void {
    // let f = localStorage.getItem('token_laya');
    // if (f!==null){
    //   this.router.navigate([''])
    // }
    
    // console.log(f)
  }


  switchBtn(){
    console.log(this.switch)
    this.switch = !this.switch
  }

  onSubmit(){
    this.Auth.postLogin(this.loginForm.value)
    .subscribe((result:any)=>{
      localStorage.setItem('token_laya',result.token)
      this.router.navigate(['/'])
    },(error:any)=>{
      this.errorMsg = error.error.message
    })
  }

}
