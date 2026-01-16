export type Category = 
  | 'Breakfast'
  | 'Soup'
  | 'Salad'
  | 'Traditional Food'
  | 'Spaghetti / Rice / Maccoroni'
  | 'Sandwich'
  | 'WRap'
  | 'Steak'
  | 'Curry'
  | 'Chicken'
  | 'Pizza'
  | 'Burger'
  | 'Fish'
  | 'Juice & Shakes'
  | 'Hot Drinks'
  | 'Drinks'
  | 'Alcohol Drinks(Bottle)'
  | 'Continental Breakfast'
  | 'Extra';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameAm: string;
  descriptionEn?: string;
  price: number;
  category: Category;
  tags?: ('Vegetarian' | 'Spicy' | 'Meat' | 'Fish' | 'Popular')[];
}
