import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  newProduct = {title: "", price: 0.00, imageUrl: ""}
  productTitle: string;
  productPrice: number;
  productImageUrl: string;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addProduct(){
    const productToAdd =  {title: this.productTitle, price: this.productPrice, imageUrl: this.productImageUrl }

    this._httpService.addProduct(productToAdd)
    .subscribe((responseData:any)=>{
      console.log(responseData);
      this._router.navigate(['list']);
    })

  }

}
