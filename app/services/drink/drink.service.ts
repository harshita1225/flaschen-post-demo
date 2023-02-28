import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../mock-products';
import { Product } from 'src/app/shared/models/Product';
import { Article } from 'src/app/shared/models/Article';
import { ProductArticle } from 'src/app/shared/models/ProductArticle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  private output: Article[] = [];
  private _rootUrl: string =
    'https://flapotest.blob.core.windows.net/test/ProductData.json';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this._rootUrl);
  }

  flattenArticles(product: Product): ProductArticle[] {
    return product.articles.map((article) => ({
      ...product,
      ...article,
    }));
  }

  getAllProducts(products: Product[]): ProductArticle[] {
    const flattenedProducts = products.flatMap(this.flattenArticles);
    return flattenedProducts;
  }
  /*   getNewArray(): Article[] {
    let result = PRODUCTS.map((product) =>
      product.articles.map((article) => {
        this.output.push(article);
      })
    );
    // console.log(this.output);
    return this.output;
  } */
}
