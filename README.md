# 1. Differences between interfaces and types in TypeScript:

## Interface:

1. Interface starts with the "interface" keyword.
2. Interface is like alias is used to declare a type.
3. Interface start with a curly braces so it is hard to define a primitive type with an interface.
4. Interface is better for non-primitive types.
5. Ex: interface Example = {
   name: string;
   age: number;
   address: string;
   }

## Type:

1. Type starts with the "type" keyword.
2. Type is better for non-primitive types.
3. Ex: type Example2 = string;
