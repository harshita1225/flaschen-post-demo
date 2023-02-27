import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../shared/models/Article';
import { Product } from '../shared/models/Product';
@Pipe({
  name: 'sortBy',
})
export class SortPipe implements PipeTransform {
  transform(articles: Article[], isAscending: boolean): any {
    const sortedArticles = [...articles]; // make a copy of the array

    if (isAscending) {
      console.log(sortedArticles.sort((a, b) => a.price - b.price));
      return sortedArticles.sort((a, b) => a.price - b.price);
    } else {
      console.log(sortedArticles.sort((a, b) => b.price - a.price));
      return sortedArticles.sort((a, b) => b.price - a.price);
    }
  }
}
