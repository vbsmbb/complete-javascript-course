# JavaScript Fundamentals - Part 1

## What is JavaScript?
1. JavaScript is a high-level, object-oriented,  multi-paradigm programming language
2. A programming language instructs a computer to do something
3. A high-level language uses english-like words to form actions and allows us to not have to worry about detailed computer concepts like memory management
4. An object-oriented language is a language that is based on objects for storing most kinds of data
5. A multi-paradigm language allows us to use different types of programming styles
	* Imperative
	* Declarative
	* Object-oriented

### What is the Role of JavaScript in Web Development?
1. JavaScript is the programming language of the World Wide Web (WWW)
	* HTML structures the data on the web page
	* CSS presents the data to the user
	* JavaScript is the programming language that makes the web page dynamic
2. JavaScript is also able to
	* Manipulate the content or the CSS of the web page
	* Load data from remote servers
	* Can build entire application in the browser called Web Applications
3. JavaScript allows us to add dynamic affects to web pages and to create web applications
4. JavaScript made the modern web that we know today possible
5. The modern frameworks like React, Angular, and Vue are all written in JavaScript
6. JavaScript can also run outside of web browsers
	* JavaScript runs in NodeJS which requires NO browser
	* NodeJS is used to interface with users and databases and runs in the back-end of the web server
	* When JavaScript runs in a browser it is used as a front-end application
7. This course describes how to use JavaScript in the web browser and to create front-end applications
8. JavaScript can be used to create native mobile applications using frameworks like React and Ionic
9. JavaScript can also be used to create native desktop applications using the Electron framework
10. This course teaches modern JavaScript (ES/6 and later)

## Linking a JavaScript File
1. Write JavaScript code in a file outside of the HTML file
2. Create the script tag at the end of teh <body> and just add the source parameter with the location of the JavaScript file

## Values and Variables
1. Camel case is the standard for creating JavaScript variable names
2. Variables can only contain:
	* Numbers
    * Letters
    * Underscores
    * Dollar signs
3. Do not start variable names with a capital letter
	* This style is used for objects
	* Using this style for regular variables will create confuswion for other code users
4. Create constants with all UpperCase letters
5. Make variable names descriptive
6. Variables are storage containers for values

## Data Types

### Objects and Primitives
1. Every value is either an object or a primitive
2. A value is ONLY a primitive when it is not an object

### Seven Primitive Data Types
1. Number
	* Floating point numbers
	* Used for both decimals and integers
	* Integers are decimals without the decimal point
2. String
	* Sequence of charaters
	* Used for text
	* Always put strings in quotes (single or double)
3. Boolean
	* A logical data type with just two possible values
		+ True
		+ False
	* Used for making decisions
4. Undefined
	* The value applied to a variable that has not been defined
	* The variable has an empty value and is UNDEFINED
	* A variable was defined, but no value assigned to 	it
	* Undefined is a property of the global object
	* 
5. Null
	* Also means the variable has an empty value
	* Null expresses a lack of identification
	* The Null variable points to no object
	* The variable exists but has no type or value
	* NULL is NOT a property of the global object
6. Symbol
	* A value that is unique and cannot be changed
	* Introduced in ES2015 (ES/6)
7. BigInt
	* Introdced in ES2020 (ES/11)
	* Integers that are larger than can be defined by the Number data type

### JavaScript is a Dynamically Typed Language
1. When a variable is created, it is not required to define it a data type
2. JavaScript determines the data type of the variable but checking the value(s) that is/are assigned to the variable
3. In JavaScript, the VALUES have a TYPE, not the VARIABLES
4. Variables can be used to store values of different types at different points in the program

## let, const, and var
1. let and const were defined in ES/6 (ES2015)
2. var was the original operator used to declare variables
3. Use LET to declare variables that can change later
	* Reassign a value to a variable
	* Mutate a variable
4. Use CONST for variables that should NEVER change
	* CONST variables are immutable
	* You cannot create an undefined CONST variable
5. Use CONST as your default variable declaration keyword
	* This avoids variable mutation
	* Only use let when your are absolutely sure that the value of the variable will change before the end of teh program
	* Mutating variables introduces more possibilities for code error
6. Avoid using the VAR variable declaration keyword
	* Works much the same as LET
	* LET is block scoped while VAR is function scoped
	* NEVER us VAR!
7. A variable created without using the LET, CONST, or VAR declaration keyword will not be part of the script scope, but will be placed in the global scope
	* ALWAYS PROPERLY declare variables!
	* Use CONST only until a script variable has to change from one value to another
	
## Basic Operators
1. An operator allows you to transform values or combine multiple values
2. Types of operators
	* Mathematical
	* Comparison
	* Logical
	* Assignment
	
## Operator Precedence
1. Use the Table of Operator Precedence in the MDN JavaScript documentation

## Strings and Template Literals
1. Template literals are used to build strings
2. Template literals have been available since ES6
3. Template literals assemble the string using the parts that you give it
4. The backticks, used in template literals, can be used in ALL strings
5. Template literals can be used to create multi-line strings
6. This will be useful when creating HTML to insert dynamically on web pages

## Taking Decisions: If / Else Statements
1. Official name is: If / Else control structure
2. It is a control structure because it controls which statements get executed

## Type Conversion and Coercion
1. Type conversion occurs when a developer manually converts one type to another
2. Type coercion occurs when JavaScript converts types without developer intervention
3. Convert number strings to numbers using the Number() function
4. Convert numbers to strings by using the String() function
5. A number can also be converted to a Boolean
6. A conversion to NaN or undefined is not allowed
7. Type Coercion occurs whenever an Operator is working with different types
8. Whenever there is an operation between a string and a number, the number will be converted to a string
9. The minus operator automatically converts strings to numbers
10. The multiplication and division operators convert strings to numbers

## Truthy and Falsy Values
1. Falsy values are values that are not false but will become false when they are converted to a boolean
2. There are only five falsy values
	* 0
	* ''
	* undefined
	* null
	* NaN
3. In practice, the conversion to a Boolean value is always implicit (coerced)
4. Values are converted to Boolean value during logical operations

## Equality Operators: == vs. ===
1. The === operator is called the strict equality operator
2. The === operator does NOT perform type conversion
3. The == operator is called the loose equality operator
4. The == operator allows type coercions to occur
5. For cleaner code, avoid using the loose equality operator
6. The difference operator: != or !==
	* The double equal sign is the strict version
	* The single equal sign is the loose version
7. Always use the strict version of the operators

## Boolean Logic
1. Boolean logic is a branch of computer science that uses the values TRUE and False to solve complex logical problems
2. Logic operators are used to solve the logical problems. The most basic are:
	* AND
	* OR
	* NOT
3. The result of the AND operator is TRUE when all inputs are TRUE
4. The result of the OR operator is TRUE when any of the inputs are TRUE
5. The result of the NOT operator is the inverted value of the inputs
6. The NOT operator has precedence over the AND and OR operators

### Logical Operators
1. Have a higher precedence than most other operators
2. Help make complex decisions
3. AND logical operator: &&
4. OR logical operator: ||

## The Switch Statement
1. A different way to write a complicated If / Else statement
2. Does not require brackets to encase the statements
3. Can have any number of statements in each CASE
4. Looks cleaner than an If / Else statement with the same number of conditions

## Statements and Expressions
1. An expression is a snippet of code which expresses a value
2. A simple value is also an expression
	* 1991 (Number)
	* "This is it!" (String)
	* 3 + 4
3. A piece of Boolean logic code is also an expression
	* true && false
	* true && !false
4. A statement is a snippet of code which performs an action
	* An expression can be used in place of a statement
	* A statement cannot be used in place of an expression
5. A statement is like a complete sentence while  expressions are like words that make up sentences
6. Template literals require expressions; not statements
7. A variable is an expression
8. A snippet of code which creates the variable is a statement

## The Conditional (Ternary) Operator
1. The conditional operator allows you to write a simple If / Else statement in one line
2. The truthy expression must be a single expression
3. There is also a mandatory else expression (:)
4. Synatx of the ternary operator: expression ? truthy expression : falsy expression
5. The conditional operator is often used to declare variables
6. The conditional operator is an expression and it can be used in a template literal where a statement cannot
7. The ternary operator does not replace If / Else statements
8. Use the ternary operator in places where if statements cannot be used and only simple values are required

## ES5, ES6+, and ESNext

### Brief History of JavaScript
1. Brendan Eich creates the very first version of JavaScript for Netscape (In only 10 days. It was named Mocha)
2. In 1996 Mocha was renamed to LiveScript and then to JavaScript to attract Java developers (JavaScript has almost no resemblance to Java)
3. Also in 1996, Microsoft launched the IE browser and copied JavaScript from Netscape but called it JScript
4. In 1997 JavaScript was submitted to ECMA to standardize the language. It was called ECMAScript 1 (ES1)
	* The name ECMAScript is used when talking about the standard 
	* The name JavaScript is used when talking about the language
5. In 2009, ES5 (ECMAScript 5) was released with lots of new features
6. In 2015, ES6/ES2015 (ECMAScript 2015) was released with more features than ever. 
	* Most people refer to this release as ES6.
	* In 2015, ECMA changed to a yearly release cycle
	* This was done to ship less features per update

### Backward Compatibility
1. All JavaScript releases are backwards compatible all the way back to ES1
2. You can take a script written in 1997 and put it into a browser in 2022 and it will still work the same as it did in 1997
3. The first rule of JavaScript language development is "Don't break the web!"
	* Old features are never removed
	* The yearly new versions are not really new versions; they are incremental updates
	* Websites just keep working
4. The ECMAScript versions are really Releases not Versions
5. Modern JavaScript versions are not forward compatible only backward compatible

### How to use the modern JavaScript today
1. In development, use ES6+ code
2. For production:
	* Use Babel to transpile and polyfill your code converting back to ES5
	* This ensures browser compatibility for all users
3. ES5 is fully supported in all browsers even IE9
4. ES6+ is fully supported in all modern browsers, but not suppported in older browsers
5. For releases between ES6 and ES11 (ES2020), you can use most features in production using transpiling and polyfilling
6. For ESNext (ES12 and later), can use SOME features using transpile and polyfill
