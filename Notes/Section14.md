# Object-Oriented Programming (OOP) with JavaScript

## What is Object-Oriented Programming

### All about OOP

1. Object-Oriented programming is a programming paradigm that is based on the consept of objects
   - Programming paradigm means the style of the program code
   - How we write and organize the code
2. We use objects to model (describe) real-world or abstract features
   - Real-world features
     - A user
     - A ToDo list or item
   - Abstract features
     - An HTML element
     - A data structure
3. Objects can contain data (properties) and code (methods)
   - Objects pack data and behavior into one package
   - This makes it easy to act on the data
4. In OOP, objects are self-contained pieces of code (like tiny applications)
   - Objects are building blocks of applications, and interact with each other
   - These interactions occur through a public interface (also called API)
     - Methods the code outside the object can access
     - Used to communicate with the object
5. OOP was developed with the goal of organizing code
   - To make the code more flexible
   - To make the code easier to maintain
   - It helps to avoid spaghetti code
   - It is the most used paradigm in large scale software engineering
6. Functional programming is a paradigm that has recently become popular
   - It also is a way to organize code
   - It also helps to avoid spaghetti code

### Classes and Instances (traditional OOP)

1. A class is a blue-print used to generate new objects
2. The class (blue-print) is jsut an abstract plan
3. They have to used to create an actual object
4. A class is a plan for how each new objet should work
5. JavaScript classes are different from classes in standard OOP languages
6. The model of creating objects from classes (blue-prints) is still useful in JavaScript eeven if implemented differently
7. A class is just a plan, it does not contain teh real-world data
8. An object created from a class will contain the real data
   - The real-world data is added when the object is created
   - This object created from the class is called an instance of the class
9. The class can be used to create as many of the object instances as needed by the application
   - Each object instance will contain different data
   - But each object instance will contain teh same functionality as the other instances

### The Four Fundamental OOP Principles

1. There is no single way to design classes (JavaScript or any other language), but there are four design principles
   - Abstratcion
   - Encapsulation
   - Inheritance
   - Polymorphism
2. Abstraction
   - Ignoring or hiding details that do not matter
   - Classes give us an overview of the object that we are creating
   - Abstraction is also used outside of OOP
     - Functions abstract the process from the functionality
     - A good example is the element.addEventListener() function
       - We know how to use it
       - The user most likely has no idea how the details happen inside the function
3. Encapsulation
   - Keeping properties and methods private incide the class
   - Private properties and methods are not available outside the class
   - Some methods are exposed to expose the object's interface
   - Interactions between objects occur through a public interface (API)
   - The term, object state, refers to the objects data
   - Making methods private allows the developer to make code changes without changing the public interface
4. Inheritance
   - When two classes are closely related, we can have one inherit from the other
   - In inheritance, you have a parent and one or more children
   - The child class inherits from the parent class and extends the parent class
   - This allows us to reuse common logic and model real-world relationships
5. Polymorphism
   - Allows a child class to overwrite a method it inherited from the parent class
   - Then the new method is used in the child class only
   - The method does not change in the parent class

## OOP in JavaScript

1. It is implemented somewhat differently than in other languages (C++, Go, Rust, etc)
2. OBject instances are instantiated from a class
   - The class is the blueprint
   - The object is the instance
3. JavaScript has prototypes
   - Objects are linked to a prototype object
   - Each object has a prototype
   - The prototype contains methods
   - The object linked to the prototype can access the prototype's methods
   - Therefore, the JavaScript prototype is a class
   - This is called prototypal inheritance
     - The prototype contains methods (behavior)
     - These methods are accessible to all objects linked to this prototype
4. JavaScript inheritance is different from OOP inheritance
   - In modern OOP, one class inherits from anopther
   - In JavaScript, the instance (object) inherits from the class
5. In JavaScript, objects delegate their behavior to the prototype
   - In classical OOP, the class methods are copied to the instance
   - In JavaScript, the instance (object) delegates behavior to the class (Prototype)
6. How is OOP implemented in JavaScript in practice?
   - There are three methods:
     - Constructor functions
     - ES6 Classes
     - Object.create()
   - Constructor functions
     - This is a technique to create objects from a function
     - This is how built-in objects like Arrays, Maps, and Sets are implemented
     - This sets the new objects prototype
     - This is how OOP has been done in JavaScript from the beginning
   - ES6 Classes
     - The ES6 release introduced classes into JavaScript
     - This is the modern alternative to the constructor function method
     - This is somehat "syntactic sugar". They work like constructor function behind the scenes
     - They do not behave like classes in classical OOP
     - They are a layer of abstraction over constructor functions
     - They still sue prototypal inheritance
   - Object.create() method
     - Actually the easiest method to link an object to a prototype object
     - However, it is less used than the other two methods

## Constructor Functions and the new Operator

1. Constructor functions are used to build an object
   - A constructor function is a function in every way
   - The main difference is that it is called with the 'new' operator
   - Constructor functions always start with a capital letter!
   - You cannot use an Arrow function as a contructor function
   - You can use a function declaration or a function expression
2. The 'new' operator is a very special operator
   - It creates a new empty object ({})
   - The function is called and the 'this' keyword is associated with the new empty object
   - The new empty object is linked to a prototype
   - The function automatically returns the empty object
   - Whatever we add to the object in the constructor function will be returned in the new object created
3. Any number of new objects can be created using the constructor function
   - Constructor functions have been used in JavaScript from the beginning
   - They are used to simulate classes in JavaScript
   - But constructor functions in JavaScript create object which are linked to a prototype
   - The objects cretaed by the constructor function are still instances of the constructor function
4. Never create a method inside a constructor function
   - It would be OK for one or two instances, but in cases where hundreds of objects are created it is inefficient
   - Each of the objects would include the method that was created in the constructor function
   - This uses up a lot of memory
   - It is much better to use prototypes and prototypal inheritance
5. Constructor functionas are not a JavaScript feature
   - They are simply a pattern that was created by a developer and became very popular
   - Most developers use this pattern at one time or another

## Prototypes

1. Each and every function in JavaScript has a property called 'prototype' (including Constructor functions)
2. Every object created by the constructor function gets access to the constructors methods and properties
3. When functions are created on the constructor functions prototype object
   - Only one copy of the function is created
   - But each instance (object) created by the constructor function has access to the functions created on the constructor function's prototype object
4. Propertiers can also be set on the prototype
   - The objects will have access to the properties on the prototype, but they are now owned properties
   - Owned properties are just the properties created by the constructor function
   - The owned properties show up in the object, but prototype properties only show up in the prototype
   - The instance (object) has access to the properties in the prototype, but they are not properties of the instance

## Prototypal Inheritance and the Prototype Chain

### How Prototypal Inheritance/Delegation Works

1. The constructor function has a prototype property
   - The prototype property is an object
   - It contains the constructor, any methods defined on the constructor prototype, and any properties defined on the constructor prototype
   - This prototype object is the prototype for all of the objects created by the constructor function
2. This process is the same for constructor functions and ES6 classes
3. The constructor function and its created object form a prototype chain
4. The prototype of the prototype in the constructor function is the prototype in the Object object (Object.prototype)
   - Therefore, any method or property in the Object.prototype is also available to the object created by the constructor function prototype
   - Object.prototype is usually at the top of the prototype chain
   - The **proto** property of Object.prototype is 'null'
   - Ergo, we are at the end of the prototype chain
5. The prototype chain is similar to the scope chain
   - Instead of looking for variables in parent scopes, it looks for methods and properties in the prototype chain
   - If a method does not exist in an object, the method will be searched in all of the parent prototype objects in the prototype chain until one is found or the end of the line has been found

## Prototypal inheritance on Built-in objects

1. The base object in JavaScript is Object()
   - This is the base for ALL objects in JavaSCript
   - Including any function and literally created objects
2. You can follow the prototype chain for any object back to the base obejct
3. Every HTML element is created as an object in the document tree
4. You can follow the prototype chain from the HTML element object right up the document tree
   - Type HTML ELEMENT
   - HTML ELement
   - Element
   - Node
   - EventTarget
   - Object()

## ES6 Classes

1. Classes in JavaScript do not work like classes in traditional OOP languages (Java, C++, C#)
2. Classes in JavaScript are syntactic sugar for the class creation with constructor functions
3. The JavaScript classes still implement prorotypal inheritance but do so using syntax like most OOP languages
4. Class can be defined in two different ways
   - Class expression (class Person {})
   - Class declaration (const Person = class {})
5. This looks like the same way that functions can be created because JavaScript classes ar a special type of JavaScript function
6. The first thing to be defined in a JavaScript class is the constructor method
   - The constructor method MUST be named constructor()
   - We pass in arguments for the properties the class will have
7. The methods that are created in the JavaScript class declaration
   - The methods will NOT be part of the class
   - The methods will be created on the class prototype object
8. The ES6 class definition just hides the true nature of prototypal inheritance in JavaScript
9. The ES6 class syntax was created to help other developers new to JavaScript coming from other OOP languages
10. ES6 Class Information
    - JavaScript classes are NOT hoisted
      - You must declare them
      - Then you can use them
      - THey are not like functions in that respect
    - Classes are first-class citizens (just like functions)
      - They can be passed to functions
      - They can be returned from functions
    - Classes are always executed in 'strict' mode even if not activated for whole script
11. Constructor functions are not old or deprecated functionality
    - It is a matter of personal preference to use constructor functions of ES6 class syntax
    - Classes do hide the true nature of JavaScript
    - Some people do not like the ES6 class syntax for this reason alone
12. It is OK to use ES6 classes as long as you understand the constructor function methodology and prototypal inheritance
13. One advantage of the ES6 class syntax is that it contains the methods and the properties all in one block eventhough it separates them behind the scenes

## Setters and Getters

1. Getters and Setters are a feature common to ALL JavaScript objects
2. These two properties are called 'accessor' properties while the other propertiesx are called 'data' properties
3. Getters and Setters are functions that retrieve and set a value
4. Getters are written as methods, but used as a property
5. Every setter must have at least one parameter
6. Setters are also used like properties, not methods
   - Do this: object.setter = XYZ
   - Not this: object.setter(XYZ)
7. Getters and setters in classes work the exact same way as they do for literal objects
8. Setting a property that already exists
   - If the property already exists it was set by the constructor
   - Therefore the setter will be activated when the property is set
   - This leads to an infinite loop
   - To break the infinite loop
     - In the setter, put an underscore before the existing property name
     - Create a getter that returns the property name preceded with the underscore
   - Handling the setter on an already existing property in this manner is a JS developer convention
   - This works but is somewhat confusing
   - The property name that is displayed is the property name with the underscore preceding it
   - However, this does stop the input of an incorrect property syntax
   - This is how you validate property input!

## Static Methods

1. Static methods are another feature of classes
2. Static methods are attached to teh array constructor
   - Static arrays cannot be called from the instance
   - They can ONLY be called as part of the class itself
   - An example is Array.from(document.querySelectorAll('h1'))
   - You cannot use the array method from any instance created by the array constructor or array literal
3. Static functions are created directly on the class itself
   - The static function is not created on the prototype
   - Since it is created as part of the Class, it can only be called by the class
   - Since it is NOT created in the class prototype, the class instances cannot access the static methods
4. Static methods are NOT inherited by their instances
5. To create a static method using the JavaScript class syntax, just add a method with a prefix of static
6. The static methods are use to create as helper functions

## Object.create

1. This is yet another way to create an object with prototypal inheritance
2. You can even pass the create method a prototype for the new object to be created
   - The prototype for the new object is an object
   - It can contain methods and properties
   - Use it like: const objInst = Object.create(protoObj)
3. In practice, this is the least used way of creating prototypal inheritance
4. Object.create is used to create inheritrance between classes
5. You can create a function in the prototype object that is passed to Object.create to create the properties for the object
   - It looks like the constructor method but it is not
   - The function can have any name and it still uses the 'this' keyword to set the new object properties
   - This is just another function created in teh prototype to create the object's properties

## Inheritance Between Classes: Constructor Functions

1. Inheritance between classes usually occurs between a child class which is a more specific version of a parent class
   - An example would be for a Student class to inherit the Person class
   - A Student is a person, but has more detail
2. The child class should use the constructor function from the Parent class using the call function
3. You need to inherit from the parent's prototype using the Object.create() method
   - Child.prototype = Object.create(Parent.prototype)
   - This gives the child class access to all of the Parent class methods
4. After the child class has been inherited, the child class' functions can be created
5. You need to set the child's constructor function correctly: Child.prototype.constructor = Child

## Inheritance Between Classes: ES6 Classes

1. The JavaScript class syntax is a layer of abstraction over the constructor function class syntax
2. The child class that is inheriting from the parent class does NOT need to have any new properties
   - It could have only the properties of the parent class and add new functions
   - Or it could just override one or more existing functions
   - If new properties are not added, you do not need a constructor in the child class
   - Just use the super function to create a new object

## Inheritance Between Classes: Object.create()

1. Object.create() methoddoes not use constructor functions or any class syntax
2. THis method just links prototype functions together and still creates a prototype chain
3. The child prototype inherits from the parent prototype by using Object.create()
   - ChildProto = Object.create(ParentProto)
   - Now any instance created with the ChildProto also inherits all methods and properties from the ParentProto
4. Methods added to the ChildProto can be new methods or can overwrite a method in the ParentProto
5. The ChildProto is not required to add any new properties
6. This method of creating OOP in JavaScript is very easy and only uses JavaScript built-in capabilities

## Another Class Example

1. Properties can be created in the constructor that were not passed to the constructor
   - A property can be created as an empty array
   - The empty array was not passed to the constructor, the new property was just created in the constructor
2. Any JavaScript expression or statement can be executed in the constructor
3. You could interact with the properties that were created in the constructor directly, but it is better to create methods to interact with the properties that may need to be updated regularly
4. Functions in a class may call other functions in the class
5. In every class there are methods and properties that should only be accessed by the class not the public
   - This is called Encapsulation
   - This is one of the fundamental properties of OOP

## Encapsulation: Protected Properties and Methods

1. Encapsulation is necessary:
   - To Prevent access of certain properties and methods to the Public
   - To allow changes to internal methods without causing issues with existing applications using the PUblic API
2. Private class fields and methods has not yet been implemented in JavaScript yet
   - To implement this functionality today we use a JavaScript convention
   - The convention is to add an underscore in front of the property name to suggest it should not be directly accessed
   - This does NOT make the property private, it is a convention to alert other developers that this is not part of the public interface
3. When the convention is used the methods and properties starting with an underbar are onlys used by the class
   - THese methods and properties are NOT to be part of the Public interface (API)
   - The are considered to be protected instead of truly private

## Encapsulation: Private Class Fields and Methods

1. Private Class Fields and Methods are not yet part of JavaScript
   - This is part of a larger proposal to improve JavaScript classes
   - Since this proposal is at stage 3, it is likely that it will be in JavaScript eventually
2. Some parts of this proposal already work in Google Chrome and some do not
3. Why is the proposal about fields and not properties?
   - In other OOP languages, CLasses have Fields and Methods
   - This new proposal will bring JavaScript closer to having true classes like Java and C++
4. In the new proposal there will be
   - Public Fields and Methods
   - Private Fields and Methods
5. A public field is a property that will be in all instances created by the class
   - They will be actual properties of the class
   - They will no longer be part of the prototype
6. To make a field private in the new proposal, prefix a # to the field name
   - The private fields will not longer be part of the prototype
   - Just like the Public fields they will be part of each instance created from the Class
7. Private Methods allow us to hide implementation details from the public
   - Private methods do not work in any browsers yet
   - WIll have to use the convention until this proposal reaches stage 4
8. There are static versions of the public and private fields and methods as well
   - Static methods work now
   - They can only be accessed bvy the class
   - The static method does not exist in the instance

## Chaining Methods

1. In order to make a method chainable, you just need to return the object itself at the end of the method we want to be chainable
2. This can be done on a class method by returning the 'this' keyword
3. This should only be done on methods that are changing class properties

## ES6 Classes Summary

1. When creating a child class, the 'extends' keyword automatically creates the prototype chain
2. Create the Public fields before the constructor
   - Just like while creating a JS object
   - Fields are on every created object (instance)
   - Fields are created on every instance and are not part of the prototype
   - The fields created by the constructor may change for every instance
   - Fields are usually properties that are common to all instances
3. Create the private fields just like the public fields
   - Put a has as the first character of the field name
   - These can only be used by the class, they cannot be used outside of the class
4. Create static public fields just like public and private fields
   - Put the static keyword before the name of the field
   - They can only be used by the class, the instances cannot access these fields
5. The constructor method is used to create a new instance of the class along with the 'new' keyword
   - Example: const instance = new Class(parm1, ..., parmN)
   - It is required in all classes except child classes
   - It could be omitted in a child class if no new parameters are required
6. The 'super' function is used in a child class to set the properties inherited from the parent class
   - The super() function must be called beofre the new parameters in the child class can be set
   - Calling the super() method sets the 'this' keyword for the child class
7. Private methods are also created by using the has character as the first character of the method name
   - Private methods are not yet working in JavaScript
   - They will be available within a new version of the ECMA script
   - Any other method in teh API is a public method and is available through the new instance
8. There is a current convention for making fields and methods private
   - Make the first character of the field or method name an underscore character
   - This will not make the field or method private, but will let other developers know that this is what the author intended
   - This convention is the onbly current way of making a method private
9. Static methods are created by writing the 'static' keyword before teh method name
   - Static methods are available in JavaScript now
   - They can only be accessed by the class, not by the instances
   - A good example of a static method is Object.create()
   - They are normally used as helper methods for the class
