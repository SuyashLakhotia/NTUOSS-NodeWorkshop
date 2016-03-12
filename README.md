# NTUOSS-NodeWorkshop

*by Suyash Lakhotia for NTU Open Source Society*

***Disclaimer*** *- This document is only meant to serve as a reference for the attendees of the workshop. It does not cover all the concepts or implementation details discussed during the actual workshop.*

### Workshop Details:
**When?**: Friday, 18 March 2016. 6:30 PM - 8:30 PM.<br>
**Where?**: Theatre@TheNest, Innovation Centre, Nanyang Technological University<br>
**Who?**: NTU Open Source Society<br>

### Questions?
Raise your hand at any time during the workshop or shoot me an [e-mail](mailto:suyashlakhotia@gmail.com) later.

### Errors?
If you find any mistake (typo or anything else), please make a pull request or [post an issue](https://github.com/SuyashLakhotia/NTUOSS-NodeWorkshop/issues/new)! Thanks!<br><br>


## Task 0 - Introduction to JavaScript
### What is JavaScript?
- Object-oriented dynamic language.
- World's most misunderstood language.

### Data Types
- Number
- String
- Boolean
- Symbol
- Object
    - Function
    - Array
    - Date
    - RegExp
- null
- undefined

#### Number
- 64-bit floating point.
- Be careful about floating point precision.

**Special Values:**
- NaN
- Infinity
- -Infinity

```js
parseInt("123"); // 123
isNaN(parseInt("a")); // true
isFinite(1/0); // false
```

#### String
- Made up of Unicode characters.
- Use string of length 1 to represent characters.

```js
"OSS".length; // 3
"OSS".charAt(0); // O
"OSS".replace("SS", "OP"); // "OOP"
"OSS".toLowerCase(); // "oss"
```

#### null and undefined
- *null*: Deliberate non-value.
```js
var x = null;
console.log(x); // null
```
- *undefined*: Uninitialized value.
```js
var x;
console.log(x); // undefined
```

#### Boolean
- `true` or `false`
- Any value can be converted into boolean.
    - `false`, `0`, `NaN`, `null`, `undefined` ---> false
    - Everything else ---> true

### Operators
- **Arithmetic:** +, -, \*, /, %, ++, --
- **Assignment:** =, +=, -=, \*=, /=, %=
- **Logical:** &&, ||, !
- **Conditional:** (condition) ? value1 : value2
- **Comparison:** ==, ===, !=, !==, >, <, >=, <=
- **Bitwise**

### Control Structures
#### if-else
```js
if (time < 10) {
    greeting = "Good Morning";
} else if (time < 20) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
```

#### switch
```js
switch (day) {
    case 0:
    case 6:
        text = "Weekend!";
        break;
    default:
        text = "Weekday!";
        break;
}
```

#### while & do-while
```js
while (index < 10) {
    index++;
}
```
```js
var input;
do {
    input = getInput();
} while (input != 0)
```

#### for
```js
for (var i = 0; i < 10; i++) {
    // executes 10 times
}
```

### Objects
- Simply a collection of name-value pairs.
- Similar to dictionaries in Python and HashMaps in Java.

#### Creating Objects
```js
var dog = { breed:"labrador", color:"brown" }
// OR
var dog = new Object();
dog.breed = "labrador";
dog.color = "brown";
```

#### Get Properties
```js
dog.breed;
dog["breed"];
```

#### Set Properties
```js
dog.breed = "labrador";
dog["breed"] = "labrador";
```

### Arrays
#### Creation
```js
var a = new Array();
a[0] = "cat";
a[1] = "dog";
a.length; // 2

// OR

var a = ["cat", "dog"];
a[1]; // "dog"
a[10] = "mouse";
a[10]; // "mouse"
a[5]; // undefined
```

### Functions
```js
function add(x, y) {
    return x + y;
}

add(1, 2); // 3
add(); // NaN
add(1, 2, 5); // 3

function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

add(1, 2, 3, 4); // 10
```

### Custom Objects
```js
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    };
}

var p = new Person("Barack", "Obama");
p.fullName(); // "Barack Obama"
```

### Callback Functions
- A callback is a function reference.
- Often defined in-line where it's required.
- Typically used for "one-off" asynchronous invocations.

```js
setTimeout(function() {
    console.log(new Date())
}, 1000); // calls functions after 1 sec
```

## Task 1 - Practicing Basic JavaScript
### Running JavaScript
Unlike most languages, JavaScript runs only on a web browser. In order to test your JavaScript code, use the *JavaScript Console* provided by Google Chrome (`Alt` + `Cmd` + `J` on Mac).

### Task 1.1
Write a program that uses `console.log` to print all the numbers from 1 to 100 with two conditions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 3 and 5, print "FizzBuzz".

### Task 1.2
Write a function `range` that takes two arguments, `start` & `end`, and returns an array containing all the numbers from `start` up to (and including) `end`. Next, write a function `sum` that takes an array of numbers and returns the sum of these numbers. Print `sum(range(1, 10))` and check whether it returns 55.

### Task 1.3
Write a constructor `Vector` that represents a vector in two-dimensional space. It takes `x` and `y` parameters, which it should save to properties of the same name. Give `Vector` two methods, `plus` & `minus`, that takes another vector as a parameter and returns a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values. Add a method `length` which computes the length of the vector i.e. the distance of the point (x, y) from the origin (0, 0).

### Task 1.4
Define a function `add` that takes in two numbers as parameters and a third `callback` parameter. This function should call the callback function, passing the result of the addition to the callback function as an argument. Call `add`, passing two numbers and a callback (defined in-line). The callback should print "The sum is: \__".

### Solutions
Solutions are available [here](/Task 1 Solutions/).

