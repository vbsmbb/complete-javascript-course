# Section 10: A Closer Look at Functions

## Default Parameters
1. The ES5 method of setting the default was to use the default parameter method using the OR (||) logic
2. The ES6 method uses an equal sign after the parameter name with the value on the right side of the assignment operator
	* x = 1
	* The right side of the assignment operator could also be an expression instead of a primitive value and the expression could use another parameter
		+ x = 1 * a
		+ The parameter that is part of the expression must be defined before the parameter with the expression
3. When calling a function, you cannot skip parameters
	* Each argument passed to the function is set by the position of the argument
		+ Param 1 = Arg 1
		+ Param 2 = Arg 2
		+ Param N = Arg N
	* However, if you wanted to use a default value of 1 for a parameter but set a value for the parameter after that one, there is a trick: Set the value to be skipped to the value 'undefined'
	* Example: f(1, undefined, 10)
		+ Function f takes three parameters
		+ Parameters 2 and 3 have default values
		+ You wish to use the default value for parameter 2, but set the value for parameter 3
		+ Therefore, set argument 2 to 'undefined' as shown above
	* Example: f(1, 10)
		+ Parameter 1 is set to 1
		+ Parameter 2 is set to 10
		+ Parameter 3 is set to its default value

## How Passing Arguments Works: Value vs. Reference
1. Primitives are passed by value
2. Objects (reference types) are passed by value, too
3. Any changes made to an object in a function will be permanent
	* The value that is passed to the function is the reference vale which points to the object in the heap
	* Even though the value passed was a reference to the object in teh heap, any changes made to the object will be made to the object in the heap
4. If an object is passed to multiple functions and each one makes changes, this can cause issues in an application
5. JavaScript ONLY passes by VALUE, it does not pass by reference

## First-class and Higher Order Functions

### First-Class vs. Higher-Order Functions
1. JavaScript has First-Class functions
	* Functions are simply values
	* They are just another type of object
2. Since functions are values
	* They can be stored in variables
	* They can be used as values in objects
	* We can store a function any way that a primitive can be stored
	* Functions can be passed as agruments to other functions
	* A function can also be returned from another function
3. Higher-Order Functions are:
	* Functions that receive other functions as arguments
	* Functions that return other functions
	* This is possible because JavaScript has First-Class functions
4. A callback function is a function that is called later by the receiving function
	* An example of this is the addEventListener() function
	* This function takes two parameters
		+ The first parameter is the event to be watched for
		+ The second parameter is the function that will be called and executed when the event is activated
	* The addEventListener() function is the Higher-Order function because it accepts a function as a value for one of its parameters
	* The function that is passed as an argument to the event listener function is called when the event occurs
	* Therefore, the passed function is a callback function
5. A higher-Order function can also return a function as a value to the caller

## Functions accepting Callback Functions
1. Callback functions allow us to create ABSTRACTION
	* Where the detail of the code implementation is hidden
	* The result is the most important function, not the detail (How-To)
	* This allows us to think about the code at a higer, more abstract, level
2. The higher-Order function does not care what process is performed, it just executes the code in the function argument

## Functions Returning Functions
1. This is used widely in functional programming
2. Functions returning functions can be done with Arrow functions as well as function expressions

## The Call and Apply Methods
1. The call() method allows you to manually set the object that the 'this' keyword points to
	* This allows you to copy a method from an object and to an external variable use on other similar objects
	* Example: const book = lufthansa.book
		+ The variable book is in the global context
		+ If used without the call() method, the 'this' keyword is undefined
		+ Using the call() method allows you to tell the book function which object to use
	* The other objects must have the same property names as the object where the original method lives
2. The apply() method allows you to point the 'this' keyword to a new similar object, but take the method  parameters from an array
	* This is not used very much any longer
	* It is just as easy to use the spread operator on the array containing the data, still using the call method, and the data will be unpacked for the method parameters
3. In modern JavaScript, just use the call() method and use the spread operator to unpack the data array

## The bind() Method
1. The bind method will point the 'this' keyword to the object passed to bind() as a parameter
	* It does not call the method 
	* It returns a new function with the correct 'this' keyword bindings
2. Once the object is bound to the variable
	* It is a permanent binding and cannot be changed
	* You can also bind parameters, but they cannot be changed in the variable that has the binding
3. Binding one or more parameters for the bound method creates a method with fewer parameters
	* Once a parameter is bound it cannot be changed
	* This is common JavaScript pattern called partial application
4. Bind can be very useful when objects are used with event listeners
	* When a button is bound to an event listener, the 'this' keyword is bound to the button
	* A method passed to the event listener will replace the button object for the 'this' keyword in the method and most likely the method passed will fail
	* To overcome this obstacle, bind the passed method to the object that the method 'this' keyword should use
5. The bind method is very useful when using JavaScripts partial application pattern
	* Methods can use the partial application pattern with bind even if the method does not use the 'this' keyword
	* This allows you to preset parameters to make a method easier to use
	* When using bind on a method that does not use the 'this' keyword, pass the NULL value as the first argument to the bind() method, then follow that with one or more parameters to bind to the new function
	* The parameter or parameters that you bind MUST be the first one(s) passed to the method
	* Using the bind() method returns a new more specific function to be used

## Immediately Invoked Function Expression (IIFE)
1. In JavaScript, you sometimes need a function to execute once, but never again
	* This function will disappear right after the first time it is called
	* These type functions (IIFE) are used frequently in modules using Async/Await
	* The functions are called Immediately Invoked Function Expressions (IIFE)
2. The Immediately Invoked Function Expression is an unnamed function expression which is surrounded by parentheses
	* To immediately execute the function expression you finsh the expression with another pair of parentheses
	* This will immediately invoke the function when executed
3. The global context does not have access to any variables created inside the function expression
	* However, the IIEF has access to any variable in the Global Context
	* All data defined inside any Scope is private
	* Any variables created inside the IIFE scope is encapsulated inside the IIFE
	* Data encapsulation is an extremely important concept in OO programming
4. The IIEF is a JavaScript pattern and not a JavaScript feature
5. In modern JavaScript, which uses the Let abd Const statements to create variables you already have the feature of data privacy
	* Today any block of statments creates its own scope as long as the 'var' keyword is not used to create the variable
	* A block of statements with variables created with the 'let' and 'const' keywords encapsulates the created variables within the statement block
	* A variable created with the 'var' keyword, even in modern java does not encapsulate the new variables created within the block scope
	* Therefore, if data encapsulation is important, then you should not use the 'var' keyword to create variables using modern JavaScript features
	* For these reasons, the IIFE is not used as much as it was before ES6
6. The IIFE should still be used in modern JavaScript if you want to execute a function one time only

## Closures
1. Closures are a near mystical feature of JavaScript
	* They are often misunderstood by developers
	* Closures bring the concepts of execution context, call stack, and scope chain together in one concept in almost a magical way
2. Closures are not a feature that we create manually
	* A closure happens automatically, in certain situations
	* A closure is a function that remembers all of the variables that were created in its execution context

### How to Create a Closure
1. Create a function in the global context that returns a function
2. When the global function is called, it creates its own execution context
3. Now a variable in the global context contains a fuinction that was created in the global functions execution context
4. After the global function was called, it's execution context was removed from the call stack
5. The function expression that now exists in the global context can still access the variables that were created in the global function's execution context that no longer exists
6. Remember that the global function can access variables in its parent's context (GLOBAL), but the global context cannot access variables in the functions context
7. Once the function has executed, its context is removed from the call stack
8. However, the function expression that is now in the global context can still access the variables that were in the functions context when it was on the call stack
6. We have just created a CLOSURE!

### Understanding Closures
1. When the function expression that was returned by the first executed function is executed in the global context
	* A new execution context is created for the function expression on the call stack
	* When first created the variable object in this new execution context is empty because there are no variables declared in this function
	* The context of the function expression that is executing is a child of the global context from which it was executed
	* The variables that are found in this executing function are neither in its execution context or the execution context of its parent
	* A JavaScript feature is that every function has access to the variables in the context in which it was craeted
	* Therefore, the function expression that is now operating still has access to the variables that were created in its creation context
2. This is the essence of the closure
	* It was not manually created
	* It is a function of the way that JavaScript executes on the CALL STACK with its execution contexts and the scope chins that are created during function creations and executions
3. A function ALWAYS has access to the variable object in the execution environment in which it was created
	* The CLOSURE is actually the variable environment that was attached to the function expression when it was created
	* This variable environment is exactly as it was when the function expression was created
4. The scope chain is actually preserved through the CLOSURE mechanism
5. The variable environment created by the CLOSURE also contains variable parameters of teh parent function and the arguments passed to the parent function when the function expression was created
6. When the new function expression tries to access a variable in its own execution context, the execution context first checks the CLOSURE to see if the variable exists there, if it is, that variable is used
	* The CLOSURE has priority over the scope chain
	* Any changes to a given variable in the CLOSURE by the function expression will be saved in the CLOSURE
	* When the function expression's execution has completed, its execution context is removed from the CALL STACK
7. If the function expression is executed again
	* The same process occurs
	* Any variable not in the current context will be checked for in the CLOSURE before the scope chain
	* If the variable is found in the CLOSURE it will be used as it was found in the closure

### Closure Summary
1. A CLOSURE is the variable environment attached to the function that was created in the execution context where the function was created, even after the execution context has been removed from the CALL STACK
2. A CLOSURE gives a function access to all of the variables of it's parent context even if that context is no longer on the CALL STACK
	* A function keeps a reference to its parent's variable environment even if that parent context no longer exists on the CALL STACK
	* This reference to the parent's variable environment HAS to be the reference to the parent's environment object in the HEAP
	* This reference preserves the scope chain through time
3. A CLOSURE makes sure that a function never loses access to the variables that were available at the function's birth context
4. CLOSUREs are NOT created manually, they are a function of JavaScript's execution environment
5. A CLOSURE is an internal property of a function
	* It is not an external object that can be accessed
	* It is only available to a function
6. There are three scopes available to every function
	* The CLOSURE scope
	* The SCRIPT scope
	* the GLOBAL scope
7. These scopes are internal properties of the function that cannot be accessed by any other method or script

