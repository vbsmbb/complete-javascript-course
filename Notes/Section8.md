# How JavaScript Works Behind the Scenes

## A High-Level Overview of JavaScript

### What is JavaScript
1. JavaScript is a high-level, object-oriented, multi-paradigm programming language
2. High-Level means that the programmer need not worry about the resources of the computer used by the program
	* JavaScript manages resources for the programmer
	* JavaScript, Python, and Ruby are high-level languages
	* These progam languages are easy to learn, but will never be as fast as low-level languages like C
3. JavaScript's garbage collector is the reason that the JavaScript programmers do not have to worry about system resources
	* The garbage collector is a process in the JavaScript engine which removes old unused objects from the computer's memory
	* This is done to remove this necessity from the programmer
4. JavaScript can be Interpreted or Just-In_Time compiled
	* The JavaScript lines of code must be converted to machine so that the CPU can execute the program
	* This occurs in the JavaScript engine
	* The JavaScript engine will either interpret or compile the code written by the programmer before it is fed to the CPU
5. JavaScript is a multi-paradigm programming language
	* A Paradigm is an approach and mindset of structuring code which will direct your coding style and technique like:
		+ Procedural programming: organizing code in a linear way using lines of code and functions
		+ Object-Oriented programming
		+ Functional Programming
	* JavaScriptcan be written in all three styles
6. JavaScript can be written in an object-oriented way
	* JavaScript is a proto-type based object oriented language
	* Almost everything in JavaScript is an object except for primitive values:
		+ Numbers
		+ Strings
		+ Booelans, etc.
	* We create an array from a prototype and then the newly created array inherits all of the methods of the prototype
7. JavaScript is a language with first-class functions
	* The functions are treated as variables
	* They can be passed to other functions and returned from functions, too
	* The fact that JavaScript has first-class functions allows JavaScript to be used as a Functional Programming language
8. JavaScript is a dynamic language
	* This means that JavaScript is a dynamically typed language
	* You do not have to declare the types of variables when they are created
	* The type of the variable will be determined by the value stored in the variable
	* The types of variables can be changed when they are reassigned
	* If you want to use JavaScript with strongly typed variable, then use TypeScript
9. JavaScript is a single-threadded language with a non-blocking event loop
	* Therefore, it can only do one thing at a time so how does JavaScript handle multiple things occurring simultaneously
	* A single-thread could block anything else from happening, but JavaScript has a non-blocking event behavior
	* The non-blocking behavior is achieved by using a non-blocking event loop
	* The event loop puts long-running threads in the background and brings them back into the foreground when the process is complete
	
## The JavaScript Engine and Runtime

### What is a JavaScript Engine (JSE)?
1. It is a program that executes JavaScript code
2. Google's V8 engine is the most well-known JavaScript engine
	* It powers Google Chrome and Node.js
	* Other browsers also use other JavaScript Engines
3. All JavaScript engines contain:
	* A CALL stack
	* a HEAP
4. The JavaScript code is executed in the CALL stack
5. The HEAP is a memory pool that stores all of the objects that the application needs

### What is the Difference Between Compilation and Interpretation?
1. In compilation, the entire source code is converted into machine code at one time
2. In interpretation, an interpreter runs the JavaScript code one line at a time
3. In interpreted languages, the code is read and executed at the same time
4. Interpreted languages are much slower than compiled langiages
5. However, most modern JavaScript engines use Just-in-Time compilation
	* The entire code is converted into machine language at once and then executed immediately
	* This is much faster than executing code line-by-line, but is still slower than compiled languages
	
### How does the JavaScript Engine(JSE) Work?
1. As the code is read into the JSE, it is parsed and put into an Abstract Syntax Tree (AST)
	* Syntax Errors are noted during the Parsing and AST creation
	* The AST has nothing to do with the DOM tree
	* These are separate elements in different programs
2. Once the entire code is parsed, it is compiled into machine code
3. Once compiled, the code is executed immediately
	* The compiled code is NOT put into an intermediate file
	* The compiled code is sent to the CPU for execution
	* The execution occurs in the JavaScript Engine's call stack
	* The first-pass compilation is not optimized
	* During the execution the compiled code is continuosly optimized while the code is executing to gain efficiency without execution ever stopping

### What is a JavaScript Runtime?
1. The most common JavaScript runtime environment is the browser
	* A JavaScript engine is the heart of any JavaScript runtime environment
	* The Web APIs in the runtime engine make the output of the JSE useful
	* The WebAPIs are provided to work with the JSE, but is not part of the JSE
2. A runtime environment also contains a callback queue
	* This contains all of the callback functions that have been executed and are ready for the JSE or the Web API
	* The event loop takes the callback functions from the callback queue and moves them into the CALL stack to be executed
	* This event loop is what makes the JavaScript concurrency model work
3. The Node.js runtime does not have the WebAPIs
	* It uses C++ bindings and a thread pool to do the same type functions as the Web APIs
	* It is a different environment, but it still has the JSE and the CALLBACK queue
	
## Execution Contexts and the Call Stack
1. In the call stack, the first execution is to create a global execution context (GEC) for all code not in a function (top-level code)
	* A GEC is an environment where the JavaScript where the top-level code is executed
	* Stores all of the information for some code to be executed
	* JavaScript code always runs in an execution context
	* In any JavaScript program, there is only ONE GEC
2. The top-level code is executed in the GEC
	* The CPU executes the compiled top-level JS code
	* Completion of the top-level code allows the functions to begin executions
3. Functions are now executed
	* For each function to be executed, a new execution context will be created to execute the code for that function
	* The result of the function execution is returned to the calling statement
	* Each function execution is exected in the Call stack

### The Execution Context in Detail
1. What's inside an execution context
	* A Variable environment
		+ Declaredvariables
		+ Functions
		+ An arguments object
	* Scope chain: contains references to variables outside the current context of the function
	* The scope chain is stored inside each execution context
	* Each context gets a special variable named 'this'
		+ The 'this' variable refers to the current  context
2. All three of the items above are created during the creation phase of the GEC before execution starts
	* The function execution contexts are created when the function is called
	* Each fucntion execution context except for the arrow functions get the three items noted above
3. Execution contexts belonging to arrow functions do not get their own arguments object nor their own 'this' variable
	* The arrow function can use the arguments object and the this keyword of their closest regular function parent
	* You MUST remember this important detail about arrow functions!
	
### The Call Stack
1. The Call Stack is a place where execution contexts get stacked on top of each other to keep track of where we are in the program's execution
	* The execution context on top of the stack is the one currently running
	* When this execution finishes, it will be removed from the Call stack and return to the execution context that was running before this one
2. The Call stack ensures that the order of execution never gets lost
3. JS code runs in execution contexts inside the Call stack

## Scope and the Scope Chain

### Scoping and Scope in JavaScript
1. Scoping controls how variables are organized and accessed: JS code uses lexical scoping
2. Lexical soping is controlled by the placement of functions and objects in the code
	* A function written inside a second function will have access to the parents variables 
3. A scope is a space or environment in which a certain variable is declared
	* There is a global scope
	* There are function scopes
	* There are block scopes
4. The scope of a variable is the region of code where a certain variable can be accessed

### The Three Types of Scope
1. The global scope
	* The space where top-level variables and functions are stored
	* These are variables that are created outside any function or block
	* Variables declared in global scope are accessible everywhere in the program including:
		+ In all functions
		+ In all blocks
2. The function scope
	* Each and every function creates a scope
	* Variables declared inside the function scope are only accessible in the function context
	* This accessibility is called local scope
3. The blockscope
	* The block scope was created in ES6+
	* A block is any code created inside curly brackets
	* Any variables created in a block are only accessible inside that block (block scope)
	* The block scope only applies to variables created with 'let' and 'const'
	* Variables created with 'var' are accessible outside the block
	* This is true because 'let' and 'const' were also created in ES6+
	* 'var' isonly function scoped not block scoped
	* In ES6+, functions are also block scoped when using 'strict' mode
	* This means that functions declared inside a block are only acccessible in that block
	
### The Scope Chain
1. Each function context has access to variables in it's parent's context
2. The term 'variable lookup' means that variables are checked for in the current context and if not found there will be looked for in the next scope above it's context until it is found
	* If not found by the time it hits the c=global context an error wil occur
	* Execution can be stopped on any error
	* Execution can also go on and a logical error in the code will occur
	* The variable lookup is a one-way look up
	* A scope will never look toward an inner scope for variables
	* In other words, a parent scope can be checked for variables, but a child scope will never be checked for variables
	* Variables created in a child scope are not available to the parent
	* Sibling scopes also do not have access to each other's created variables

### Scope Chain vs. Call Stack
1. The order of function calls is not relevant to the scope chain
2. Scope chains are built depending on where the variables and functions are created in the code

## Variable Environment: Hoisting and the TDZ

### Hoisting in JavaScript
1. Hoisting makes some types of variables usable in the code before they are actually declared
2. Before execution, the code is scanned for variable declarations
	* For each variable a new property is created in the variable environment object
	* Hoisting does not work the same for all variable types
3. For functions
	* They are hoisted
	* The initial value is the actual function
	* They are in block scope
4. For variables declared with 'var'
	* They are Hoisted
	* The initial value is undefined
	* They are in function scope
5. For variables declared with 'let' or 'const'
	* They are NOT Hosited
	* The initial value is uninitialized (TDZ: Temporal Dead Zone)
		+ They MUST be declared before being used
		+ Before declaration they are in the TDZ
	* They are block scoped
6. For function expressions and arrow functions
	* They act the same as the variable declarations used to create them (i.e. var, let, or const)
	* You cannot use function expressions before they are declared, but you can use functions before they are declared

### The Temporal Dead Zone (TDZ)
1. Each 'let' or 'const' variable gets it's own TDZ
2. The TDZ exists for each varibale from the beginning of the scope it is in until it is defined
3. Therefore, you cannot use a 'let' or 'const' variable until after it has been defined
4. Once it has been defined it is removed from the TDZ
5. The TDZ was defined in ES6+ because this functionality makes it much easier to detect and catch errors
6. Accessing variables before they are defined is bad practice and should be avoided
7. The TDZ makes 'const' variables work the way they are supposed to work
	* 'const' variables cannot be redefined
	* Therefore, they must be given a value in their definition
	* The TDZ makes you define the 'const' variable in the declaration statement
	
### Best Practices
1. Do not use 'var' to create variables
2. Use 'const' for variable creation unless a variable must be redefined then use 'let'
3. Declare variables at the top of each scope
4. Declare all functions before they are used

## The 'this' Keyword
1. 'this' is a special variable created for any execution context
	* Every function has a 'this' keyword except arrow functions
	* It points to the 'owner' of teh function in which the 'this' keyword is used
	* It is one of three components of any execution context
		+ Variable environment
		+ Scope chain
		+ 'this' keyword
2. The value of the 'this' keyword is NOT static
	* It depends on how the function is called
	* It is only assigned when the function is called
3. Four ways to call a function:
	* As a method (a function attached to an object)
		+ The 'this' keyword points to the object to which the method is attached
		+ It points to the object calling the method
	* Simple function call
		+ The function is not attached to any object
		+ 'this' is undefined (only in STRICT mode)
		+ If not in strict mode, the 'this' keyword points to the window object in the browser
	* Arrow functions
		+ Do not get their own 'this' keyword
		+ Get the 'this' keyword of the parent function 
		+ This is called the lexical this keyword
		+ This functionality is the source of many errors
	* Event Listener
		+ 'this' points to the DOM element the listener is attached to
4. The 'this' keyword does not point to the function itself nor the variable environment of the function
 
## Regular Functions vs. Arrow Functions
1. Never use an Arrow function as a method
	* They do not have their own 'this' keyword
	* This functionality leads to hard-to-find issues
2. Always use function expressions as object methods
3. Functions also get access to an arguments keyword
	* The 'arguments' keyword is only available in regular functions
	* It is NOT available in Arrow functions

## Primitives vs. Objects
1. An object is a reference type
2. Primitives are stored directly into memory

### Primitives, Objects, and JSEngine
1. Primitives data types: (primitive types)
	* Number
	* String
	* Boolean
	* Undefined
	* Null
	* Symbol
	* Bigint
2. Everything else is an object: (reference types)
	* Object literal
	* Arrays
	* Functions
	* Etc.
3. The JavaScript Engine has two components:
	* CALL STACK: where contexts are executed
	* HEAP: where objects are stored in memory
4. All reference types are stored in the HEAP
5. Primitive types are stored in the execution context in which they are declared
6. Primitives are stored in the Variable Environment in the context in which they were created
	* The variable environment is an object containing the unique variable name and the address of the memory containing the variable value
	* The memory location is immuatble; so the value cannot change within the context
	* Therefore, when a variable is declared with 'let' and the variables value is changed, the variable contains the value of a new memory address
	* The value in the previous address remains unchanged
7. Things work differently for reference values:
	* When an object is stored in memory, the value is stored in the address pointed to for the object in the heap
	* A new address is created in the CALL STACK where the object is created and points to the address in the HEAP where the reference type is stored
	* Therefore, if a second object is created by cloning the first object in the same context, both objects point to the same memory address in the call stack which points to the same address in the HEAP
	* So changing any of the object values for one of teh objects changes the same value for the other even if only the clone is updated
8. Primitive values declared with CONST are immutable, but that is not true for reference types
9. The values for the reference type are changed in the HEAP not in the CALL STACK where the object is referenced

### Three New Topics (for JS Behind the Scenes)
1. Prototypal inheritance: in OOP section
2. Event loop: in ASYNC JS section
3. How the DOM Really Works: in Advanced DOM and Events section

## Primitive Types vs. Objects in Practice
1. If a second object has been created as a clone of an existing object in the same context and the second object was created with the CONST keyword, then the cloned objected cannot be pointed to a new empty object
2. Using Object.Assign allows values of one object to be created in a new object
	* This only works for primitive values in the object
	* If one of the values of the original object is an object, the reference to the value object will remain the same for the original and newly created object
	* A good example of this is an array that is one of the values of an object
	* Remember, the array is just a special object in JS
	* Changes to the array by the copied object will appear in the original object
3. Object.assign() only craetes a shallow copy, not a deep clone
4. Deep cloning is a very complicated process
	* Deep cloning is usually performed by an external tool
	* LoDash is a JS library that executes deep cloning and other complicated tasksw
5. 