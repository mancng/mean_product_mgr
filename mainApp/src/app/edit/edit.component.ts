import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productToEdit: any = {_id: "", title: "", imageUrl: "", createdAt: "", updatedAt: ""};
  productTitle: string;
  productId: string;
  productPrice: number;
  productImageUrl: string;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      this._httpService.getSingleProduct(params.get('id'))
      .subscribe((responseData)=>{
        this.productToEdit = responseData;
        this.productTitle = this.productToEdit.title;
        this.productPrice = this.productToEdit.price;
        this.productImageUrl = this.productToEdit.imageUrl;
      })
      this.productId = params.get('id');
      console.log(this.productId);
    })
  }

  updateProduct(){
    const toEdit = {title: this.productTitle, price: this.productPrice, imageUrl: this.productImageUrl}
    console.log("I'm here")
    console.log(toEdit)

    this._httpService.updateSingleProduct(this.productId, toEdit)
    .subscribe((responseData:any)=>{
      console.log("ONE MORE STEP FURTHER")
      if(responseData.error){
        console.log("Error editing product: " + responseData.error);
        this.errorMessage = responseData.error.message;
        // this._router.navigate(['/products']);
      }else {
        console.log("Updated successfully");
        this._router.navigate(['/products']);
      }
    })
  }

  deleteProduct(){
    // console.log("Delete button pressed")
    this._httpService.deleteProduct(this.productId)
    .subscribe((responseData: any)=>{
      if(responseData.error){
        console.log("Got error when deleting");
      } else {
        console.log("Deleted successfully")
        this._router.navigate(['/']);
      }
    })
  }

}
