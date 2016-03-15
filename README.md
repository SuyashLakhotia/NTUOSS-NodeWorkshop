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
- JavaScript is a cross-platform, object-oriented, high-level, untyped, interpreted & dynamic scripting language.
- JavaScript started off as a way to make web pages more interactive since it can be connected to the objects of its host environment (a web browser, for example) to provide programmatic control over them.
- Nowadays, JavaScript runs in more places than just web browsers. It runs on web servers, phones and even robots!

### JavaScript Basics
- Case-sensitive.
- Instructions are called statements, separated by semicolons (`;`).
- Single line comments start with `//` while multi-line comments are wrapped with `/* ... */`.
- There are only three kinds of declarations in JavaScript:
	- `var`: Declares a variable, optionally initializing it to a value.
	- `let`: Declares a block scope local variable, optionally initializing it to a value.
	- `const`: Declares a read-only named constant.
- A JavaScript identifier must start with a letter, underscore (`_`) or dollar sign (`$`). Subsequent characters can be digits (0-9).

### Data Types
- Primitive Data Types:
	- Number
	- String
	- Boolean
	- Symbol
	- null
	- undefined
- Object:
    - Function
    - Array
    - Date
    - RegExp

#### Number
- 64-bit floating point.
- Be careful about floating point precision.

**Special Values:**

- NaN (Not a Number)
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
"OSS".charAt(0); // "O"
"OSS".replace("SS", "OP"); // "OOP"
"OSS".toLowerCase(); // "oss"
```

#### Boolean
- `true` or `false`
- Any value can be converted into boolean.
    - `false`, `0`, `NaN`, `null`, `undefined` → `false`
    - Everything else → `true`

#### null and undefined
- **null**: Deliberate non-value.

```js
var x = null;
console.log(x); // null
```

- **undefined**: Uninitialized value.

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

/* OR */

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
    case 6:
    case 7:
        text = "Weekend!";
        break;
    default:
        text = "Weekday!";
        break;
}
```

#### while
```js
while (index < 10) {
    index++;
}
```

#### do-while
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
- However, the order of these key-value pairs is not preserved.

#### Creating Objects
```js
var dog = { breed:"labrador", color:"brown" }

/* OR */

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
    console.log("Inside callback function.");
}

function b(callback) {
    console.log("Inside called function.");

    callback();

    console.log("After callback function.")
}

b(a);
b(function() {
    console.log("Inside callback function.")
});

```

Callbacks are extremely useful for asynchronous programming and are typically used for one-off asynchronous invocations. They can be used to signal when a particular task has been completed. For example, in the code below, the date is printed to console once `setTimeout()` waits for 1000ms.

```js
setTimeout(function() {
    console.log(new Date())
}, 1000);

console.log("Callbacks are awesome.");
```

Notice that "Callbacks are awesome." is printed before the date even though the line of code comes after. This is what makes callbacks unique & extremely useful.

### Finding Out More
To strengthen your JavaScript further, check out the [JavaScript Guide on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).


## Task 1 - Practicing Basic JavaScript
### Running JavaScript
Unlike most languages, JavaScript runs on a web browser. In order to test your JavaScript code on Firefox, use the *Web Console* (`Alt` + `Cmd` + `K`) or *ScratchPad* (`Shift` +  `F4`). On Google Chrome, use the *JavaScript Console* (`Alt` + `Cmd` + `J`).

### Task 1.1
Write a program that uses `console.log()` to print all the numbers from 1 to 100 with two conditions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 3 and 5, print "FizzBuzz".

### Task 1.2
Write a function `range` that takes two arguments, `start` & `end`, and returns an array containing all the numbers from `start` up to (and including) `end`. Next, write a function `sum` that takes in an array of numbers and returns the sum of these numbers. Print `sum(range(1, 10))` and check whether it returns 55.

### Task 1.3
Write a constructor `Vector` that represents a vector in two-dimensional space. It takes `x` and `y` parameters, which it should save to properties of the same name. Give `Vector` two methods, `plus` & `minus`, that takes another vector as a parameter and returns a new vector that has the sum or difference of the two vectors’ x and y values. Add a method `length` which computes the length of the vector i.e. the distance of the point (x, y) from the origin (0, 0).

### Task 1.4
Define a function `add` that takes in two numbers as parameters and a third `callback` parameter. This function should call the callback function, passing the result of the addition to the callback function as an argument. Call `add`, passing two numbers and a callback (defined in-line). The callback should print "The sum is: \__".

### Solutions
Solutions are available [here](/Task 1 Solutions/).


## Task 2 - Introduction to Node.js
### What is Node.js?
Node.js is an open source, cross-platform runtime environment for server-side JavaScript applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 

### When to use Node.js?
- JSON-based REST APIs
- Web / Mobile-Web Apps
- Network Apps
- **NOT** for CPU intensive work

### Setup
1. Install [Node.js](https://nodejs.org/).
2. Install [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you haven't already.
3. Get a text editor. I recommend either [Sublime Text](http://www.sublimetext.com/) or [Atom](https://atom.io/). *Install the command line tools for your preferred text editor to open files/directories quicker.*

- For Windows users, please use *Git Bash* that comes installed with *Git* to emulate the UNIX commands used throughout the workshop.


## Task 3 - REPL
REPL or Read-Evaluate-Print-Loop provides a way to interactively run JavaScript and see the results. It's useful for debugging, testing or just trying things out.

Start up the REPL by typing in `node` in Terminal:

```
$ node
```

Try out the following JavaScript commands to become familiar with REPL:

```
> var a = [1, 2, 3];

> console.log(a);
[ 1, 2, 3 ]

> a.forEach(function (z) { console.log(z); });
1
2
3
```

Ignore the *undefined* statements you see when you type in each command for now.

Exit REPL by typing `.exit` or pressing `Ctrl` + `D`.


## Task 4 - Hello World
Alright, let's make our first Node.js app!

Create a folder named `hello`:

```
$ mkdir hello
$ cd hello
```

Next, create an empty `index.js` file in that folder and open it in Sublime Text:

```
$ touch index.js
$ subl index.js
```

Type the following into `index.js`:

**index.js**

```js
console.log("Hello, NTUOSS!");
```

Save and exit the file. Execute your application by running the following command:

```
$ node index.js
```

You should see the following output on Terminal:

```
Hello, NTUOSS!
```


## Task 5 - `require()`
#### The Module System
- Helps organize your code into separate parts with limited responsibilities.
- Makes it possible to include other JavaScript files into your app.
- Using modules is simple. You just `require()` them.

<br>

In the `hello` folder, create a new file called `greet.js` and open it:

```
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

`exports.<key>` tells Node that we want the expression to be available in other files that `require()` this one.

Next, open up `index.js` file and modify it so it looks like:

**index.js**

```js
var greet = require('./greet.js');
console.log(greet.hello());
```

Execute your application by running:

```
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

```
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

Note that `module.exports` & `exports` reference the same object.


## Task 6 - File I/O
Node.js provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent. It ships with a number of core modules. Some examples are:
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

What this log data means is not important, but basically each message contains a date, a letter and a value.

We can read the contents of this file using the `fs` module provided by Node.js. Create a new file titled `my_parser.js` and type in the following:

**my_parser.js**

```js
// Load the fs (filesystem) module:
var fs = require('fs');

// Read the contents of the file into memory:
fs.readFile('log.txt', function (err, logData) {

    // If an error occurred, throwing it will
    // display the exception and end our app.
    if (err) throw err;

    // logData is a Buffer, convert to string.
    var text = logData.toString();

    // Print the contents of the log.
    console.log(text);
});
```

The `fs` module has a function named `readFile` that takes a file path and a callback. The callback will be invoked when the file is done being read. The file data comes in the form of a Buffer, which is basically a byte array. We can convert it to a string using the `toString()` function.

Execute the file:

```
$ node my_parser.js
2016-08-09T13:50:33.166Z A 2
2016-08-09T13:51:33.166Z B 1
2016-08-09T13:52:33.166Z C 6
2016-08-09T13:53:33.166Z B 8
2016-08-09T13:54:33.166Z B 5
```

### Asynchronous Callbacks
As can be seen above, the typical pattern in Node.js is to use asynchronous callbacks. Basically you're telling Node to do something and when it's done, Node will call your function (callback). This is because Node is single-threaded. While you're waiting on the callback to fire, Node can go off and do other things instead of blocking until the request is finished.

This is especially important for web servers. It's pretty common for modern web applications to frequently access databases. While you're waiting for the database to return results, Node can process more requests. This allows you to handle thousands of concurrent connections with very little overhead in contrast to creating a separate thread for each connection.


## Task 7 - Building a Simple Web Server (`http`)
Another useful built-in module is `http`, which makes it extremely easy to create a simple HTTP server.

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

Note that this is not a full-featured HTTP server. It can't serve any HTML files or images. In fact, no matter what you request, it will always return 'Hello World'.

Execute your app using `node index.js` and navigate to [http://127.0.0.1:8000](http://127.0.0.1:8000) on your preferred web browser.

Congratulations! You've just built your very own *simple* web server!

Quit your app using `Ctrl` + `C`.


## Task 8 - Express
If you want the server you built in **Task 7** to be a full-featured web server, then you have to check what was requested, read the appropriate files and send the appropriate content back. There's good news, though. People have already done the hard work for you.

[Express](http://expressjs.com/) is a framework to help build web applications. The first thing you have to do is install it. Along with the `node` command, Node.js also gives you access to a command called `npm`. This tool gives you access to an enormous collection of modules created by the community and one of them is Express.

Navigate to your `hello` folder on Terminal and install Express (and its dependencies):

```
$ cd path/to/hello
$ npm install express # ignore the warnings for now
```

When you install a module, it will put it in a `node_modules` folder inside your application directory. You can now `require()` it like any built-in module. Let's create a basic static file server using Express.

**index.js**

```js
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8000);

console.log("Server running at http://127.0.0.1:8000.");
```

```
$ mkdir public
$ node index.js
```

You now have a pretty capable static file server. Anything you put in the `/public` folder can now be requested by your browser and displayed. HTML, images, almost anything. For example, if you put an image called `image.png` inside the public folder, you can access it using your browser by going to [http://localhost:8000/image.png](http://localhost:8080/image.png). Of course Express has many more features, but you can look those up as you continue developing.


## Task 9 - NPM
So, what is `npm` exactly?

1. [A module registry](https://www.npmjs.com), containing a collection of open-source code.
2. A standard, to define dependencies on other packages.
3. A package manager, for locally installed packages.

`npm` is an extremely important tool for Node.js development. There are thousands of modules available that solve almost all typical problems that you're likely to encounter.

Remember the warnings when we were installing Express? Let's fix that by initializing our Node.js app.

```
$ npm init
name: (hello)
version: (1.0.0)
description: Hello World App
entry point: (index.js)
test command:
git repository:
keywords: hello world
author: Suyash Lakhotia
license: (ISC)
```

Initializing the app creates a `package.json` file, which contains an overview of your application.

**package.json**

```json
{
  "name": "hello",
  "version": "1.0.0",
  "description": "Hello World App",
  "main": "index.js",
  "dependencies": {
    "express": "^4.13.4"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "hello",
    "world"
  ],
  "author": "Suyash Lakhotia",
  "license": "ISC"
}
```

The dependencies section describes the name and version of the modules your app is dependent on. `npm` automatically detects Express as a dependency and lists it down for you. You can list as many dependencies as you want in this section.

Now, instead of installing each dependency separately, we can run a single command and install all of them.

```
$ npm install
```

When you run this command, `npm` will look in the current folder for a `package.json` file. If it finds one, it will install every dependency listed.

To make sure a dependency is listed in `package.json` whenever you install a new module in your app, use `--save`.

```
$ npm install --save <module-name>
```

In `package.json`, add the following to make sure you don't publish your app onto the `npm` registry by accident:

**package.json**

```json
{
  "name": "hello",
  "version": "1.0.0",
  "private": true,
  "description": "Hello World App",
  ...
}
```


## Task 10 - Building an API Server
For our last task, let's build a simple API server to list and save tasks. Create a new folder called `tasks` and go into it:

```
$ mkdir tasks && cd tasks
```

Initialize the project:

```
$ npm init
```

Import `express`, `express-session` and `body-parser` into your project:

```
$ npm install --save express express-session body-parser
```

Finally, create an empty file called `index.js` and type the following:

```
$ touch index.js && subl index.js
```

**index.js**

```js
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

// Middleware for handling session/cookies:
app.use(session({secret: 'ntu-oss', resave: true, saveUninitialized: true}));

// Middleware for handling POST requests:
app.use(bodyParser.urlencoded({extended: false}));

// In real life, this is usually some form of DB call:
function initializeTasks() {
    var tasks = [];
    tasks.push('Step 1: Learn Node');
    tasks.push('Step 2: Learn NPM');
    tasks.push('Step 3: Learn Express');
    return tasks;
}

app.get('/', function (req, res) {
    if (!req.session.tasks) {
        // Tasks not found in session, so initialize it with an array of tasks:
        req.session.tasks = initializeTasks();
    }

    // Return a JSON object with an array of tasks:
    res.json({tasks: req.session.tasks});
});

app.post('/task', function (req, res) {
    if (!req.session.tasks) {
        // Tasks not found in session, so initialize it with an array of tasks:
        req.session.tasks = initializeTasks();
    }

    // Assign the POSTed task to the newTask variable:
    var newTask = req.body.task;

    // Save the new task to the session array of tasks:
    req.session.tasks.push(newTask);

    // Return a JSON object with an array of tasks:
    res.json({tasks: req.session.tasks});
});

app.listen(3000, function () {
    console.log("API server started on port 3000.");
});
```

This time around, after `node index.js`, you'll need to access your API server on port 3000.

While you can view the list of tasks via your browser ([http://localhost:3000](http://localhost:3000)) fairly easily, it's best to use an application like [Postman](https://www.getpostman.com/) to fully test the **GET** and **POST** functions of your app.


## Task ∞ - Going Forward
In closing, I would just like to say that this workshop definitely does not cover everything that Node.js has to offer. To find out more Node.js, check out the links below:

- [NodeSchool](http://nodeschool.io)
- [Node.js on Code School](https://www.codeschool.com/courses/real-time-web-with-node-js)
- [Node.js on TutorialsPoint](http://www.tutorialspoint.com/nodejs/)
- [Official Node.js Documentation](https://nodejs.org/en/docs/)