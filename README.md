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
- JavaScript is an object-oriented, high-level, untyped, interpreted, dynamic language.
- JavaScript started as a way to make web pages more interactive. Nowadays, JavaScript runs in more places than just web browsers - it runs on web servers, phones and even robots!

### Types
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
- Characters are strings of length 1.

```js
"OSS".length; // 3
"OSS".charAt(0); // O
"OSS".replace("SS", "OP"); // "OOP"
"OSS".toLowerCase(); // "oss"
```

#### Boolean
- `true` or `false`
- Any value can be converted into boolean.
    - `false`, `0`, `NaN`, `null`, `undefined` ---> false
    - Everything else ---> true

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

#### Appending a Value
```js
var a = ["cat", "dog"];
a.push("bird"); // returns 3
```

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

### Objects
- An object is simply a collection of key-value pairs.
- However, the order of key-value pairs is not preserved.

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

### Callback
Callbacks aren't really a feature of JavaScript like `Object` or `Array`, but instead they're a certain way to use functions. Since functions in JavaScript are a type of object, they can be passed to other functions and can even be assigned to variables. These functions can be defined previously or in-line.

```js
function a() {
    console.log("Callback function.");
}

function b(callback) {
    console.log("Called function.");

    callback();

    console.log("After callback function.")
}

b(a);
b(function() {
    console.log("Callback function.")
});

```

Callbacks are extremely useful for asynchronous programming and are typically used for "one-off" asynchronous invocations. They can be used to signal when a particular task has been completed. For example, in the code below, the date is printed to console once `setTimeout()` waits for 1000ms.

```js
setTimeout(function() {
    console.log(new Date())
}, 1000); // calls functions after 1 sec
```

## Task 1 - Practicing Basic JavaScript
### Running JavaScript
Unlike most languages, JavaScript runs on a web browser. In order to test your JavaScript code, use the *JavaScript Console* provided by Google Chrome (`Alt` + `Cmd` + `J` on Mac).

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

## Task 2 - Introduction to Node.js
### What is Node.js?
Node.js is an open source, cross-platform runtime environment for server-side JavaScript applications.

### When to use Node.js?
- JSON based REST APIs
- Web / Mobile-Web Apps
- Network Apps
- *Not for CPU intensive work.*

### Setup
1. Install [Node.js](https://nodejs.org/).
2. Install [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you haven't already.
3. Get a text editor. I recommend either [Sublime Text](http://www.sublimetext.com/) or [Atom](https://atom.io/). *Install the command line tools for your preferred text editor to open files/directories quicker.*

- For Windows users, please use *Git Bash* that comes installed with *Git* to emulate the UNIX commands used throughout the workshop.

## Task 3 - REPL
REPL or Read-Evaluate-Print-Loop provides a way to interactively run JavaScript and see the results. It's very useful for debugging, testing or just trying things out.

Start up the REPL by typing in `node` in your command line.

```Bash
$ node
```

Then, try out the following JavaScript commands to become familiar with REPL:

```Bash
> var a = [1, 2, 3];

> console.log(a);
[ 1, 2, 3 ]

> a.forEach(function (z) { console.log(z); });
1
2
3
```

Ignore the *undefined* statements you see when you type in each command.

Exit REPL by typing `.exit` or pressing `Ctrl` + `D`.

## Task 4 - Hello World
Create a folder titled `hello` and go into it:

```Bash
$ mkdir hello
$ cd hello
```

Next, create an empty `index.js` file in that folder and open it in Sublime Text:

```Bash
$ touch index.js
$ subl index.js
```

Type the following into `index.js`:

**index.js**

```js
console.log("Hello, NTUOSS!");
```

Save and exit the file. Execute your application by running the following command:

```Bash
$ node index.js
```

You should see the following output on Terminal:

```Bash
Hello, NTUOSS!
```

## Task 5 - require()
#### The Module System
- Makes it possible to include other JavaScript files into your app.
- Helps organize your code into separate parts with limited responsibilities.
- Using modules is simple. You just `require()` them.

In the `hello` folder, create a new file called `greet.js` and open it:

```Bash
$ touch greet.js
$ subl greet.js
```

Type the following lines into `greet.js`:

**greet.js**

```js
exports.hello = function () {
	return "Hello, NTUOSS!";
}
```
Next, open up `index.js` file and modify it so it looks like:

**index.js**

```js
var greet = require('./greet.js');
console.log(greet.hello());
```

Execute your application by running:

```Bash
$ node index.js
```

The output should remain the same as before.

Next, modify `greet.js` & `index.js` as follows:

**greet.js**

```js
exports.hello = function () {
    return "Hello, NTUOSS!";
}

exports.konichiwa = function () {
    return "Konichiwa, NTUOSS!";
}
```

**index.js**

```js
var greet = require('./greet.js');
console.log(greet.hello());
console.log(greet.konichiwa());
```

Execute your application. The output should be as follows:

```Bash
Hello, NTUOSS!
Konichiwa, NTUOSS!
```

Another way of handling exports is as follows:

**greet.js**

```js
module.exports = {
	hello: function () {
		return "Hello, NTUOSS!";
	},
	konichiwa: function () {
		return "Konichiwa, NTUOSS!";
	}
}
```

## Task 6 - File I/O
Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent. It ships with a number of core modules. Some examples are:
- `console`: Sends output to stdout or stderr.
- `http`: Provides a server and client for HTTP traffic.
- `fs`: Provides functions to interact with the file system.

In your `hello` folder, create a text file with the following contents:

**log.txt**

```
2016-08-09T13:50:33.166Z A 2
2016-08-09T13:51:33.166Z B 1
2016-08-09T13:52:33.166Z C 6
2016-08-09T13:53:33.166Z B 8
2016-08-09T13:54:33.166Z B 5
```

What this log data means is not important, but basically each message contains a date, a letter and a value. Let's add up the values for each letter.

The first thing we need to do is read the contents of the file. We can do this using the `fs` module provided by Node.js. Create a new file titled `my_parser.js` and type in the following:

**my_parser.js**

```js
// Load the fs (filesystem) module:
var fs = require('fs');

// Read the contents of the file into memory:
fs.readFile('example_log.txt', function (err, logData) {

    // If an error occurred, throwing it will
    // display the exception and end our app.
    if (err) throw err;

    // logData is a Buffer, convert to string.
    var text = logData.toString();
});
```


## Task 7 - Building a Web Server (`http`)
Edit `index.js` as follows:

**index.js**
```js
var http = require('http');
var greet = require('./greet.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(greet.hello());
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000.");
```

Execute your app using `node index.js` and navigate to `http://127.0.0.1:8000` on your preferred web browser.

Congratulations! You've just built your very own web server!

Quit your app using `Ctrl` + `C`.
