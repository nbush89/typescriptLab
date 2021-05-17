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

  function calcAverageProductPrice(param: Product[]):number{
    
    
  }

//   let variable2 = calcAverageProductPrice();
//   console.log(variable2);
  

  //Inventory
  interface InventoryItem {
    product: Product;
    quantity: number;
}
let inventory: InventoryItem[] = [
    {
        product:{
            name: 'Motor',
            price: 10
        },
        quantity: 10
    },
    {
        product:{
            name: 'Sensor',
            price: 12.5
        },
        quantity: 4
    },
    {
        product:{
            name: 'LED',
            price: 1
        },
        quantity: 20
    }
  ];

  function calcInventoryValue(this: {a: number, b: number}, a: number) {
    this.a = a;
    return this;
  }