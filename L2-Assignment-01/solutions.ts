{
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === undefined || toUpper) {
            const result1 = input.toUpperCase();
            return result1;
        } else {
            const result2 = input.toLowerCase();
            return result2;
        }
    }
    
    formatString("Hello World", false);
    formatString("Hello World", true);
    formatString("Hello World");
}

{
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        const result3 = items.filter(item => item.rating >= 4);
        return result3;
    }
    filterByRating([{"title": "Pen", "rating": 3}, {"title": "Pencil", "rating": 4}, {"title": "Book", "rating": 4.1} ]);
}

{
    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result4 = arrays.reduce((T, array) => T.concat(array), []);
        console.log(result4);
        return result4;
    }
    concatenateArrays(["a", "b"], ["c"]);
    concatenateArrays([1, 2], [3, 4], [5]);
}

{
    class Vehicle {
        constructor (private make: string, public year: number) {
            this.make = make;
            this.year = year;
        }
    
        getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    
    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
            super(make, year);
            this.model = model;
        }
    
        getModel(): string {
            return `Model: ${this.model}`;
        }
    }
    
    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();
    myCar.getModel();
}

{
    function processValue(value: string | number) {
    if(typeof value === "string"){
        const result5 = value.length;
        console.log(result5); 
    }else if(typeof value === "number"){
        const result6 = value * 2;
        console.log(result6);
    }
    return value;
}

processValue("hello");
processValue(10);
}

{
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

{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{
        const weekendCondition = day === Day.Saturday || day === Day.Sunday;
        if(weekendCondition){
            return "Weekend";
        }else{
            return "Weekday";
        }
      }
    
    
    getDayType(Day.Monday);
    getDayType(Day.Sunday);
}

{
    async function squareAsync(n: number): Promise<number>{
        const odd = n % 2;
        if(odd){
            return Promise.reject("Negative number not allowed");
        }else{
            return new Promise((resolved) => {
                setTimeout(() => {
                    console.log("Square of the number is: ", n * n);
                    resolved(n * n)
                }, 1000);
            });
        };
    };
    
    squareAsync(4).then(console.log);
    squareAsync(-3).catch(console.error);
}