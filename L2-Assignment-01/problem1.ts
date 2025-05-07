{
// Create a function that takes a string and an optional boolean.
// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

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