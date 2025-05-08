{
//Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.
interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }else{
        const highestPricedProduct = products.reduce((highestPrice, product) =>
            product.price > highestPrice.price ? product : highestPrice
          );
          return highestPricedProduct;
    }
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  getMostExpensiveProduct(products);
}