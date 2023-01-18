export interface product {
  id: number;
  image: string;
  name: string;
  price: number;
  descript: any;
  quantity: number;
}

// export interface cart {
//   id: number;
//   image: string;
//   name: string;
//   price: number;
//   quantity: number;
// }
export interface cart {
  id: number;
  quantity: number;
}
export interface order{
  id: number;
  quantity: number;
}

export interface navigationList {
  category: string;
  subcategories: string[];
}

export interface SuggestedProduct {
  banerimage: string;
  category: Category;
}

export interface Category {
  id: number;
  category: string;
  subcategory: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  productCategory: Category;
  price: number;
  quantity: number;
  imageName: string;
}
export interface CartProduct{
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}