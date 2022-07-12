# JavaScript Fundamentals - Part 2

## Activating Strict Mode
1. Strict Mode can be enabled in JavaScript to assure that we write secure code
2. To activate Strict Mode in your script, write 'use strict' as the first statement in your JavaScript file
	* It must be the first statement in the script
	* No other code can come before it
3. Strict mode helps you to keep bugs out of your code
	* First: strict mode forbids you to do certain things
	* Second: It creates error messages when JavaScript would otherwise fail silently and not alert you to an issue
4.

## Functions
1. The fundamental building block of JavaScrit applications is functions
2. A function is a unit of code that can be used over and over again
3. A function is similar to a variable
	* A variable stores a value
	* A function stores one or more lines of code to be executed at will
4. Functions allow you to reexecute lines of code without repeating the same code in multiple locations
5. A function can also receive data (as parameters) and return data after processing is complete
6. Functions can be thought of like BlackBoxes
	* You send data to it
	* It may or may not return results
7. To accept data, a function uses parameters which are specific only to the function and they are defined when the function is called
8. If a function is not called, the code within the function will not be executed
9. Functions may or may not return data
10. Functions may or may not have parameters
11. Functions allow us to write reusable code
12. Functions helps us to apply the DRY principle of programming: Don't Repeat Yourself

## Function Declarations vs Expressions
1. A named function is called a function declaration
2. An anonymous function is called a function expression
3. A function expression is saved in a variable
4. To use the function expressions, pass a parameter, if required, to the variable containing the function expression just like calling a named function.
5. A function is a value not a type. Therefore, the function can be saved to the variable.
6. A function declaration can be called before it is defined
7. A function expression must be defined before it can be called

## Arrow Functions
1. An Arrow function is a shorthand version of a Function Expression
2. The value calculated in an Arrow Function will be returned explicitly
	* This is true for a simple one statement function
	* The statement braces are not required for a single statement function
	* The return statement is not required because of the implicit return in a single statement function
3. If the function body has more than one statement:
	* The braces are required
	* The return statement is required
	* If there is more than one parameter, then parentheses are required around both parameters
4. Arrow Functions do NOT get the "this" keyword!
5. Therefore, there are many cases where Arrow Functions are not applicable

## Functions Calling Other Functions
1. A function can be called within another function
2. You may use the returned value as you do anywhere else

## Reviewing Functions
1. When a function uses the RETURN keyword to return a value, it exits immediately after the RETURN statement executes
2. Function declarations can be used before they are declared in teh code
3. A function expression is a fucntion value stored in a variable
4. Arrow functions are great for quick, one-line functions
	* They do not require parentheses if function has a single parameter
	* They do not require braces because they only have a single statement
	* But they do NOT have the "this" keyword
	
## Introduction to Arrays
1. Arrays are data structures that allow you to group values
2. Create a new array literally using the bracket syntax
3. Create a new array using the Array function
4. Arrays are zero-based data structures
	* The first element is at location zero
	* The location of every other element in the array is incremented by one
5. The property, length, of an array conatins the number of items in the array
6. Collect a particular element from the array using the bracket expression (i.e. friends[0])
7. The item inside the bracket can be ANY JavaScript expression (i.e. friends[friends.length-1])
8. Existing array values can be mutated (changed)
9. In JavaScript, only primitive values are IMMUTABLE
10. Arrays are not primitive values, they are objects, and therefore arrays are not immutable
11. The entire array cannot be replaced with a new array if it is constructed as a constant (CONST). 
12. If constructed with a LET statement, it can be completely replaced.
13. An array can store values with different types
14. Variables can be used as items in an array
15. Array can be contained as an item in another array
16. Funcion calls can be used as array items because they return a value

## Basic Array Operations
1. The PUSH method adds elements to the end of an array and it returns the new length of the array
2. The UNSHIFT method adds a new item to the beginning of an array and it returns the new array length
3. The POP method removes the last element of the array and returns the removed element
4. The SHIFT method removes the first element of the array and returns the removed element
5. The INDEXOF method returns the index of the element in the array
	* If the requested element is in the array
	* If it is not in the array, -1 is returned
6. The method INCULDES returns a Boolean value
	* TRUE if the element exists
	* FALSE if the element does not exist
	* This is an ES6+ method
	* It uses STRICT EQUALITY to check for the element
	* It does NOT use type coercion
	* This method can be used in any place where a Boolen value is expected (i.e. If / Else statement)


## Introduction to Objects
1. Arrays allow you to gather items by position (index) only
2. Objects allow you to gather items by name
3. An object contains key/value pairs
4. An objects value can contain any JavaScript expression
5. The keys of the object are know as the properties of the object
6. Arrays are order sensitive, but objects are not
7. Use arrays for ordered data and objects for unstructured data
8. A value of an object can be any JavaScript expression

## Dot vs. Bracket Notation
1. You can use the DOT operator to collect the value of any key in the object, but you have to know the key name
2. Using the bracket operator, the key name must be a string, but you can use any expression that evaluates to a key name

## Object Methods
1. Any function attached to an object is a method of that object
2. The function must be a FUnction Expression not a Function Declaration
3. It is much the same as creating a Function Expression with a variable outsid of an object
4. The key to the Function Expressions is a property of the object
5. It is a property which contains a Function Expression instead of a string, number, or boolean value
6. Inside the function method of the object, the function can use any of the properties of the object.
7. You can use another property of the object inside the function method, just prefix the property name with 'this' and use the DOT object to connect the property name (i.e. this.propertyName)
8. The 'this' keyword represents the object itself
9. An object method is allowed to create new properties on the object
10. The new property is created using the 'this' keyword
11. Therefore, a calculation can be done once and then just used later in the program
12. Arrays are a special type of object and their methods are part of their object structure

## Iteration: The for Loop
1. In coding loops allow us to execute repitive tasks efficiently
2. The for loop executes while the condition is true
3. The for loop contains three sections:
	* Initialization of the counter variable
	* A condition to set the number of iterations of the loop
	* A section to increment the loop counter
4. The code inside the brackets will be executed as long as the for condition is true
5. When the for condition is false, the loop will no longer execute the code within the brackets

## Looping Arrays, Breaking and Continuing
1. For loops are used to loop through arrays
2. Any number of statements may be executed during any current loop cycle
3. Executing the CONTINUE statement in a loop will cause the current loop cycle to stop and the next cycle to start
4. Executing the BREAK statement will stop the loop activity and continue with the statement after the loop

## Looping Backwards and Loops in Loops
1. To loop backwards just start with the last element in the array and decrement until you reach the first element in the array
2. Loops can be nested one inside the other

## The While Loop
1. The while loop contains only the looping condition
2. The looping variable will need to be initialized before/outside the loop
3. The looping variable should be incremented/decremented as the last statement in the loop
4. The while loop is actually more versatile than the for loop
5. The while loop does not depend on a counter variable
6. 