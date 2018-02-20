import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/api/products');
  }

  addProduct(newProduct){
    return this._http.post('/api/new', newProduct);
  }

}
