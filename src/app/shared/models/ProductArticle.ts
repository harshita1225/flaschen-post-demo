import { Article } from './Article';
import { Product } from './Product';

export interface ProductArticle extends Product, Article {}
