import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product={
    name:'',
    quantity: '',
    price: ''
  }
  // @Input() oneProduct: any;

  constructor(private route: ActivatedRoute,
              private http: HttpService,
              private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe((data:any)=>{
      this.getOneProduct(data.id)
      console.log(this.product)
    });
  }
  getOneProduct(id){
    const observable = this.http.getOneProduct(id)
    observable.subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    })
  }
  deleteOneProduct(id:any){
    const observable = this.http.deleteProduct(id)
    observable.subscribe((data:any)=>{
      console.log("Deleted: "+data)
      this.http.getAllProducts()
      this.router.navigate(['/'])
    })
  }

}
