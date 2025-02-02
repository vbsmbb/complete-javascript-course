# Data Structures, Modern Operators, and Strings

## Destructuring Arrays
1. Destructuring arrays is an ES6+ feature
	* It describes how to unpack values from an array and copy them to individual variables
	* Destructuring allows us to beak a complex data structure down to a smaller data structure like a variable
2. A function can return an array which can be immediately destructured into individual variables
3. You can skip elements in the array by leaving a space in the destructuring statement
4. If an array contains a nested array, you can destructure the internal array in the destructuring statement, too. ([)i.e. let [a, b, [c, d]] = [2, 3, [4, 5]]: a=2, b=3, c=4, d=5)

## Destructuring Objects
1. Objects are destructured by using the curly braces just like arrays are destructured using the square braces
2. Objects with values containing objects can also be destructured by placing another object destructuring assignment within the main object destructuring assignment

## The Spread (...) Operator
1. The spread operator allows us to expand an array into its individual elements
2. Use the spread operator when you want to use the individual elements of the array separately
3. The spread operator is a type of array destructuring with these differences:
	* It unpacks ALL of the elements of the array
	* It does not create new variables
	* It returns the elements of the array separated by commas
4. We can only use it where we would write variables separated by commas:
	* Adding the elements of an existing array to a new array
	* Passing parameters to a function
5. The spread operator does not only work on arrays, it works on all iterables
	* An iterable can be an array, string, map or set
	* Iterables are NOT objects
	* Most of the built-in data structures in JavaScript are iterables except objects
6. Since a string is an iterable, we can use the spread operator to break it into its individual characters
7. The spread operator is an ES6+ operator
8. Since ES2018, the spread operator now works on objects even though an object is not an iterable
	* The spread operator creates a shallow copy
	* Values that are objects are only copied shallowly
	* Values that are changed in values with objects changes everywhere
	* The spread operator, when used on objects, actually creates a new object
	* Individual values in the old object are not changed when values are changed in the new object except when values are other objects
9. The spread operator is always on the right hand side of the assignment operator
10. The sread operator works with function arguments

## Rest Pattern and Parameters
1. The Rest Pattern looks like the spread operator (...)
2. However, the Rest Pattern is used to create an array from multiple elements
3. It does exactly the opposite function of the spread operator
4. It is used to build new arrays or to pass multiple values into a function
5. The REST Pattern is yet another destructuring scheme
6. The REST pattern is always on the left hand side of the assignment operator
7. The REST pattern collects the elements that have not been assigned in the destructuring assignment
8. The variable that collects the elements fron the REST pattern will not have any elements that have been skipped
9. Therefore, the REST pattern assignments must be the last elemnt in the destructuring operator
10. There can be ONLY one REST pattern in a desctructuring assignment
11. When used to collect values from an object, the REST pattern will collect the remaining elements into a new object
12. For functions, the REST operator will be used to collect the parameters that have not already been collected
13. The REST pattern works with function parameters

## Short circuiting (&& and ||)
1. Logical Operators
	* They can use any data type
	* They can return any data type
	* The use short-circuit evaluation
2. For the OR (||) operator
	* If the first value is a truthy value, the first value will be returned
	* It will not even look at the second value
	* The OR (||) operator can be chained any number of times
	* The first truthy value will be returned in a chain of OR statements
	* The OR (||) operator fails when falsy values like 0 or empty string are aceptable value
		+ Since 0 and '' are considered falsy values, the default value will be returned
		+ The nullish operator should be used when some falsy values are acceptable values (i.e. 0 or '')
	* Use the OR (||) operator to set default values for variables
3. For the AND (&&) operator:
	* ALL values must be true for the AND operator to be true
	* If the first value is a falsy value, the falsy value will be returned and the second operand will nto be evaluated
	* The last value will be returned from a chain of AND (&&) operators if all the other values are truthy
	* Use to execute code (the last value in the chain) if the other elements in the chain of values is truthy

## The Nullish Coalescing Operator
1. The nullish coalescing operator was introduced in ES2020
2. This operator works with the idea of NULLISH variables instead of FALSEY values
3. The NULLISH values are
	* null
	* undefined
4. Nullish values do NOT include
	* 0
	* empty string
5. Only NULLISH values will short circuit the execution of the next evaluation

## Logical Assignment Operators
1. The OR assignment operator is used to set a default value for a variable
	* This operator treats 0 and '' as falsy values
	* Do not use this operator if you need to accept 0 or '' as values 
2. The NULLISH assignment opertor can be used to set default values for variables but only uses 'null' and 'undefined' as falsy values
	* Use this assignment operator to assign values if you need to accept 0 or '' as a value
	* 0 and empty string will both be acepted as acceptable values
3. The AND assignment operator assigns a value to a variable if it is currently truthy

## Looping Arrays: For-of loop
1. The For-of loop was introduced in ES6
2. This is a much easier method to loop through an array
3. The syntax is: for (const x of arr) { console.log(x)}
	* x is a variable and must be declared
	* arr is an array
	* Any number of statements can be applied in the for loop for each item in the array
4. The CONTINUE and BREAK keywords work in this loop too
5. This loop syntax does not give you the index:
	* The index can be obtained by using a different syntax
	* for (const item of array.entries()) { do it; }
	* Now each 'item' is an array with the index and the value
	* arr.entries() can be destructured in place like:
		for (const [i, v] of arr.entries()) {do it;}
	* The arr.entries() is an array iterator

## Enhanced Object Literals
1. The reataurant object in our script.js is an object literal
2. Since ES6
	* External objects can be added to a new object just by adding the object name
	* Methods do not have to be created with a key value and a function object; just create a method like you would outside of an obeject
	* Object keys can be computed values

## Optional Chaining (?.)
1. If a part of an object is optional, the optional chaining method can be used
2. In the object chain place a '?.' between the optional object and its value
3. Example: restaurant.openinghHours.mon?.open
	* If 'mon' does not exist in the openingHours object, then 'undefined' will be returned instead of creating an error
	* It is better to do a check for undefined instead of creating an unresolved error
4. Example: restaurant.openinghHours?.mon?.open
	* This example checks to see if openingHours exists
	* If it does, then it checks for 'mon'
	* Only if 'mon' exists, will it attemp to get the open hours for the resturant for that day
	* If 'mon' does not exist an undefined is returned
	* If 'openingHours' does not exist, undefined will be returned
	* Undefined will be returned at the earliest point that the optional chainging is performed and the object is undefined
	* The optional chaing methdology will allow you to check for existing keys at any level of the object
5. The OPTIONAL CHAINING methodology was created to work with the NULLISH COALESCING operator

## Looping Objects: Object Keys, Values, and Entries
1. The Object object of JS has methods used to loop over objects:
	* Object.keys(obj): returns array of keys
	* Object.values(obj): returns array of values
	* Object.entries(obj): returns an array of arrays containing keys and values
2. Using the Object.entries(obj) method allows you to loop over the entire object
3. You can destructure the arrays returned from the Object methods in the For-of loop initializer into variables you can use during the loop processing

## SETS
1. A set is a collection of unique values
	* A set cannot have any duplicates
	* A set can have mixed data types
2. You create a new set using the NEW keyword and the 'Set()' constructor
	* You must pass an iterable to the SET constructor
	* Usually an array is used, but ANY iterable could be used
3. A set looks much like an array, but cannot contain any duplicates
4. The order of elements in a set are irrelevant
5. Strings are iterables so a string can be passed to a SET constructor just like the array
	* The string is deconstructed into characters in the set
	* Any duplicate charaters will be eliminated and only the unique characters will be left
6. SETs have a size instead of a length
	* Arrays have a length
	* Sets have a size
7. You can check for elements in the set with the HAS method
	* Arrays have an INCLUDES method
	* Sets have a HAS method
8. Elements can be added to the set with the ADD method
	* Adding the same element multiple times will only work the first time
	* Remeber, sets contain unique values
9. Elements can be deleted from the set using the DELETE method
10. There are no indexes in SETs
	* You cannot retrieve an element from a set using the [] syntax (the result is undefined)
	* There is no way to get values from a SET
11. There is no reason to retrieve values from a SET
	* The elements of a set are unique
	* The elements in a set have no order
	* If you need to know if a set has a value use the HAS method
12. A set also has a CLEAR method
	* Deletes all elements from the set
	* When cleared the size is set to 0
13. You can loop over the elements of a set
14. SETs are used to remove duplicate values from arrays
15. You can create an array from a set using the destructuring method
	* Destructure the SET into an array
	* Use the spread operator to destructure the set
16. You can use the size method of a set without actually creating a new set
	* Create a new set from an collection of values without saving the result to a new variable
	* Use the size method on teh array constructor itself
17. Sets are onlu useful when you need a collection of unique values
18. SET was intriduced in ES6

## Maps: Fundamentals
1. Maps are much more useful than sets
2. A MAP is a data structure that we can use to map values to keys
	* Data are stored in KEY/VALUE pairs like objects
	* MAPs can have keys of ANY type, but Object keys are most often strings 
	* A MAP can have a key that could be an object, or an array, any primitive type, or even another MAP
3. To create a new map you use the NEW keyword with the MAP() constructor
	* MAPs have sizes like SETs
	* A new MAP created with nothing passed to the  constructor will create a new MAP with size = 0
	* It is best to start a new empty MAP and fill it later
4. Use the SET method of the map to fill it
	* The SET method expects a key/value pair
	* First, add the key name
	* Then follow with the value to be associated with the key
	* Example: ('name', 'Classico Italiano')
5. Each time the SET method is used: 
	* It returns the updated set
	* Therefore, the SET methods can be chained
	* Example: map.set(k1, v1).set(k2,v2).set(k3,v3)... .set(kN,vN)
6. Use the GET method to retrieve data from the 
	* The type of the key passed to the GET method matters
	* The BOOLEAN value true will return a value
	* The STRING value 'true' will return undefined
7. The MAP structure contains a HAS method
	* Same as for SETs, but works on the key
	* Checks to see if the MAP contains a particular key
8. The MAP structure contains a DELETE method
	* Works same as in SETs, but works on the key
	* Deletes a key/value pair when the key is passed to the DELETE method
9. ALL elements can be removed from the MAP using the CLEAR method
10. MAP was introduced in ES6
11. To use an array as a key:
	* Create the array outside the MAP in a variable
	* Use the ARRAY variable as the key name in the MAP
	* Then the GET method will collect the value of the key created with the Array variable
	* If you use a literal array in both places the GET method will return 'undefined'
12. DOM elements can be used as keys in a MAP

## MAPS: Iteration
1. A MAP can also be created literally using an Array of ARRAYS
	* Use the NEW keyword with the Map() constructor
	* Pass the Array of Arrays to the Map() constructor
	* The MAP is the main array
	* Each key/value pair is also an array
		+ Fist entry is KEY
		+ Second entry is VALUE
	* Use one array for each KEY/VALUE pair
2. An object can be converted to a MAP
	* Use the NEW keyword with the Map() constructor
	* Pass the Object.entries(obj) to the Map() constructor
	* The result is a new MAP
3. A MAP is also an ITERABLE
	* Iterables
		+ Arrays
		+ Strings
		+ Sets
		+ Maps
	* Use destructuring to get the [key, value] pair from each item of a MAP
4. You can convert a MAP to an Array
	* Create a new array variable
	* Destructure the MAP insice the array
	* Use the SPREAD operator to destructure teh MAP
5. You can collect the keys and values from a MAP
	* Use the keys() method to get keys
	* Use the values() method to collect values

## Summary: Which Data Structure to Use?

### Data Structures Overview
1. Data Sources
	* From the program itself
		+ Data Written directly in source code
		+ e.g. status messages
	* From the user interface (UI)
		+ Data created by the user
		+ e.g. taks in ToDo App
	* From external sources (WebAPI)
2. Collectiosn of data need to be stored somewhere
	* Data will be stored in a data structure
	* There are four built-n data structures in JS
		+ Objects
		+ Arrays
		+ Sets
		+ Maps
	* For a simple list of vallues use an Array or a SET
	* If you have a key/value pair use an Object or a MAP
3. Data from a Web API will most likely be in a JSON format
	* JSON uses key/value pairs
	* Therefore, JSON data would be stored in an object not an array

### Arrays vs Sets and Objects vs Maps
1. Use Arrays:
	* When you need an ordered list of value
	* Or when the list may have duplicates
	* Or when you need to manipulate data
2. Use Sets:
	* When you need unique values
	* Or when you need to remove duplicates from an array
	* Or when you need high-performance
		+ When searching for data
		+ Sets can be 10x faster than arrays
3. Use Objects:
	* Objects are the traditional key/value pairs data structure
	* Only objects were available for key/value pairs before ES6
	* It is easier to access values in objects using the '.' and '[]' syntax
	* When you need to include function methods
	* When working with JSON (these objects can be converted to a MAP)
4. Use Maps:
	* When performance is the most important factor
	* When you need to use keys of ANY data type
	* Maps are easier to iterate over
	* Maps are easier to compute size
	* When you need to map keys to values
	* When you need keys that are NOT strings
	
## Working With Strings: Part 1
1. Strings are zero-based primitives
2. There are many string methods
3. The slice method takes two parameters
	* The first is inclusive (includes the character)
	* The second is non-inclusive (does NOT incl char)
4. The INDEXOF and LASTINDEXOF methods are case sensitive
5. If a string method is called on a string primitive
	* JS converts the primitive to an object with teh same stringt value
	* Calls the method on the new object
6. ALL string methods return string primitives
7. Strings are immutable
	* They cannot be changed
	* The string methods do NOT change the original string

## Working With Strings - Part 2
1. More methods
	* toLowerCase()
	* toUpperCase()
	* trim()
	* replace()
2. String methods can be chained because each method returns a string primitive
3. Since ES2019:
	* trimStart()
	* trimEnd()
4. Since ECMA 2021: replaceAll()
5. The method replace() can be used to replace all occurrences
	* Must use a regular expression as the first parameter
	* The regex must contain the global modifier
	* The second parameter is the new substring to replace all occurrences of the first parameter
6. Methods which return Booleans:
	* includes()
	* startsWith()
	* endsWith()

## Working With Strings -Part 3
1. The split() methods allows us to split our string into multiple strings given a string to split on
2. The join() method allows us to join elements from a collection into a single string given a string to join on
3. You can pad a string at the beginning or the end

