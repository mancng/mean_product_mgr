import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/api/products');
  }

  getSingleProduct(id){
    return this._http.get(`/api/edit/${id}`);
  }

  addProduct(newProduct){
    return this._http.post('/api/new', newProduct);
  }

  updateSingleProduct(id, theProduct){
    return this._http.put(`/api/edit/${id}`, theProduct);
  }

  deleteProduct(id){
    return this._http.delete(`/api/edit/${id}`);
  }

}
