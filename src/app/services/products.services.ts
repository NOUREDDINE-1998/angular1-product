import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/model/product.model';
import {Observable} from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class ProductsService {
constructor(private http: HttpClient) { }

getAllProducts():Observable<Product[]>{
let host=environment.host;
return this.http.get<Product[]>(host+"/products");
}

getSelectedProducts():Observable<Product[]>{
let host=environment.host;
return this.http.get<Product[]>(host+"/products?selected=true");
}

getAvailableProducts():Observable<Product[]>{
let host=environment.host;
return this.http.get<Product[]>(host+"/products?available=true");
}

searchProducts(keyword:string):Observable<Product[]>{
    let host=environment.host;
return this.http.get<Product[]>(host+"/products?name_like="+keyword);
}
select(product:Product):Observable<Product>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.put<Product>(host+"/products/"+product.id,product);
}

delete(product:Product):Observable<void>{
    let host=environment.host;
    return this.http.delete<void>(host+"/products/"+product.id);
}
save(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.post<Product>(host+"/products/",product);
}
getProduct(productId:number):Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/products/"+productId);
}
updateProduct(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/products/"+product.id,product);
    }

}
