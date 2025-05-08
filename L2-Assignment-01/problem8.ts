{
// Create an async function that:

// Returns the square of a number after 1 second
// Rejects if the number is negative

async function squareAsync(n: number): Promise<number>{
    const odd = n % 2;
    if(odd){
        return Promise.reject("Negative number not allowed");
    }else{
        return new Promise((resolved) => {
            setTimeout(() => {
                console.log("Square of the number is: ", n * n);
                resolved(n * n)
            })
        })
    }
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
}