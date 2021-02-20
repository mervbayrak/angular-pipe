# AngularPipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

To generate pipe :

```
ng g pipe some
```
Then in app.module.ts:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomePipe } from './pipes/some.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SomePipe  <-- Add 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

###  Example 1
Then use it in HTML as:

```
<div>{{ [1, 2, 3, 4] | some: predicate }} </div>
```
Then use it in Typescript as:

```
 predicate = function(item : number) {
    return item > 2;
  };
```


###  Example 1
Then use it in HTML as:

```
<li *ngFor="let arr of array | some: predicate">
    {{ arr.name }}  {{ arr.price }}  {{ arr.color }}
</li>
```
Then use it in Typescript as:

```
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
```
