import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product={
    name:'',
    quantity: '',
    price: ''
  }
  errors: any;

  constructor(private route: ActivatedRoute,
              private http: HttpService,
              private router: Router,){ }

  ngOnInit() {
    this.route.params.subscribe((data:any)=>{
      this.getOneByID(data.id)
    })
  }
  getOneByID(id){
    const observable = this.http.getOneProduct(id)
    observable.subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    });
  }
  buttonSubmit(id){
    console.log(this.product)
    const observable = this.http.updateProduct(id, this.product)
    observable.subscribe((data:any)=>{
      if(data.message==='fail'){
        this.errors = data.error['message'];
      } else{
        console.log("edit made");
        this.router.navigate(['/'])
      }
    })
  }

}
