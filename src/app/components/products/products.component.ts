import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.services';
import { Product } from '../../model/product.model';
import { Observable,of} from 'rxjs';
import { catchError,map,startWith} from 'rxjs/operators';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products$:Observable<AppDataState<Product[]>> | null=null;
readonly DataStateEnum=DataStateEnum;
  constructor(private productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {

  }
onGetAllProducts(){
this.products$=this.productsService.getAllProducts().pipe(
  map(data=>({dataState:DataStateEnum.LOADED,data:data})),
  startWith({dataState:DataStateEnum.LOADING}),
  catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
);
}

onGetSelectedProducts(){
  this.products$=this.productsService.getSelectedProducts().pipe(
    map(data=>({dataState:DataStateEnum.LOADED,data:data})),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  );
  }

  onGetAvailableProducts(){
    this.products$=this.productsService.getAvailableProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
    }
    onSearch(value:any){
      this.products$=this.productsService.searchProducts(value.keyword).pipe(
        map(data=>({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
      );
    }
    onSelect(p:Product){
      this.productsService.select(p).subscribe(data=>{
        p.selected=data.selected;
      })
    }

    onDelete(p:Product){
      let v=confirm("are you sure?");
if (v)
      this.productsService.delete(p).
      subscribe(data=>{
        this.onGetAllProducts();
      })
    }

    onNewProduct(){
      this.router.navigateByUrl("/newProduct");
    }
    onEdit(p:Product){
      this.router.navigateByUrl("/editProduct/"+p.id);
    }

    
 
}

