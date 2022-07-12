# Developer Skills and Editor Setup

## How to Think Like a Developer: Become a Problem Solver

### Four Steps to Solving Any Problem
1. Understand the problem
	* Step back and take a high-level look at the problem
	* Ask questions to get a clear picture of the problem
2. Divide and Conquer
	* Break a big problem into smaller sub-problems
	* An essential method of problem solving
	* 
3. Research whatever you do not know
	* Do as much research as necessry to be able to fix the problem or sub-problem
	* Do not be afraid to use Google, StackOverflow, and MDN (Mozilla Developer Network)
	* Research is a huge part of a developer's job
4. Write psuedo-code before writing the actual code
	* Pseudo-code is code for humans to understand
	* It will help you to create the structure of the problem you are trying to solve
5. Develop a genuine curiosity and passion for how things work

### Problem to Solve
1. Create a function to reverse whatever we send into it
2. Questions
	* First question: What does "whatever" mean
		+ What should be reversed?
		+ In JavaScript, it only makes sense to reverse strings, numbers, and arrays
		+ Objects do not have an order
		+ It makes no sense to try to reverse an 'undefined', null, or Boolean type
	* Second question: What should we do if something other than a string number or array is passed to this function?
	* Third question: What should be returned?
		+ A string?
		+ Always return whatever type was passed in makes more sense
	* How do we determine what type the parameter is before we try to reverse it
	* How do you reverse a number, a string, or an array?
3. Divide the problem into smaller problems (sub-problems)
	* Check to see if the argument is a number, a string, or an array
	* How do you determine the type of the argument
	* How do you determine if an object is an Array?
	* Implement reversing an array
	* Implement reversing a string
	* Implement reversing a number
	* Return the reversed value
4. Write pseudo-code:
`function reverse(value) {
	If value !string && !number && !array
		return value
	
	If value is an array
		reverse the array
	If value is a string
		reverse the string
	If value is a number
		reverse the number
	
	Return reversed value
 }
`

## Debugging (Fixing Errors)
1. A bug is a defect or problem in a computer program
	* Any unexpected or unintended behavior in a computer program is a bug
	* They are called bugs because a real bug caused a computer in Harvard to crash in the 1940's
2. Bugs are a normal part of software development
	* Every complex program contains bugs
	* Some are not found for years

### The Debugging Process
1. Become aware of an issue with the program
2. Bugs can be identified during:
	* Software Development
	* Software Testing
	* In Production
3. Must be aware of the context (where did the bug happen?)
	* In a browser?
	* During command line operation?
	* By a user?
	* By another developer?
	* By a software tester?
4. Find the bug: (where is it occurring in code?)
	* Use developer console (simple code)
	* Use a debugger (complex code)
5. Fix the bug: (correct the code)
6. Prevent it from happening again
	* Search code base for similar code error
	* Writes tests for this bug using testing software

## Debugging with Console and Breakpoints
1. Developer Tools has a built-in debugger
2. You can access the debugger in the Sources Menu item
3. Select the script.js file tobrowse
4. Set a breakpoint in the code by selecting the line where you want the breakpoint set and clicking in the line number column
5. Then you need to restart the page
6. The code will stop executing at the breakpoint
7. You can query variables and objects that have been set up to this point
8. Then you can single-step through the remaining code or you can did into functions when they are called or you can step over functions
9. Use the step widgets in the debugger to decide what to do next
10. 