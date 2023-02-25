import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Article } from '../shared/models/Article';
import { DrinkService } from '../services/drink/drink.service';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../mock-products';
import { SortPipe } from '../pipes/sort.pipe';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute,
    private orderPipe: OrderPipe
  ) {
    console.log(this.orderPipe.transform(this.article, this.order));
  }

  product: Product[] = [];
  article: Article[] = [];

  order: string = 'unit';
  filterText: string = '';

  isShowDiv1 = false;
  isShowDiv2 = true;
  toggleDisplay() {
    this.isShowDiv1 = !this.isShowDiv1;
    this.isShowDiv2 = !this.isShowDiv2;
  }

  key: string = '';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  DisplayAll() {
    this.filterText = '';
  }

  filterDisplay() {
    this.filterText = '2,';
  }

  ngOnInit(): void {
    this.product = this.drinkService.getAllProducts();
    /*  this.drinkService.getAllProducts().subscribe((products) => {
      this.product = products;
    });
 */
    this.article = this.drinkService.getNewArray();
  }
}
