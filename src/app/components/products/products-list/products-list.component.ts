import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, ProductActionTypes } from 'src/app/state/product.state';
import { DataStateEnum } from 'src/app/state/product.state';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

 @Input() products$:Observable<AppDataState<Product[]>> | null=null;
readonly DataStateEnum=DataStateEnum;
//@Output() productEventEmiter:EventEmitter<ActionEvent>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
/*
  onSelect(p:Product){
    this.productEventEmiter.emit({type:ProductActionTypes.SELECT_PRODUCTS,payload:p})
  }
  onDelete(p:Product){
    this.productEventEmiter.emit({type:ProductActionTypes.DELETE_PRODUCTS,payload:p})

  }
  onEdit(p:Product){
    this.productEventEmiter.emit({type:ProductActionTypes.EDIT_PRODUCTS,payload:p})

  }
  onActionEvent($event:ActionEvent){
this.productEventEmiter.emit($event);
  }
  */
}
