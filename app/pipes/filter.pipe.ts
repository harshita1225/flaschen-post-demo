import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Article } from '../shared/models/Article';
import { PRODUCTS } from '../mock-products';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(article: Article[], filterText: number): any {
    if (!filterText) {
      return article;
    }

    return article.filter(
      (val) =>
        parseFloat(val.pricePerUnitText.slice(1, 6).split(',').join('.')) >
        filterText
    );
  }
}
