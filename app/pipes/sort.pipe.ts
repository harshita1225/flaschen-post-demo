import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../shared/models/Article';
import { Product } from '../shared/models/Product';
@Pipe({
  name: 'sortBy',
})
export class SortPipe implements PipeTransform {
  transform(article: Article[], sortText: string): any {
    if (sortText)
      article.sort((a: any, b: any) => (a[sortText] > b[sortText] ? 1 : -1));
    else article.sort((a, b) => (a > b ? 1 : -1));
    return article;
  }
}
