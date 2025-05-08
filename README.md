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

# 2. An example of using union and intersection types in TypeScript:

## Union:

1. In a simple word union means 'or'.
2. It express with the symbol of '|'.
3. When we have to use multiple things or something from multiple things then we have to use this union.
4. Result returns a true value if any of value is/are presence.
5. Example: function processValue(value: string | number): number{
   return value;
   }

## Intersection:

1. In a simple word union means 'and'.
2. It express with the symbol of '&'.
3. When we have match all the things, or have to make sure that all the values are presence then we have to use Intersection.
4. Example: if(value & id){
   return false;
   }else{
   return true;
   }
