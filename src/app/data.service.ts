import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  menus = [
    {id: 0, title: "Shopping Basket 1", icon: "fa-shopping-cart", data:
      [
        {product: "16lb bag of Skittles", quantity: 1, price: 16.00, tax: 0},
        {product: "Walkman", quantity: 1, price: 99.99, tax: 10},
        {product: "Bag of microwave Popcorn", quantity: 1, price: 0.99, tax: 0}
      ]
    },
    {id: 1, title: "Shopping Basket 2", icon: "fa-shopping-cart", data:
    [
      {product: "Imported bag of Vanilla-Hazelnut Coffee", quantity: 1, price: 11.00, tax: 0.55},
      {product: "Imported Vespa", quantity: 1, price: 15001.25, tax: 2250.25}
    ]},
    {id: 2, title: "Shopping Basket 3", icon: "fa-shopping-cart", data : [
      {product: "Imported crate of Almond Snickers", quantity: 1, price: 75.99, tax: 3.8},
      {product: "Discman", quantity: 1, price: 55.00, tax: 5.5},
      {product: "Imported Bottle of Wine", quantity: 1, price: 10.00, tax: 1.5},
      {product: "300# bag of Fair-Trade Coffee", quantity: 1, price: 997.99, tax: 0}
    ]}
  ];

  constructor() { }

  public getMenus():Array<{id, title}>{
    return this.menus;
  }

  public getMenu(menuId){
    return this.menus[menuId];
  }
}
