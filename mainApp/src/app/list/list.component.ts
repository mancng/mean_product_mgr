import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService(){
    let observable = this._httpService.getProducts()
    observable.subscribe(data => {
      this.products = data;
    })
  }

}
