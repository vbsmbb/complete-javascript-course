# Working with Arrays

## Simple Array Methods

1. Arrays have many methods
   - A method is a function attached to an object
   - That means that Arrays are also objects
   - These methods are tools for working with arrays
2. Array Slice Method
   - This method will create a new array with the elements selected by this method
   - The original array is not touched and a new array is returned by the method
   - You can call this method with either one or two parameters
     - First Parameter - starting index (included)
     - Second Parameter - ending Index (not included)
   - If the array is called with only one parameter, the elements starting with the element at the starting index to the end of the array are copied to the new array
   - If the array is called with two parameters
     - The first element of the new array is the element at the starting index
     - The last element of the new array is the element at the Ending Index - 1
     - The element at the index of the second parameter is not included in the new array, but all elements up to that element are included
     - The length of the array will be the ending index minus the starting index if both parameters are positive
   - A negative number can be used for either parameter
     - Negative parameters start counting at the end of the array
     - A slice with a single -1 parameter will take the last element of the array as the new array
     - A slice with a single -2 parameter will take the last two parameters from the original array
     - A slice staring with index 1 and ending with index -1 will take all elements from the starting index to the next to the last element (the last element is at index -1)
   - The slice method can be used to create a shallow copy of any array
     - Use the slice method without any arguments
     - A new array is created with the same elemets as the original array
     - This works the same as creating a new array with the spread operator
     - Which method is used is a developer preference
   - You would definitely want to use the slice method if you were making other changes to the array so that you could chain the methods together
3. The SPLICE Method (Mutates Original Array)
   - The SPLICE method is used to remove elements from an array
   - Works the same with one parameter like the slice method
   - However, this method changes the existing array and the extracted elements are sent to the new array
   - The splice removes the selected elements from the existing array
   - The selected elemets are returned as a new array
   - For the splice method, the second parameter is not an ending index
   - The second parameter is the deleteCount
   - deleteCount is the number of elements to be removed from the array
4. The REVERSE Method (Mutates Original Array)
   - The REVERSE method reverses the order of elements in the original array
   - This method mutates the original array
5. The CONCAT Method
   - This method is used to concatenate two arrays
   - This method takes one parameter, the array to be concatenated to the array using the CONCAT method
   - This method does the same thing as using the spread operator on two arrays
   - This method does NOT mutate the original arrays
6. The JOIN Method
   - Can accept one parameter, the character to be used to join the elements of the array
   - If no parameter is passed to the join element, a comma parameter is used
   - If you want no character to be used to join the elements of the array, then pass the empty string ('')
7. Use MDN to check the functionality of any of the array methods or to see the full list of array methods

## The New At Method

1. This method was added to the JavaScript language in ES2022
2. It is equivalent to the bracket notation which will select one element from the array
   - Before: arr[0] - returns first element
   - Now: arr.at(0) - returns first element
   - Before: arr[arr.length-1] - returns last element
   - Now: arr.at(-1) - returns last element
   - Returns the element from the position passed to the method
3. Since the at() method uses negative array positioning, it is much easier to use than the bracket notation method for the last element in the array
4. This method also works on strings (the same as arrays)

## The forEach Method

1. The expected parameter for the forEach method is a callback function
2. This function is called for every element of the array
3. During each iteration of the array the current element is passed to the function
4. Therefore, the callback function must have a parameter to accept the array element
5. Not only does the forEach method pass the current element to the callback function
   - It also passes the index and the whole array
   - The order of the passed arguments is
     - Element: first parameter
     - Index: second parameter
     - Whole Array: third parameter
   - If all you need is the element, then use one parameter in you callback function
   - If you need the index, then add the element and index parameters to your callback functionj
6. The continue and break statements do NOT work in a forEach loop
   - If you want to break out of the loop before the end of the array use the for-of method
   - Also use for-of method if you want to skip the processing for one or more elements in the array

## forEach with Maps and Sets

1. The expected parameter for the forEach function for Maps and Sets is still a callback function
2. For Maps, the function has three parameters:
   - First parameter - value
   - Second parameter - key
   - Third parameter - map object (entire map object)
3. For Sets, the function has three parameters:
   - First parameter - value
   - Second parameter - value
   - Note that this parameter was the same as the first
   - This was done so that the signature of the callback function did not change
   - In the callback function you can set the second parameter to an underscore so that it is ignored (common JS activity)
   - Third parameter - set object (entire set object)
4. The forEach loop was introduced in ES6

## Creating DOM Elements

1. Creating a new DOM element on a web page is easier created using template strings than any other method
   - You can start with a template string and update the element string to add the data to make teh element unique
   - Even partial CSS class names an be generated using variables in the template string
2. You can insert new rows into a container by using the method 'insertAdjacentHTML' and the new HTML string that was just created
   - The insertAdjacentHTML() method requires two parameters
   - Where to place the new HTML
     - beforeBegin
     - afterBegin
     - beforeEnd
     - afterEnd
   - What to put into it
3. You can also insert new elements using container.insertAdjacentElement
4. We used the first method because we created the new element with HTML code
5. To empty a container before adding new data:
   - Use the method innerHtml()
   - Set the contents of the container to the empty string
   - The, add new data

## Data Transformations: map, filter, reduce

1. Map
   - Loops over all the elements of an array
   - Applies a callback function to each member of the original array to transform the data
   - The results are returned in a new array with the data transformed
2. Filter
   - Looks for elements in the original array which match a certain condition
   - The results are returned in a new array with only the elements which satisfied the condition
3. Reduce
   - Loops over all the elements of an array
   - Performs an execution on each memeber of the original array to produce a single value result
   - The single accumulated result is returned from the method

## The MAP Method

1. The only parameter passed to the map() method is a callback function
2. The only parameter the callback function requires is a parameter which will be the current element of the array
3. The map() method returns a new array with the results of the transformation executed on the original array
4. The original array is NOT mutated
5. The callback function for the map() method is a good applicational use for the Arrow function
6. The map method also passes the index of the original array and the whole array as parameters to the callback function if they are needed (like forEach() method)
7. Only use the parameters in the callback function that you need
   - Don't add the index as a parameter if it is not used
   - Don't add the array as a parameter if it is not used

## Computing userNames

1. You can chain methods together as long as the following method accepts input that is the same type as the type from the first.
2. Use arrow functions in MAP methods
   - They are more concise than function expressions
   - If you only need one statement in the function they are perfect
3. Try to make your JavaScript efficient and concise

### The filter Method

1. The filter() method searches the array to find elements that satisfy a certain condition
2. The callback function is the parameter passed to a filter method
3. The callback function in the filter() method has access to the current element, the index, and the entire array
4. Once again, the arrow function is a good candidate to use for the callback function in the filter() method; especially if the function has only a single statement

## The reduce Method

1. You guessed it, the reduce() method also gets a callback function as it's parameter
   - The callback function is the first parameter
   - The start value of the accumulator is the second parameter
   - Sums should always start with accumulator equal to zero
2. The parameters of the callback function are:
   - First parameter -- accumulator
   - Second parameter -- current element
   - Third parameter -- index
   - Fourth parameter -- the entire array
3. Mostly, the accumulator and the current element are used in the call back functions
4. Again, the arrow function was made for the callback function of the reduce method
5. When trying to collect a maximum or minimum value using the reduce method always start with the first value of the array being reduced
   - Starting with zero will usually pass for a maximum value but could easily fail for a minimum value
   - If all the values were below zero, the maximum would also fail because 0 is greater than any value less than 0

## The Magic of Chaining Methods

1. Do not overuse chaining
2. Performance issues could be created if processing huge arrays
3. Try to be efficient in your methods
4. Do not chain methods that mutate the original array

## The find Method

1. The find() method is used to retrieve an element of an array
2. The find() method needs a callback function that returns a Boolean value just like the filter method
3. This method does not create a new array. It just returns the first element that meets the condition.
4. This method does NOT mutate the original function
5. Differences between find and filter:
   - Filter returns ALL elements that meet the condition while find only finds the first element that meets the condition
   - Filter returns a new array with ALL of the elements that meet the condition while find only returns the first element that meets the condition
6. The find is best used when looking for a particular object in an array of objects
7. Was added to JavaScript in ES6

## The findIndex Method

1. Works basically the same as the find() method
2. Requires a callback function as it's first parameter
3. The callback function can access the current element, the index of the current element, and the entire array
4. In most cases only the current element is a useful value
5. The callback function should return a Boolean
6. The results from the method will be the index of the first element where the boolean is true
7. This method does NOT mutate the original Array
8. Was added to JavaScript in ES6

## some and every

1. The includes() method
   - The includes method returns a boolean
   - It checks to see if the parameter included in the method call is in the array
   - It only uses the equality operator to check for the parameter in the array
2. The some() method
   - A callback function is the parameter passed to this method
   - An Arrow function is still a good choice for this function
   - The callback function returns a **boolean** for the check of the array elements in the callback function
     - If any element meets the condition a true value is returned
     - If no element meets the condition then a false value is returned
   - Using the some() method with an equality condition will work, but does not make sense
   - For equality checks, use the includes() method
   - Can be used in control statements like if and switch
3. The every() method
   - Very similar to the sum method
   - Receives a callback function as a parameter
   - Returns a boolean value after the array elements are matched against the callback function condition
     - Returns true if every element meets the callback method condition
     - Returns false if even one member does not meet the condition
4. The callback function could be an external function that is passed to the method
   - This is true for all of the methods in this section that reuire callback functions
   - The same external callback function could be passed to multiple methods to extract differnt results from the same array

## flat and flatMap

1. The methods flat() and flatMap() were introduced in ES2019
2. The flat() method
   - Requires no passed parameter if element arrays are only one level deep
   - Works on arrays which have arrays as elements
   - Returns a flattened array of the original array with nested array elements
   - If array elements also have array elements then a parameter must be passed
   - The parameter would be a Number value representing the maximum array depth
   - The DEFAULT array depth === 1
3. It turns out that doing a map and then flattening out the results is a very common occurrence in JavaScript
4. Therefore, we have the flatMap() method
   - Only goes one level deep
   - If you need more than one level of flattening, you need to use the standalone flat() method

## Sorting Arrays

1. The sort() method
   - You can use without any parameters to use the default JavaScript sort
   - THe default method is to sort from smallest value to largest
   - This method DOES mutate the original array
2. THe deafult JavaScript sort() method sorts by string value
   - It converts all values to strings and then sorts the strings
   - Therefore strings are sorted properly, but numbers are not
3. To sort numbers, you have ato pass a compare callback function to the sort() method
   - If return value of callback function is < 0, then current will be before next
   - If return value of callback function is > 0, then next will be before current
4. The compare function that we wrote works for both letters and numbers
5. IF you are only working with numbers, the compare function is much simpler
   - Ascending: curr - next
   - Descending: next - curr
6. If your array consists of both numbers and strings, then sorting does not make much sense

## More Ways to Create and Fill Arrays

1. Array() method
   - Creating a new array with only one argument, using the Array(argument) method, creates a new empty array of length argument
   - Using the normal methods with this new array does nothing
   - You must use the fill method to put values in this empty array
2. The fill() method
   - Can accept three values
     - First: Value to fill with
     - Second: Start Index
     - Third: End Index
   - Changes all elements in an array with the value of the argument passed to the fill method
     - Start Index: 0 (By Default)
     - End Index: array.length (By Default)
   - This method fills the new array created by the Array() constructor with the value of the first parameter
   - It functions much like the slice method
3. This method mutates the original array
4. The Array.from() method
   - The array constructor followed with the fill() method can be replaced by the new Array.from() method
   - It does the creation of the new array and the fill in one fell swoop
   - It takes two parameters
     - First: Object containing the length key with a value for the array length
     - Second: A callback method which calculates the value for each element
   - Example: y = Array.from({length: 4}, () => 0);
     - Creates a new array with a length of 4
     - Fills the new array with the value 0 for each element
   - The callback function for the Array.from() method works like the map() callback function
     - First Parameter: current element
     - Second Parameter: current index
5. Array.from() was added to JavaScript in ES6

## Summary: Which Array Method to Use?

1. To mutate original array
   - Add to original array
     - **push()**: Add to end of Array
     - **unshift()**: Add to beginning of array
   - Remove from original array
     - **pop()**: Pull from end of array
     - **shift()**: Pull from front of array
     - **splice(start, howMany)**: Pull any element(s) from array
   - Others
     - **reverse()**: Reverse order of elements in array
     - **sort()**: Sort the original array
     - **fill()**: Fill a new array with static values
2. Create a new array
   - **map()**: Computed from original array
   - **filter()**: Select certain elements from a condition
   - **slice()**: Select a portion of the original array
   - **concat()**: Adding one array to another
   - Flatten the orignal array
     - **flat()**
     - **flatMap()**
3. An array index
   - **indexOf()**: Based on value passed to
   - **indIndex()**: Based on a test condition
4. An array element: **find()** -- Based on a test condition
5. To know if an array includes
   - **includes()**: Based on actual value
   - Based on a test condition
     - **some()**
     - **every()**
6. Create a new string: **join()** -- Based on a separator value
7. To transform the array elements to a value: **reduce()**: Based on accumulator and callback function
8. To Loop through the entire array: forEach() -- Based on a function callback
