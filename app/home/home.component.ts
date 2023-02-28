import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Article } from '../shared/models/Article';
import { DrinkService } from '../services/drink/drink.service';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../mock-products';
import { SortPipe } from '../pipes/sort.pipe';
import { OrderPipe } from 'ngx-order-pipe';
import { ProductArticle } from 'src/app/shared/models/ProductArticle';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute,
    private orderPipe: OrderPipe,
    private sortPipe: SortPipe
  ) {}

  // product: Product[] = [];
  // article: Article[] = [];
  flatproduct: ProductArticle[] = [];

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

  filterText: number = 0;
  DisplayAll() {
    this.filterText = 0;
  }

  filterDisplay() {
    this.filterText = 2;
  }

  ngOnInit(): void {
    //this.product = this.drinkService.getAllProducts(PRODUCTS);
    //console.log(this.product);
    /* this.drinkService
      .getAllProduct()
      .subscribe((product) => (this.product = product));*/

    this.drinkService.getAllProduct().subscribe((products: Product[]) => {
      const flattenedProducts = this.drinkService.getAllProducts(products);
      this.flatproduct = flattenedProducts;
    });
    //this.article = this.drinkService.getNewArray();
  }
}
