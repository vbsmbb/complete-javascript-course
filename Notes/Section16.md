# Asynchronous JavaScript: Promises, Async/Await, and AJAX

## Asynchronous JavaScript, AJAX, and APIs

1. When an image is loaded from within JavaScript, the actual image load is done in the background. Therefore, the script can continue running without waiting on the image load. You can then set an event listener to know when the image is loaded and do any other processing that you may need done to it before displaying on the page.
2. Asynchronous code is executed after a task that runs in the background completes.
   - Asynchronous code is non-blocking.
   - Script execution does not wait for asynchronous code to finish it's task.
   - Callback functions alone do not make code asynchronous.
   - The asynchronous code is deferred to action until after the background task completes.
   - Event listeners alone do not make code asynchronous.
     - The event listener is not doing anything in the background
     - It is simply waiting until an event occurs
     - Ergo, the event listener code, by itself, is not asynchronous.
   - AJAX calls may be the most important use case for asynchronous calls in JavaScript.
3. AJAX - Asynchronous JavaScript and XML
   - Allows communication with remote web servers in an asynchronous fashion.
   - It allows us to dynamically request data from remote web servers
   - This allows us to not have to reload the page to receive the data.
   - Code running in a browser is a client in the AJAX call to the remote server
     - An HTTP request is made to the server that has data that is needed in the client applicatrion
     - The response from the remote server will contain the data that was requested.
     - This client/server communication is done in the background on the client application
     - Therefore, this communication is asynchronous
   - The remote server that has the data is a web site with a web API application
4. API - Application Programming Interface
   - An API is a software program that can communicate with other software programs to share data
   - Basically, this allows applications to talk to each other.
   - Two API examples [ These two APIs have been used in this course, already]:
     - The DOM API
     - The Geolocation API
   - An online API is an application executing on a server
     - It receives requests for data
     - Then it returns data in it's response
     - You can build your own API using NodeJS or you can use APIs created by third parties
     - There are APIs for almost any type data you want, and below a few sre listed
       - Weather data
       - Flight Information
       - Countries data
       - Currency conversion
       - APIs to send email or SMS messages
       - Google Maps
     - Data formats of API data
       - When AJAX was created, the data format of choice was XML
       - However, now data are transferred mostly using the JSON data format
       - JSON data are JavaScript objects which have been converted to a string.
       - This format is very easy to send across the web, and is very easy to use once the data has arrived back into the client's application.

## API Url Change

1. Was: https://restcountries.eu/rest/v2/
2. Is now: https://restcountries.com/v2/name/
   - Add the name of the country at the end of the url to collect that country's data
   - The data will be returnwed in a JSON object
   - Parse the JSON object to a JavaScript object to work with the data

## Our First AJAX Call: XMLHttpRequest

## How the Web Works: Requests and Responses

1. To request and receive data from an API, you use the same method as the request for an entire web page
   - This is called the request-response model on the web
   - More generally it is called client-server architecture
2. The client request is made up of:
   - The protocol [HTTP or HTTPS]
   - The domain name [restcountries.com]
   - The resource [v2/name]
   - All of these parts are separated by forward slashes[/] at minimum
   - The protocol is followed by a colon and a double forward slash [http://]
     - A protocol is a system of communication rules to allow two parties to communicate
     - Without a standard protocol, you would not have the complete access that we have to the internet today
   - The full request URL: [https://restcountries.com/v2/name/]
     - The HTTPS protocol is encrypted so that no one else can see your data
     - The HTTP protocol transmits your data in clear text fashion
     - Anyone on the internet can find and read HTTP data
3. The domain name is not the real server address
   - The real internet address is a quartet of four numerical digits each of which are between 0 and 9
   - This address is collected from a DNS server
   - A DNS server is like a phone book for the internet
   - A request is made to the DNS server for the address connected to the given domain name
   - The the real internet address is used to connect to the real server and establish a TCP/IP socket connection to the remote server
     - The port address for HTTP is 80
     - The port address for HTTPS is 443
     - The port number is added to the real internet address with a colon followed by the port address
     - The TCP/IP protocol is the basic protocol that controls connections on the internet
       - TCP: Transmission Control Protocol
       - IP: Internet Protocol
     - The HTTP request is sent over the TCP/IP connection
4. The HTTP request consists of:
   - The start line
     - The request method: Get, PUT, POST, PATCH [Four most used methods]
     - The target [v2/name/COUNTRY-NAME]
     - The HTTP version [commonly HTTP 1.1]
   - and is followed by the request header:
     - Host [domain name]
     - User-Agent [browser name]
     - Accept-Language [en-US or other]
     - The are many other parts of the header that may or may not be sent
     - And then the <Body>:
       - The body of the message, only if we are sending data to the server
       - If we are collecting data, the body is empty
5. The HTTP Response message is similar to the Request message:
   - Contains a start line, headers, and a body
   - Start line contains:
     - The HTTP version
     - A status code
       - 200 is a page found status code
       - 40$ is a page not found status code
       - There are codes from 100 - 500
     - A message
       - Message is "OK" for Status code 200
       - Message is "Page Not Found" for status code 404
       - Standard messages for other status codes
   - Header contains:
     - Information about the response itself [AKA response meta-data]
     - Can be things like
       - Date: The date of teh response
       - Content-type: [text/html or text/JSON or text/XML]
       - Transfer encoding:
         - How the data is returned
         - Large data sets may be sent in chunks to fit the TCP/IP buffer size
       - The are also many other headers
       - You could also add custome meta-data from the API
   - Body contains
     - The information requested in the Request packet if found
     - The data is most likely in JSON format
     - Even AJAX data is returned in JSON format these days
   - An API request will contain one request and one response
   - A web page request can contain many request/response communications
     - The first request gets the HTML of the web page returned
     - Then the browser makes requests for other data required to build the web page
       - CSS files
       - JavaScript files
       - Image files
     - The web page could consists of multiple files
       - In this case a req/resp is made for each file that is part of the web page
       - Then the other elements required for each web page
       - This could cause the website to appear slow

## Welcome to Callback Hell

1. This occurs when you have callbacks inside of callbacks inside of callbacks to execute asynchronous tasks in sequence:
   - This occurs because callback 2 cannot be executed until callback1 has completed
   - And callback3 cannot be executed until callback2 has completed
   - And so forth
   - This occurs for all asynchronous calls handled by callbacks; not just AJAX calls.
2. Consequences of callback hell
   - Makes code looks messy
   - Makes code difficult to maintain
   - Makes code hard to understand and difficult to reason through
   - Code that is hard to understand and difficult to reason through
     - Will have more bugs than code that is simpler and more straight forward
     - This type of code is basically bad code!

## Promises and the Fetch API

1. The four lines of code required to make a request to an API using the AJAX method has been replacedwith the Fetch API.
   - The Fetch API is part of modern day JavaScript via the browser
   - A get request only requires the URL as the onlyparameter to the Fecth API
   - The Fetch API returns a promise
2. What are promises?
   - A promise is an object which is used as a placeholder for the future result of an asynchronous operation
   - It can also be referred to as a container for an asynchronously delivered value
   - And simpler yet, a promise is a container for a future value
3. Advantages of Promises
   - We no longer need to rely on events and callbacks passed into our asynchronous functions to handle asynchronous results
   - Instead of nesting callbacks, we can chain a sequence of asynchronous operations escaping callback hell!
   - Promises are an ES6 feature and became available to JavaScript in 2015.
4. Promises work with asynchronous operations
   - The promises are time sensitive and they change over time
   - Multiple promises in a chain can be in difefrent states at any one point in time
   - The life cycle of a promise
     - Before the future value is available the promise is "pending".
     - When the asynchronous task is complete, the promise is "settled".
   - Two types of "settled" promises
     - Fulfilled - successfully resulted in a value as expected
     - Rejected - An error occurred during the asynchronous task and no value was returned
   - A promise is only settled once
     - The state never changes
     - If Fulfilled, it stays fulfilled
     - If Rejected, it stays rejected
5. Using a result of a promise is described as consuming the promise
   - Before a promise can be consumed, it must be built
   - In the example of the Fetch API, the Fetch API builds the promise
   - This shows that you can consume promises without directly building them
   - In this case, another object actually builds the promise (the Fetch API) and our code just consumes the promise.

## Consuming Promises

1. The Fetch API
   - The fetch API immediately returns a promise as soon as the function is executed
   - The data is not available, but the promise of data to come is what is returned
   - The "then()" method can be called on all promises
     - The "then()" method contains the code to be executed after the promise is fulfilled
     - The code to be executed is a callback function
     - The callback function in the "then()" method receives one parameter: the result of the promise function
     - This parameter can be thought of as the response of the request which was made in the promise function
   - The json() method is available on all response objects coming from the Fetch API
     - The json() method is also an asynchronous function and it will also return a promise
     - To collect the data, the json() method will return data to another then() which can use the data
2. The promise function does not get rid of callback functions
   - However, it does eliminate callback hell
   - The elimination is done through function chaining
   - Through the use of the promise based Fetch API
     - The data collection from the API is much more straight forward
     - The code is also much more readable and understandable

## Chaining Promises

1. We will chain promises together to render the neighboring like we did with the AJAx code before
2. Promises are a powerful solution to handle asynchronous code
   - Promises turn callback hell into a flat chain of promises
   - The resulting code is much easier to read and to follow

## Handling Rejected Promises

1. Errors can be handled immediately and separately byadding an error handler along with the response handler in the promise function itrself
2. However, errors can also be handled by adding a catch() method at the end of the promise chain
   - Using this method actually creates less code
   - It also looks cleaner
   - Only one method is used to catch any error that occurs during the processing of the promise methods
3. Errors propogate down the chain until they are caught
4. The finally() method will execute every time whether a promise was fulfilled or rejected
   - This method will always ecxecute
   - This is a good place for code which can be used to return to a normal state after the promise
   - In the example we moved the opacity flag ther so it was just in one place instead of two

## Throwing Errors Manually

## Asynchronous Behind the Scenes: The Event Loop

1. The JavaScript engine has only a single thread of execution
   - No multi-tasking occurs in JavaScript
   - The Event Loop is used to execute callback functions
2. Image loads
   - Iamages are loaded in the background when loaded with javascript
   - Use an event listener to know when the image is loaded and execute any required processig
3. Most of the asynchronous APIs are in the Web APIs section of the browser
   - Therefore, the JavaScript asynchronous code actually executes in the Web APIs
   - If asynchronous code executed in the JavaScript callstack, it would block other code from running
   - Even the images loaded via JavaScript load asynchronously via the WEB APIs
   - By doing this the rest of the code on the callstack can execute while the image is being loaded
4. Once the asynhronous code in the WEB API has completed:
   - The callback for this event is put into the callbackqueue to be executed
   - The callback queue is an ordered list of functions to be executde on the JavaScript stack
   - The functions are ordered by the time entered in the queue
5. Dumb events, like clicks, also use the callback queue
   - There could be dumb events in the callback queue in front of an asynchronous event
   - If so, the dumb events will be executed before the asynchronous events
6. The event Loop
   - The event loopchecks the callback cue to see if any callbacks are ready for the callstack
   - Whenever a callback is moved from the queue to the callstack, an event loop tick occurred
   - It coordinates moving the code between the callback queue and the callstack
   - The event loop orchestrates the entire JavaScript runtime
7. The JavaScript language itself has no sense of time
   - Everything that is asynchronous in JavaScript does not happen in the JavaScript engine
   - The runtime manages all of the asynchronous behavior
   - The Event Loop manages the callback queue
   - The JavaScript engine simply executes whatever code it is given
8. The Fetch API uses promises
   - The promise code works sightly different than the asynchronous code
   - The fetch running in the runtime is finally complete
   - The callbacks registered with promise (called microtasks) do not go into the callback queue
   - The promise callbacks go into a microtasks queue
   - The microtasks queue has priority over the callback queue
   - Once a callback queue tick has occurred, the event loop checks the microtasks queue
   - Any and all tasks in the microtasks queue will be executed before the callback queue is checked again
   - It is possible for the microtasks queue to starve the callback queue

## The event Loop in Practice

1. JavaScript timers are not precise
   - There code contains callback functions
   - Callback functions are called after microtasks(Promise callbacks)
   - Therefore, long microtasks could cause callbacks to return later than their timer is set
2. JavaScript timers are not absoluteand cannot be used for high-precision timing

## Promisifying the Geolocation API

## COnsuming Promises with Async and Await

1. To make an asynchronous function using async just type 'async' before the function declaration
2. Inside the function use the 'await' keyword before asynchronous processes like the Fetch API
3. The Async/Await keywords make our code look like synchronous code, but it actually is running in the background
4. The Async/Await keywords are syntactic sugar for promises
   - It the async function still creates a promise
   - The promise is just consumed in a different way

## Error Handling with try...catch

1. You cannwrap any amount of code in a try..catch block
2. Any error in the code will stop execution and execute the ctach block
3. Besure to manually throw erorrs for any error the async/await will not catch [e.g. 403 errors]

## ReturningValues from Asynchronous Functions

## Other Promise Combinators: race, allSettled, any

1. Promise.race
   - It receives an array of promises
   - It returns a promise
   - It is settled as soon as one of the promises passed to it settles
   - It does not matter about the settled state (rejected or fulfilled)
   - The first settled promise wins the race
   - Promise.race and Promise.all are the two most used combinators for the Promise object
2. Promise.allSettled
   - It receives an array of promises
   - It returns an array of settled promises
     - The settled state does not matter
     - It may be resolved or it may be rejected
     - Either way it will be settled
   - This is a fairly new combinator from ES2020
   - By comparison, Promise.all SHort circuits on any Promise that was rejected
   - Promise.allSettled does not short circuit on any Promise rejection
3. Promise.any
   - A new combinator from ES2021
   - It returns the fulfilled value from the first Promise that is resolved
   - It returns reject, with an AggregateError, only if all of the Promises are rejected
