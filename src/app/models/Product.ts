export class Product{
    id: number;
    name: string;
    price: number;
    color: string;
    
    constructor(id: number, name: string, price: number, color: string){
        this.id =  id;
        this.name = name; 
        this.price = price;
        this.color = color;
    }
  }