//Tallest Mountains
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
  ];

// Close to figuring this one out, I think this code properly finds the tallest mountain, just couldn't get it to print out the name of the tallest mountain
//   function findNameOfTallestMountain(param: Mountain[]):string{
//     let maxHeight = param[0].height;
//     let maxMountainHeight;
//     param.forEach(element =>{
//         if(element.height > maxHeight){
//             maxHeight = element.height;
//             maxMountainHeight = element;
//         }
//   }

// //   let tallestMountain = findNameOfTallestMountain(mountains);
// //   console.log(tallestMountain);

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
    let totalPrice = 0;
    for(let params of param){
        totalPrice += params.price;
    }
    return totalPrice/param.length;
    
  }

  let averagePrice = calcAverageProductPrice(products);
  console.log(averagePrice);
  

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

//Really close to figuring this one out, I think something is wrong with my syntax in line 83
//   function calcInventoryValue((param: InventoryItem[]):number{
//     let totalValue = 0;
//     for (let i = 0; i < param.length; i++) {
//         totalValue += parseInt(param.[i].price)*(param[i].quantity);
//       }
//   }

//   let inventoryValue = calcInventoryValue(inventory);
//   console.log(inventoryValue);