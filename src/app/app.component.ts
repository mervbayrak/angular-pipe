import { Component } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  array : Product[] = 
  [
    new Product(1, 'Laptop', 4000, 'White'), 
    new Product(2, 'Laptop', 5000, 'Black'), 
    new Product(3, 'Mouse', 100, 'Black'), 
    new Product(4, 'Keyboard', 300, 'Black'),
    new Product(5, 'Keyboard', 250, 'Gray'),
  ];
  predicate = function(item : Product) {
    return item.color == 'Black';
  };
}

