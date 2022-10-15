# Advanced DOM and Events

## Project: Bankist Website

1. This modal function in the script is the same one we wrote previously
2. Updated the openModal function: prevented the deault behavior from occurring
3. Updated the for-loop to a forEach loop
4. This code is now updated to the latest JavaScript that we have covered

## How the DOM Really Works

1. The DOM is the interface between the JavaScript code and the browser
   - Allows JavaScript to interact with the browser
   - We can write JavaScript to:
     - Create, modify, and delete HTML elements
     - Set styles, classes, and attributes
     - Listen and respond to Events
   - DOM tree is generated from an HTML document which we can interact with
   - DOM is a very complex API and contains lots of methods and properties to interact with the DOM tree
2. Each object in the DOM tree is represented as a Node
   - Each node may be a differnt type of Node
     - child node
     - parent node
     - text node
     - clone node
   - The four different types of nodes are:
     - Element
     - Text
     - Comment
     - Document
   - Each element in the HTML document MUST be contained in the DOM tree
3. The Element node contains and HtmlElement child node
   - Each child node can be any of the HTML element types
     - Button
     - Image
     - Div
     - Etc.
   - Every HTML element will have access to the methods and properties it should have access to because of inheritance
   - The addEventListener() method can be used on any element and even on the document node itself
     - This listener is part of the EventTarget node
     - The EventTarget node is a parent of the DOM tree Node
     - Therefore, through inheritance every DOM tree node has access to this method

## Selecting, Creating, and Deleting elements

1. To select the entire document element use: **document.documentElement**
   - You can also select just the head with **document.head**
   - You can select just the body with **document.body**
2. You can use the document.querySelector to select any element
   - This selector returns one element
   - If there are multiple elements with the same name, it only returns the first one found in the documen
3. You can use document.querySelectorAll to get all elements of the given name or class
   - This method returns a NodeList
   - The node list does not change because it is part of the actual documentElement
4. Use document.getELementById to get an element whose id is 'id_name'
   - ID elements must be unique on a page (in a document)
   - Therefore, this method is supposed to only return one element
   - If there are multiple elements with teh same ID the document is flawed and will not work as expected
5. Use document.getElementsByTagName() to collect all of like elements in the document
   - This method returns an HTMLCollection
   - Also called a live collection
   - If the DOM changes then the elements in this collection could change too
6. Use document.getElementsByClassName('className') to collect all elements with the same class name
   - Returns a live HTML collection
   - Changes to elements in this collection will show in this collection
7. Use document.createElement('elementName') to create a DOM element
   - This does not put the element into the document
   - It only creates a dom element than can be inserted into the document
8. The prepend() and append() element methods can be ussed to insert ELements into the document or even to move them to another location
9. The before() and after() element methods will create sibling elements either before or after the given element
10. Use the remove() element method to remove an element from the document
    - The remove() element method is a recent addition to JavaScript
    - Prior to remove you had to use removeChild()
      - You had to select the parent element then remove the child from the parent
      - It may be confusing, but it Works
      - You may still see this in code because people may not be aware of the newer method
11. The insertAdjacentHTML() method is yet another way to insert HTML elements into a page
    - This was used in section 12 for the Bankist application
    - Takes two parameters:
      - First: where to put the new HTML code (afterBegin, afterEnd, beforeBegin, beforeEnd)
      - Second: the HTML code to insert at the proscribed location

## Styles, Attributes, and classes

1. When styles are created on an element using JavaScript, they are created as inline styles
   - Styles cannot be read from the element unless the element has one or more inline styles
   - Styles of any element can be collected using the getComputedStyle() method
2. The :root element in the CSS style sheet is the same as the document.documentElement in JavaScript
   - In this style sheet the :root{} element contains CSS variables with document colors
   - The variable values can be changed using JavaScript
   - document.documentElement.style.setProperty('variable-to-change', 'newValue')
   - The setProperty() method could be used to change the value of any property; not just CSS variables
3. The attributes of any element can be changed using JavaScript, too
   - When reading attributes, only the standard attributes are directly available
   - i.e. on img: the src and alt attributes are standard attributes for an img element
   - Non-standard attributes of elements can be collected using the getAttribute() method of the element
   - You can also set the standard attributes directly
   - You can set non-standard attributes using the setAttributes() method for the element
   - i.e. element.setAttribute('attributeName', 'attributeValue')
4. The 'src' attribute is returned as the absolute URL to the file when the attribute is collected directly
   - To get just the relative URL use the getAttribute() method of the element
   - This works the same way for the href attribute on links, too
5. Data attributes are attributes that actually start with the word, 'data'
   - data-version-number="3.0"
   - Data attributes are always stored in the 'dataset' object
   - element.dataset.nameAttr
   - If the name attribute uses dashes in the HTML, it is camelCase in JavaScript
6. Classes can be updated on an element by using the classList methods
   - add()
   - remove()
   - toggle()
   - contains()
   - DO NOT add a class directly to an element like: element.className = 'className'
     - This overrides all classes except this one
     - You cannot add multiple classes this way
     - Use the above classList methods to make class changes on elements

## Types of Events and Event Handlers

1. An event is a signal that is generated by some DOM node
   - The signal states that something has happened
   - Anything of importance that happens on the website triggers an event
   - An event happens whether or not a listener is listening for it
2. Mouse enter event
   - You can use the mouseeneter event in two ways
     - addEventListener
     - onmouseenter
   - onmouseeneter is the old school way
     - Can only handle a single event
     - If two events are created on the same element, the second overrides the fiorst
   - Use addEventListener today
     - Can Handle multiple events
     - Can remove an event handler
3. Remove an event listener
   - Use the method element.removeEventListener(event, namedFunction);
   - It can be used in the same event listener function so that the event is recorded only onxce
   - It can also be used in an interval or timeout function as well
   - It can be placed anywhere in the script not just in the event listener function
4. You can also create an event listener by using an HTML attribute
   - This should not be used
   - This is from the earliest days of JavaScript
   - The attribute would be like using the element.onEvent handler method

## Event Propogation: Bubbling and Capturing

1. There are three phases of an event
   - Capturing phase
   - Target phase
   - Bubbling Phase
2. As soon as an event is registered it is captured by the document
   - During the capture phase the event is passed down the document tree until it finds the target of the event
   - Then the target phase begings where the callback function is executed
   - After the target phase is complete, the event bubbles back up to the document where the event is now complete
3. If the same event is added to any of the parent elements of the target element, the event will activate twice
   - Once on the parent element
   - Once on the target element
4. This capturing and bubbling phase can create some powerful patterns
5. Events are normally only executed in the Target and Bubbling phases
6. However, events can be made to trigger in the Capturing Phase, too

## Event Propagation in Practice

1. The event actually executes during the Target and Bubbling phases
2. The event can be made to execute on the Capturing phase but that is really npot very useful
3. The Capturing phase execution is a hold over from when the different browsers had their own JavaScript versions

## Event Delegation: Implementing Page Navigation

1. By putting the event listener on each navigation link, we are adding multiple functions in the loop
2. Adding the event navigation function to the link container would make more sense
3. This way we write the event function once and it is not copied to all of the links, but is executed on the bubblie up of the event
4. This is much more efficient, especially as the number of links increases
5. To delegate an event
   - Add it to a parent element of all of the links
   - Determine the element that created the event
   - Then execute the event actions
6. Event delegation becomes very important for elements dynamically created by JavaScript

## Traversing the DOM

1. This is done when you walk up and down the DOM three
2. How to find children of an element
   - querySelector(All)
   - childNodes (Selects all nodes including text and comments)
   - children ( Only selects direct children)
3. How to find parents of an element
   - parentNode
   - parentElement
   - closest() (Works like querySelector)
4. How to find siblings
   - previousElementSibling
   - nextElementSibling
   - previousSibling (May not be an element)
   - nextSibling (May not be an element)
5. To find all siblings (including the ci=urrent)
   - Find the parent Node
   - Then select all of the children of the parent node

## Building a Tabbed Component

1. The component is built using HTML and CSS
2. The JavaScript just manipulates the classes that update the component
3. A well-built component will have classes that make portions of teh component active at any given timeout
4. So that we are not creating functions on multiple buttons, we use Event Delegation to make our component more efficient
5. The event listener was actually added to the tabs container and the e.target property was used to determine which element had been clicked
6. Then the active classes for teh tabs and teh content were removed from all buttons ab=nd then added back only for the element that was clicked
7. Removing classes from elements where the class does not exist is not an issue. This causes no problem.

## Passing Arguments to Event Handlers

1. You cound create an anonymous function that calls another function, but this is messy
2. A more efficient method is to use a bind method on the callback function with the parameter to be passed
3. This allows you to use the 'this' keyword in the function in place of a new parameter
4. If you need multiple parameters, then bind an array to the callback function
5. A true callback function can only ever have one true parameter and that is the event

## Implementing a Sticky Navigation: The Scroll Event

1. You can usee the window.scroll event to create a sticky navigation bar
   - It works
   - But it is VERY inefficient
   - The scroll event continuoulsy fires
2. To use the window.scroll event you add a listener to the window and then listen for the scroll event
   - The problem is that the scroll event is always firing
   - On older computers or cell phone, this would seem very slow
   - It is not an efficient event
3. The better way to implement this event is to use the Intersection Observer API

## A Better Way: The Intersection Observer API

1. This is a betetr way to implement the sticky navigation
2. The Intersection OBserver API is a Web Api and is available in most current browsers
3. To use this API you start by creating a new Intersection Observer
   - It requiresa minimum of two parameters
     - Parameter 1: the callback function
     - Parameters 2: the observer options
   - The callback function is executed once the parametrs set by the options are method
   - The options is an object and requires a minimum of two items
     - root
       - What object is the object to watch
       - When root is set to null the observable object is the viewport
     - threshold: How much of the observed object should be intersected to cause the callback function to fire
4. When the threshold is set with an array
   - The first value is when to exit the observable object
   - The next value is how much of the intersecting object should be avaialble to fire the callback function
5. A third item, rootMargin, for the options object can be very handy to use
   - The rootMargin gives you a margin before or after the intersection to execute the callback function
   - Sometimes you want the callback function to execute just a little before or a little after the intersection
   - The rootMargin does not use percentages, it uses actual values (pixels, characters, element margins, etc.)

## Revealing Elements on Scroll

1. This will also use the Intersection Observer API
2. Hide all of the sections until the first intersection
3. After the section is revealed, then unobserve it
4. Use the viewport as the intersecting area (root: null)

## Lazy Loading Images

1. Images have the biggest imapct on page loading
2. Imaging loading must be optimized on any page
3. The strategy of lazy loading images helps maintain page performance
4. This strategy also uses the Intersection Observwer API
5. To implement lazy loading images
   - Create smaller samples of the actual image
   - Blur the samples
   - Create a dataset src attribute(data-src) with the full size image path
   - Use Intersection Observer API to load the image when intersected
   - Unobserve the image after it has loaded

## Lifecycle DOM Events

1. There are a couple of events that always occur during a page's lifecycle
2. A pages lifecycle exists:
   - From the first moment a user access a page
   - Until the moment a user leaves the page
3. Event #1: DOM Content Loaded
   - This event is fired by the JS parser as soon as the HTML is completely loaded and parsed
   - Also, all scripts must be downlaoded and executed before this event will fire
4. This event does not wait for the following to load before firing:
   - Stylesheets
   - Images
   - Subframes
5. There is no need to listen for this event if the JavaScript is loaded at the bottom of the HTML body
   - The JavaScript scipt is the last thing loaded when the script tag is at the end of the HTML body
   - It can be loaded at other locations but requires more preprocessing
6. Event #2: Load
   - This event is fired after the entities like stylesheets, images, and subframes are loaded
   - This event fires after the COMPLETE page has loaded
7. Event #3: BeforeUnload
   - This event is less useful
   - It is very intrusive and should only be used if the user is going to loose data or has not completed filling out a form

## Efficient Script Loading: defer and async

1. The async and defer attributes can change the way that the scripts load in the script HTML tag
2. Sctipts cna be loaded in the document head or at the end of the document body
   - If script tag is in the head, it will delay the HTML parsing if the async or defer attributes are not used
   - This can have a huge impact on the page's performance and the script will be executed before the DOM is ready
   - Never include the script tag in the head without the async or defer attributes
3. Using the ASYNC attribute with teh script tag in the head is slightly better than using no attributes
   - The script is still loaded at the same time as teh HTMLis parsed, but the script is still executed before the end of the HTML parsing
   - This can still create issues and with teh script executing ebfore the end of the HTML parsing
   - The DOMContentLoaded fires after the hTML has been parsed, whether or not the script execution is complete
   - Use the ASYNC attribute for thrird-party libraries where the order of execution does not matter (i.e. GoogleAnalytics)
4. Using the DEFER attribute with script tab in the head
   - The script still loads asynchronously with the HTML parsing, but the execution of the script occurs after the HTML parsing is complete
   - This takes about the same time as with the ASYNC tag, but the script is loaded after the HTML has all been parsed
   - This method offers a slight time advantage over putting the script tag in at the end of the document body
   - The DOMContentLoaded fires after the script has executed
5. Adding the two script attributes with the script tag at the end of teh body makes no sense
   - When the script tag is at the end of the document body, it is not loaded until after all of the HTML has been parsed
   - Also, the script execution does not occur until after the script is loaded
6. If you put the script tag in the head,
   - It is essential that you use the DEFER attribute to make sure evrything works correctly except for third-party libraries
   - For third-party libraries, the order of execution does not matter
7. Only modern browsers support ASYNC and DEFER
   - Older browsers will probably ignore the attributes
   - You need to be aware of users browser capabilities (especially in Enterprise environments)
   - Put script tag at then end of the body if older browsers have to be supported
8. The ASYNC and DEFER attributes are not JavaScript features
   - THese attributes are HTML 5 features
   - Browsers that do not support HTML5 will not support these features
