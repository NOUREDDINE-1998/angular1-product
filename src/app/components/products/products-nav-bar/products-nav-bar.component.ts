import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActionEvent, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmiter:EventEmitter<ActionEvent>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
    this.productEventEmiter.emit({type:ProductActionTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts(){
    this.productEventEmiter.emit({type:ProductActionTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(){
    this.productEventEmiter.emit({type:ProductActionTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct(){
    this.productEventEmiter.emit({type:ProductActionTypes.NEW_PRODUCTS});
  }

  onSearch(dataForm:any){
    this.productEventEmiter.emit({type:ProductActionTypes.SEARCH_PRODUCTS,payload:dataForm});
  }
}
