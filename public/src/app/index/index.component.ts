import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  products: any = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    const observable = this.http.getAllProducts();
    observable.subscribe((data:any)=>{
      this.products = data;
      console.log(data)
  })

}
}
