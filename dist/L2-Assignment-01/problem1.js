"use strict";
{
    // Create a function that takes a string and an optional boolean.
    // If the boolean is true or not provided, return the string in uppercase.
    // If the boolean is false, return the string in lowercase.
    function formatString(input, toUpper) {
        if (toUpper === undefined || toUpper) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    formatString("Hello World", false);
}
