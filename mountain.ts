//Tallest Mountains
interface Mountain {
    name: string;
    height: string;
}

let mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: '19341' },
    { name: 'Everest', height: '29029' },
    { name: 'Denali', height: '20310' },
  ];

  function findNameOfTallestMountain(param: Mountain[]):string{
    
    return ''
  }

//   let variable = findNameOfTallestMountain();
//   console.log(variable);

  //Products
  interface Product {
    name: string;
    price: number;
}
let products: Product[] = [
    { name: 'Scarf', price: 15.99 },
    { name: 'Hat', price: 25.99 },
    { name: 'Mittens', price: 12.99 },
  ];

  function calcAverageProductPrice(this: {a: number, b: number}, a: number) {
    this.a = a;
    return this;
  }

  //Inventory
  interface InventoryItem {
    product: Product;
    quantity: number;
}
let inventory: InventoryItem[] = [
    { product.name: 'motor', product.price: 10.00, quantity: 10 },
    { product.name: 'sensor', product.price: 12.50, quantity: 4 },
    { product.name: 'LED', product.price: 1.00, quantity: 20 },
  ];

//What needs to be in inventory items array
//   { 
//       product:{
//           name: 'name',
//           price: 'price'

//       },
//       quantity: 10
//   }

  function calcInventoryValue(this: {a: number, b: number}, a: number) {
    this.a = a;
    return this;
  }