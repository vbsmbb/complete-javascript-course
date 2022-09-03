# Numbers, Dates, Intl, and Timers

## Converting and Checking Numbers

1. In JavaScript:
   - All numbers are saved as floating point decimal numbers
   - Numbers are saved in a 64-bit, base-2 format (binary)
   - Some fractional numbers are very hard to save in binary format (e.g. 0.1)
   - This number is saved with a value that is like an infinaite fraction which is the same thing that happens with 10/3
   - The scripting languages, PHP and Ruby, use the same format to save numbers and have the same problem
2. Scientific and Financial calculations should NOT be done in these languages because of this rounding issue
3. There are two ways to convert string numbers to the Number type
   - Use the Number() constructor
   - Use a plus sign before the string (e.g. +'23')
   - Both ways convert a string number to a value with the type Number
   - Both will return NaN if any characters are NOT number characters
4. The Number object has a method, parseInt(), to parse a string into a value with a Number type (Number.parseInt('30px'))
   - Even if the string has characters other than numbers it will return the numbers found as long as the string begins with a number
   - If it begins with a non-number character, the parse will fail
   - The parseInt() method also accepts a second parameter: the radix of the number system to convert the number to
   - Base 10 is the default radix for parseInt() conversions
   - You should add the 10 radix to make the code more understandable
5. The Number object also has a method, parseFloat(), to parse floating point numbers (e.g. Number.parseFloat('2.5rem'))
   - The NUmber methods are part of the Global context and could be used without the Number object
   - However, this practice is not a Best practice
   - Using the method as part of the object gives the method a name space and is considered to be a Best Practice
6. The Number object contains a method, isNaN(), to check if a string is not a number (NaN)
   - The method takes a string as a parameter and returns a Boolean value
   - It ONLY returns true when the string cannot be converted to a value with a Number type
   - Else it returns false
   - This function will NOT return true for the value of the expression 23 / 0 (expr returns Infinity not NaN)
7. The Number object contains a method, isFinite(), to check the values of finite Numbers
   - This function returns true if the value is a number
   - ELse it will return false
   - This method returns false for division by 0 errors
   - This is a better way to check for numbers than 'isNaN'
8. The Number object contains a method, isInteger(), to check the values are Integers
   - This method returns true for number values
   - Returns false for string values
   - Returns false for division by 0 errors

## Math and Rounding

1. The Math methods
   - sqrt(x): same as x \*\* (1/2)
   - cbrt(x): same as x\*\* (1/3)
   - max(): returns the max value of a collection of numbers
     - ONly works with numbers or number strings
     - Fails if any member of the collection contains a string with characters that are not numbers (returns NaN)
   - min(): returns the minimum value in a collection of numbers and works the same as max()
   - random(): Retruns a random number between 0 and 1
   - trunc(): Only returns the integer portion of a floating point number
   - round(): Rounds to the nearest integer
   - ceil(): Rounds UP to the nearest integer
   - floor(): Rounds DOWN to the nearest integer
   - toFixed(): Always returns a value with a String type
     - Rounds appropriately to the number of decimals selected
     - It adds zeros if necessary to give the number of selected decimals
2. Math properties
   - PI: Mathematical constant which represents the value of a circle's circumference divided by its diameter
   - E: Euler's number approximately 2.718
3. The methods floor() and trunc() are similar
   - They work the same for positive numbers
   - However, floor works more correctly for negative numbers

## The Remainder Operator

1. The remainder operator is represented by the percent sign (_%_)
2. The result of this operator is the value of the remainder of the integer division of two numbers
3. Check whether a number is even or odd
   - An even number has a remainder of zero when divided by two
   - An odd number has a remainder of one when divided by two
4. An event can be caused to occur on a distribution of a collection by using the remainder operator on the index
   - If a % b === 0, then execute the event
   - if a % b !== 0, do NOT execute the event

## Numeric Separators

1. Numeric separators are used for very large numbers which are hard for humans to read
2. An underscore can be used as a 'thousands' separator in a JavaScript number
   - Used for human consumption
   - Breaking the number up with the underscores gives us a visual indicator of the value of the number
   - It does not change the type or value of the number
   - The JavaScript Engine (JSE) ignores the underscores in the number value
3. The underscore can give some meaning to the number you are using
   - It could also break up a value in cents or hundreds of dollars
   - However, the underscores are ignored by the JSE so be careful what you are trying to represent
   - Two different visual representations could be seen as the same number by the JSE
4. The underscore can only be placed between numbers
   - It cannot be placed before or after a decimal point
   - It cannot be placed at the beginning of a number
   - It cannot be placed at the end of a number
   - You cannot place two underscores together in a row (e.g. \_\_); only one at a time
5. Numeric separators cannot be used in a string number being converted by the Number constructor
   - Number('230_000') is NOT allowed
   - Only use the numeric separators with numbers; not strings
   - Also, do not use with parseInt; the parsing will stop at the first underscore

## Woring with BigInt

1. The primitive data type, BigInt, is a special type of Integer introduced in ES2020
2. A JavaScript Number is a 64-bit binary value
   - 53 of the binary values are used for the number itself
   - The remaining 11 are used for the sign and the decinmal point
   - The largest value integer that can be represented is **2⁵³ - 1**
   - JavaScriptcannot represent any number larger than the MAX_SAFE_INTEGER (property on Number object)
3. The BigInteger primitive value can store any Number required
   - Use an 'n' at the end of teh integer to represent a BigInt number
   - This value will be display in light gray with the trailing 'n'
4. The constructor function can be used to create a BigInt primitive, too
   - Only use the constructor for integers up to the MAX_SAFE_INTEGER value
   - Using the constructor for anything larger will result in loss of precision
5. Operations with BigInt primitive values
   - All of the mathematical operators work the same (e.g. +, -, \*, /, %)
   - You cannot mix BigInts with regular numbers
   - You must convert smaller values to BigInts to be used in a BigInt operation
   - The constructor function can be used on the regular number to convert it to a BigInt for the operation
6. A BigInt type is a different primitive type than the Number type
   - They will not compare with the strict compare operator
   - The BigInt is a different type than Number
   - if (20n === 20) returns FALSE; the types are different
7. The loose comparison operator (==) will still return true if the values are equal
   - This operator does type conversions
   - The regular number will be implicitly converted to a BigInt type and then the values are compared
8. The methods of the Math object do not work with BigInt numbers
9. The BigInt primitives are INTEGERS ONLY!
   - They do not have a decimal part
   - Division of BigInt numbers results in the closest integer of the result
10. BigInts are often used as indexes for database entries

## Creating Dates

1. There are four ways to create dates with JavaScript
   - Use the new Date() constructor (date constructor) with no parameters
     - Returns the current date at this second
     - This date is in a long date format (e.g. Day Mon dom YYYY HH:mm:ss (TZ))
   - Use the new Date('date str') with a date string passed to it
     - The best string to use is a JavaScript formatted string
     - YOu can pass your own string, but it may niot be reliable
   - Pass numbers for year, mon, day, hours, minutes, seconds as parameters to the date constructor
     - In JavaScript, the month index is zero-based
     - January is month 0; December is month 11
     - The date constructor is autocorrecting:
       - November 31 will display as December 1
       - November 33 will display as December 3
   - Pass the number of milliseconds since January 1, 1970 (UNix time)
     - This number is the UNix timestamp
     - Calculated by numDays \* hours/day \* minutes/hour \* seconds/minute \* 1000ms/second = ms/day
     - numDays \* ms/day = Unix timestamp (num milliseconds since Jan 1, 1970 1:00:00.000)
2. Date methods
   - getFullYear()
     - Returns the four-digit year as a Number
     - Do not use getYear(): it only returns two-digit year
   - getMonth()
     - This is a zero-based index
     - 0 = January, 11 = Decemmber
   - getDate(): returns the day of the month (DOM)
   - getDay()
     - Returns the index of the day of the week (DOW)
     - 0 = Sunday, 6 = Saturday
   - toISOString()
     - Returns the ISO date string: yyyy-mm-ddThh:mm:ss.fffZ
     - The ISO date string is returned with UTC time
   - getTime(): returns the Unix timestamp
   - The static menthod Date.now()
     - Returns the current date time
     - It is the Unix timestamp of this moment
   - There are 'set' methods for each of the above also

## Operations with Dates

1. Dates can be used in calculations
   - Subtract date2 from date1
   - Add days to a date
2. moment.js is a library to work with numDays
   - Converts dates caring for edge cases like DST
   - Available for all JS developers

## Internationalizing Dates (Intl)

1. JavaScript now has an Internationalization object
   - Allows us to format dates and numbers according to the local languages
   - The locale is in the browser too at navigator.locale
2. The MDN has great documentation on the Intl object
3. To internationalize a date: new Intl.DateTimeFormat(locale).format(dateObj)

## Internationalizing Numbers (Intl)

1. To format a number using the Intl object just: new Intl.NumberFormat(locale).format(number)
2. There are options that can be used with this formatter
   - style: What type of number is it
     - unit
     - percent
     - currency
     - decimal
   - unit: Unit type must be added when style is unit
     - mile-per-hour
     - delsius
     - acre
     - byte
   - currency: Currency code must be added when style is currency
     - EUR
     - USD
     - CYN
3. The currency symbol is NOT implied by the locale string

## Timers: setTimeout() and setInterval()

1. The setTimeout() function requires two parameters
   - First: Callback function to execute at setTimeout
   - Second: The timeput value in milliseconds
   - Third ... nth: arguments for the callback function
2. The setTimeout() timer can be cleared with the clearTimeout() function
   - The setTimeout() function must be saved to a variable
   - The variable with teh timer is the parameter to pass to the clearTimeout(timer) function
3. The setTimeout() functions schedules a callback function to run after a given number of milliseconds
