export interface BookOfferType {
  id: string;
  imageUrl: string;
  title: string;
  categories: string[];
  description: string;
  author: string;
  price: string;
  oldPrice: number;
  discont: string;
  rating: number;
}

export interface BookSaleType {
  id: string;
  imageUrl: string;
  title: string;
  categories: string[];
  rating: number;
  price: string;
  oldPrice: string;
  discont: string;
}
export interface BookGridType {
  id: string;
  imageUrl: string;
  title: string;
  categories: string[];
  price?: number;
  oldPrice?: number;
}
