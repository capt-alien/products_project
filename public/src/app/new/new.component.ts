import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct={
    name:'',
    quantity: '',
    price: ''
  }
  errors;

  constructor(private http: HttpService, 
              private router: Router) { }

  ngOnInit() {
  }

  createProduct(){
    console.log("new Button Clicked") 
    const observable = this.http.postProduct(this.newProduct);
    observable.subscribe((data:any)=>{
      console.log(data);
      if(data.message==='fail'){
        this.errors = data.error['message'];
      }else{
        this.router.navigate(['/'])
      }
    })
  }

}
