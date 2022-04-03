import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionTypes } from 'src/app/state/product.state';


@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
@Input() product?:Product;
@Output() productEventEmitter:EventEmitter<ActionEvent>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(p:Product){
    this.productEventEmitter.emit({type:ProductActionTypes.SELECT_PRODUCTS,payload:p});
  }

  onDelete(p:Product){
    this.productEventEmitter.emit({type:ProductActionTypes.DELETE_PRODUCTS,payload:p});

  }

  onEdit(p:Product){
    this.productEventEmitter.emit({type:ProductActionTypes.EDIT_PRODUCTS,payload:p});

  }
}

