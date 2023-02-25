import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../mock-products';
import { Product } from 'src/app/shared/models/Product';
import { Article } from 'src/app/shared/models/Article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  NewArray: any;
  NestedArray: any;
  private output: Article[] = [];
  constructor() {}

  getAllProducts(): Product[] {
    return PRODUCTS;
  }

  /* getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://flapotest.blob.core.windows.net/test/ProductData.json'
    );
  }*/

  getNewArray(): Article[] {
    let result = PRODUCTS.map((product) =>
      product.articles.map((article) => {
        this.output.push(article);
      })
    );
    console.log(this.output);
    return this.output;
  }
}
