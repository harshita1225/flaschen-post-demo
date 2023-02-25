import { Article } from './Article';
export class Product {
  id!: number;
  name!: string;
  brandName!: string;
  descriptionText?: string;
  articles!: Article[];
}
