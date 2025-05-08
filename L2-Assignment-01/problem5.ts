{
//Write a function that takes a string | number and returns:
//1.  The length if it's a string
//2.  The number multiplied by 2 if it's a number

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