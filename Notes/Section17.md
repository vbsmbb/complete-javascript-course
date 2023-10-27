# Modern JavaScript Development: Modules, Tooling, and Functional

## An Overview of Modern JavaScript Development

1. JavaScript applications no longer throw all of teh JavaScript code into one big file
2. Now, the functionality of teh code is broken into modules and data is passed between the modules
3. We can also add third-party modules into our code as well
4. NPM is the repository for all types of JavaScript modules not just modules for NodeJS any longer
5. Once development is complete and all of the code is working properly
   - A build process will then build the multiple modules into a JavaScript bundle
   - This bundle will be used by the production version of the application
6. Build process
   - Bundle all of the modules into a single file and compress the code during this step
     - This is done so that older browsers that may not understand modules can still use the application
     - Now you are able to serve older browsers as well as the new ones
   - Then the second step is transpiling and polyfilling
     - Converts all modern JavaScript syntax back to old ES5 syntax
     - This is done to allow older browsers to use the application, too
     - Babel is the tool used to do the transpiling and polyfilling
   - Webpack and Parcel are the two tools most often used for the build process
     - Webpack is used by many organizations
       - It can be confusing to use
       - It requires a lot of manual configuration to make it work properly
       - You have to write configuration code to make webpack work
     - Parcel
       - It is a zero configuration bundler
       - It simply works right out of the box
       - No setup code is required to use this bundler like with Webpack
7. The tools that will be used are also on NPM
   - The live server that has been in use all along
   - The Parcel Bundler system
   - The Babel transpiler and polyfiller

## An Overview of Modules

1. A module is a reusable piece of code that encapsulates implementation details
   - A module is often a standalone file
   - A module may contain code, imports, and exports
   - Whatever is exported from the module is called the public API
   - Any import into the module is called a dependency of the module
     - The module will not runn correctly without the import
     - Therefore, the import is a dependency for the module
2. Why Use Modules?
   - To compose Software
     - Modules are small building blocks of a larger more complex application
     - The modules compose a complete action, but only one part of an application
   - To isolate components
     - Different engineers can work on different modules without needing to know how the whole application works
     - Then the modules can be woven together to create a very complex application
   - Code Abstraction
     - Implement low-level code in modules
     - Import these abstractions into other modules
   - More Organized Code
   - Reuse modules in other projects
3. Native JavaScript Modules (ES6)
   - Modules are stored in files
   - One module to a file
   - ES6 Modules
     - All top-level variables are scoped to the module
       - Variables are private to the module by default
       - Module values are only available through exports
     - Modules are executed in strict mode
       - It is not required to declare strict mode in modules
       - The default mode for modules is 'strict'
     - Top-level this is undefined in modules
     - Import and exports are executed using ES6 syntax
     - Imports and exports have to be defined at the top-level
       - Imports are always hoisted regardless where they are added
       - Best practice adds imports the first thing in the module
     - Link to HTML by adding 'type="module"'' as a parameter to the script tag
     - Module files are loaded asynchronously
   - JavaScript Scripts
     - All top-level variables are always global
     - This can lead to global namespace pollution
     - Scripts are executed in sloppy mode by default
     - Top-level 'this' points to 'window'
     - Scripts do imports using require
     - Script files are loaded synchronously
4. How ES6 Modules are imported
   - ES6 Modules are imported before the code begins to execute
   - Imports occur during the parsing of the code
   - Modules are imported synchronously
   - This makes bundling and dead code elimination possible

## Exporting and Importing ES6 Modules

1. Only a module can import another module
   - Had to change the 'script.js' to a module
   - Updated the HTML file and set the type of the script to module
2. The imported module's code is executed as soon as the module is imported
3. Import statements are hoisted to the top of the code as soon as parsing is complete
   - Import statements are always executed first in any code
   - Best practice states that import statements should be the first statements in any module
4. All modules are executed in strict mode
   - You do not need to use the 'strict mode' command inside a module
   - The default mode for modules is 'strict'
5. Module top-level variables are scoped to the module
   - The are private to the module
6. There are two types of exports from modules
   - Named exports
   - Default exports
7. Can create an export value by typing 'export' before the function or value
   - Exports have to be defined in top-level code
   - Functions or values to be exported cannot be embedded in a block below top level
   - Export values can be defined at the bottom of the module also
     - Put names of objects to export in braces which follow an 'export' keyword
     - This is a ggod way to export values
     - You can do named exports in both ways in the same file
8. The names of imported values can be changed
   - You can change the names where you import the variables
   - You can also change teh names where you export the variables
   - Naming is very flexible in both the exporting module and the importing module
9. Import the Whole Module
   - Everything in the module can be imported into a single variable
   - THis variable will be like a class variable
   - It will contain all of the exported objects and any getters and setters that may also be part of the modulwe
   - The module only Exports the Public API
   - Everything else in the module stays private
10. Default Exports
    - Default exports are used when only one thing will be exported from a module
    - Default exports are not named when they are exported
    - You can name them aything you want when you import the default export
    - Default exports and named exports can be executed in the same module.
    - The import module and the export module are connected together after the import
    - Imports are NOT copies of the exports. They are live connections!
    - Best practice says do not have Default and Named exports in the same module

## Top-level Await (ES2022)

1. With the ES2022 update, the 'await' keyword can be used outside of an 'async' function
   - This only works in modules, not scripts
   - It only works as a top-level function call (i.e. fetch(); res.json(), etc)
2. The problem with the top-level await
   - This command blocks the execution of the whole module now
   - It can be an issue if the await function is fetching a large amount of data
   - To make sure that it works in the background, the await has to be executed from an 'async' function
3. Top-level await in imported module
   - If a module has a top=-level await call, the await function will be executed duirng the module export
   - Once the await has completed fetching, then the rest of the exported code executes
   - Then, the module import is completed

## The Module Pattern

1. Module Pattern Main Goal
   - To encapsulate functionality
   - To have private data
   - To expose the API
2. Use IIFE Functions
   - Start with an IIFE [Immediately Invoked Function Expression]
   - This is the way modules were created prior to ES6
3. Module Problems Prior to ES6
   - For one module per file all would have to be added as a script tag to index.html
   - You would have to make sure they were added into the HTML file in the correct way
   - All of the variables live in the Global Scope
   - Bundlers cannot work with this old module method
4. Native Modules added to language in ES6

## CommonJS Modules

1. They have been used in NodeJS since its existence
   - ES6 Modules have been implemented in NodeJS just recently
   - NodeJS is a method of running JavaScript on a web server outside of a browser
2. Many NPM modules still use the CommonJS module system
   - Originally NPM was only used for NodeJS modules
   - Now it is a packaging system for all JavaScript modules
3. In CommonJS Modules
   - One file is one module
   - Export an object using 'export.<name-of-object>'
   - Only works in NodeJS; not in the browser

## A Brief Introduction to the NPM [Node Package Manager]

1. Why do we need NPM?
   - We need a way to load modules outside of HTML
   - There is no single CDN site that will contain all of the modules that mey be needed for a project
   - You can download the libraries directly to the computer, but when updates occur, it is a very labor intensive project to to the updates
   - We need a better, more modern, way to manage dependencies; ergo, NPM
2. When savingproject to git
   - Never include the node modules folder
   - It is large and is not needed
   - Just save the package.json file and recreate the node-Modules folder after git environment is cloned

## Bundling with Parcel and NPM Scripts

1. Webpack is probably the most used bundler especially in React applications
   - Webpack is very complicated to use
   - It requires a lot of user configuration
2. Parcel is another build tool
   - It is much easier to use than webpack
   - It can also be downloaded from NPM
3. Parcel does not work well on windows
   - Import the lodash module without path did not work
   - The link to the live server does not work
   - Selecting index.html in ./dist for live server did not work at first
   - Had to change "/index.XXXXX.js"" to "./index.XXXX.js"
   - However, the live server link still did not work
   - Runing parcel as a script failed
   - The "parcel build index.html" command failed on windows
4. Parcel executed from the command line a second time worked better
   - A configuration change to the Edge web browser was made between the first and second iterations
   - The live link created by parcel worked this time also
5. It might be worth learning Webpack if it works better on windows

## Babel and Polyfilling

1. Babel only transpires syntax!
2. Babel used to do polyfilling out of the box
3. However, Babel now suggests another libraby for the polyfilling
   - Use the core-js package from NPM
   - Install the package manually
   - Then import into ypur application
4. Polyfilling is the action of adding functions to the application that may not be part of the ES5 and earlier JavaScript
   - The array prototype methods
   - The Promise object
   - Async functions

## Review: Writing Clean and Modern JavaScript

1. For Readable COde
   - Write code so others can understand it
   - Write codeso you can understand it a year from when written
   - Avoid solutions that are too clever or too complicated
   - Use escriptive variable names [say what they contain]
   - Use descriptive function names [saywhat they do]
2. In General
   - Use DRY(Don't Repeat Yourself) principle [refactor your code]
   - Don't pollute the global namespace
     - Encapsulate your data
     - Use functions or classes or modules
   - Do not use 'var' [use 'let' or 'const']
   - Use strong type checks ( === and !== )
3. Writing Functions
   - Functions should do only one thing
   - Do not use more than three function parameters
   - Use default parameters wherever possible
   - Generally, return same data type as received
   - Use arrow functions when they make code more readable
     - Once great use case for arrow functions is:
     - Use them in the CB functions of array methods
4. Object Oriented Programming (OOP)
   - Use ES6 JavaScript classes
   - Encapsulate data
     - Don't mutate it
     - Hide data internal to class
   - Implement method chaining
   - Do not
5. Avoid nested code
   - Use early return guard clauses
   - Use ternary or logical operators instead of 'if's
   - Use multiple 'is's instead of if/else-if
   - Avoid 'for' loops for arrays; use array methods instead
   - Avoid callback based asynchronous APIs
6. Asynchronous code
   - Consume promises with async/await for best readability
   - Whenever possible run promises in parallel
   - Handle errors and Promise rejections

## Declarative and Functional JavaScript Principles

1. There are two different coding Paradigms
   - Imperative
   - Declarative
2. Imperative Coding Paradigm
   - Explain to computer how to do things
   - Describe every sinhgle step required to complete the task
   - Every task is written step-by-step
3. Declarative Coding Paradigm
   - Programmer only tells computer what to do
   - We describe the way the computer should achieve the result
   - The step-by-step instructions get abstracted away
     - Use array methods instead of a for-loop to use array data
       - Filter
       - Find
       - Map
       - Etc.
     - Use ternary operators instead of if-statements
     - Use operator chaining instead of if-statements
     - Most common methodology in coding today
     - This paradigm gave rise to functional programming
4. Functional Programming
   - This is a Declarative Programming paradigm
   - It is based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data
   - The Declarative paradigm and Functional coding is the modern way of writing code in JavaScript
5. What is a side effect?
   - A modification of any data outside of a function
   - Including:
     - Mutating external variables
     - Logging to console
     - Writing to DOM
6. A Pure Function
   - This is a function without side effects
   - It does not depend on external variables
   - Given the same inputs; always gives the same outputs
7. Avoiding Mutating data
   - This is called Immutability
   - In an Immutable function, state data is NEVER modified
   - Instead, state data is copied, then the copy is mutated and returned
   - Data is never modified
   - Immutability makes it easy to track how data flows through an application
8. Ultimately, FUnctional programming allows you to write better code with fewer bugs
9. Imperative and Declarative programming can be mixed in an application
   - Writing an application using only functional programming takes a lot of work
   - Some of the newer Libraries like React and Redux use this methodology
   - However, writing pure functions and eliminating side effects can still be done in an application using the Imperative coding paradifm
10. Functional Programming Techniques
    - Avoid data mutations
    - Use built-in methods that do not produce side effects
    - Execute data transformations on arrays using the array methods
    - Try to avoid side effects in functions you write
11. Writing Declarative Syntax
    - Use array and object destructuring
    - Use the spread operator
    - Use the ternary operator
    - Use template literals

