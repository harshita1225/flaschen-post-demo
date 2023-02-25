import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Article } from '../shared/models/Article';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /*  transform(product: Product[], filterText: string): any {
    if (!filterText) {
      return product;
    }
    return product.forEach((item) =>
      item.articles.filter((val) => val.unit === filterText)
    );
  } */

  transform(article: Article[], filterText: string): any {
    if (!filterText) {
      return article;
    }
    return article.filter((val) => val.pricePerUnitText.includes(filterText));
  }
}
