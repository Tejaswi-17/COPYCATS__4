import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  token = localStorage.getItem('token_laya')


  constructor(private http: HttpClient) { }

  
  getProducts(){
    const options = {
      headers: {
        'Content-Type': "application/json",
        'Authorization': [`Bearer ${this.token} `]
      }
    }
    return this.http
      .get('https://apiv2.shiprocket.in/v1/external/products',options)
      .pipe(
        map(
          (data:any)=>{
            console.log("data",data)
            const Parray:any= []
            for (const key of data.data){
              if (key.brand != '' && key.sku!="divyddsd"){
                let p = {
                  ...key,
                  added: false
                }
                Parray.push(p)
              }
            }
  
            return Parray;
          }
        )
      )
      
  }

  postProducts(){
    const data = {
      "name": "frock",
      "category_code": "default",
      "type": "Single",
      "qty": "100",
      "sku": "spacex2",
      "image_url":"https://thefashionworld.in/wp-content/uploads/2022/02/faaef5130c385e658a526c8ea32b762d.jpg"
    }
    const options = {
      headers: {
        'Content-Type': "application/json",
        'Authorization': [`Bearer ${this.token} `]
      }
    }
    return this.http
      .post('https://apiv2.shiprocket.in/v1/external/products',data, options)
  }
}
