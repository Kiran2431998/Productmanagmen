import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
addproductmessage:string | undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }
  submit(data:product){
    
    this.product.addProduct(data).subscribe((result)=>{
        console.warn(result)
        if(result){
          this.addproductmessage="product is successfully added"
        }
        setTimeout(() => (this.addproductmessage=undefined),3000);
    })
  }

}
