{
// Create a generic function that concatenates multiple arrays of the same type using rest parameters.
function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result4 = arrays.reduce((T, array) => T.concat(array), []);
    console.log(result4);
    return result4;
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
}
