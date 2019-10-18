import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
    this.getAllProducts()
  }
  // INDEX
  getAllProducts(){
    return this.http.get('/products')
  }
  // GET ONE
  getOneProduct(id){
    return this.http.get(`/products/${id}`)
  }
  // NEW
  postProduct(data){
    return this.http.post('/products', data)
  }
  // DELETE
  deleteProduct(id){
    return this.http.delete(`/products/${id}`)
  }
  // EDIT
  updateProduct(id, data){
    return this.http.put(`/products/${id}`, data)
  }

  // END ROUTES
}
