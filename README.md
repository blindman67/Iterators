# Iterators

Very basic set of functions to simplify some common iteration needs.

The reason I use them is because that provide a way to break from the iteration.

- doFor calls callback count times
- doGrid  calls callback iterating a grid by column, row
- setOf Creates an array containing count objects returned by callback
- eachOf Iterates each item in array
- eachPropertyOf iterates each property of an object

## `doFor(count, callback)`

Do the callback count times. To break out return `true`

```Javascript
doFor(10,i => console.log("Count " + i));
```

Breaking out

```Javascript
doFor(10,i => {
    if(i === 5) { return true }
    console.log("Count " + i)
});
```

Callback arguments `callback(i, count)`

- i the current iteration starts at 0
- count the count 

Callback return

- true to break out of loop

## `doGrid(rows, columns, callback)`

Do the callback count times. To break out return `true`

```Javascript
doGrid(5, 5, (x,y) => console.log("X : " + x + " Y : " + y));
```

Callback arguments `callback(x, y, rows, columns)`
Callback return `true` to break out.

## `setOf(size, callback)`

Returns a new array of size.
There is no breakout for this function

```Javascript
console.log(setOf(5,(i, size) => i)); // >> [0,1,2,3,4]  
```

Callback arguments `callback(index, size)`
Callback return item to add to array.

## `eachOf(array, callback)`

Calls `callback` once for each item in `array`.
Callback return `true` to breakout

```Javascript
eachOf([1,2,3,4,5,6,7,8],(item, index, arrayLength) => console.log(item)); 
```

Callback arguments `callback(item, index, arrayLength)`


## `eachPropertyOf(object, callback)`

Calls `callback` once for each property of `object`.
Callback return `true` to breakout

```Javascript
eachPropertyOf({A : 1, B : 2},(value, key, index, numberOfProperties) => console.log(value)); 
```

Callback arguments `callback(value, key, index, numberOfProperties)`



