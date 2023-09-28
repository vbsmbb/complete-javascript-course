# Mapty App: OOP, Geolocation, External LIbraries, and More

## How to Plan a Web Project

### Project Planning

1. Always start a new project with a planning phase
   - Without planning, there will be confusion and problems down the road
   - Plan the project to get a feeling for how it works
2. Most companies and developers start with creating user stories (step 1)
   - A description of the application's functionality from the user's perspective
   - The complete set of user stories describes the application's functionality
3. The user stories are used to develop the features (step 2) of the application
4. The features and user stories allow us to create an application flow (step 3) chart
5. The flowcharting leads to the application architecture (step 4)
   - How we will organize code
   - Which JS features will be used
   - This is what holds all of the code together
   - It gives us a structure which can be used to develop the application's functionality
6. Planning in this manner helps keep us from creating a mess with spaghetti code
7. The phase after planning is development
   - This is where code is built
   - The implementation of our plan using code

### Planning Phase

1. The description of the application's functionality from the user's perspective
2. All of the user stories together describe the whole picture of the application's functionality
3. A common format of the user story is complete sentences
   - As a [type of user], I want [an action] so that [a benefit]
   - This answers the questions
     - Who: type of user
     - What: an action
     - Why: a benefit
4. User Stories:
   - As a user, I want to log my running workouts with location, distance, time, pace, and steps/minute, so I can keep a log of all my running
   - As a user, I want to log my cycling workouts with location, distance, time, speed, and elevation gain, so I can keep a log of all my cycling
   - As a user, I want to see all myworkouts at a glance so I can easily track my progress over time
   - As a user, I want to see all of my workouts on a map so I can see where I workout the most
   - As a user I want to see all my workouts when I leave the app and come back later so that I can keep using the app over time
5. Create the application's features based on the user stories:
   - We need a map where the user can click to add a new workout (best way to get location coordinates)
   - Use the geolocation API to display the map at the current location of the user
   - Need a form to input distance, time, pace, and steps/minute
   - Need a form to input distance, time, speed, and elevation gain
   - Display all workpouts in a list
   - Display all workouts on a map
   - Store workout data in the browser using local storage API
   - On page load, read the saved data from the local storage and display
   - When user clicks on a workout in the list, move the map to the workout location
6. Create the flow chart from the features
   - In the real world, the flow chart will most likely change during the implementation
   - User stories and features may also be changed, added, or deleted during implementation
7. Finally create the architecture based on the information from the previous steps

## Using the Geolocation API

1. The Geolocation API is part of the navigator WebAPI
   - navigator.geolocation.getCurrentPosition(cf1, cf2)
   - The two parameters are both callback functions
   - The first callback function is used on success
   - The second callback function is used if the lookup fails
2. The position returned by the getCurrentPosition() method contains a coordinates object named coords
   - The coordinates object is named 'coords'
   - It contains a latitude property and a longitude property
   - Use object destructuring assignment to collect the latitude and longitude values

## Displayoing a Map Using the Leaflet Library

1. The Leaflet library can be used in several ways
   - Use it from where it is stored in a CDN
     - Create a link entry in the index.html file for the leaflet.css file
     - Create a script entry in the index.html file for the leaflet.js file
     - The script entry for teh CDN must be before script where it is used
   - Download it directly and story in the project directory
   - Download it using npm
2. The methods and variables are available from the Leaflet library using the namespace 'L'
   - L.map() draws a map
   - L.marker creates a title for the location on the map and displays the location passed to it
   - The 'L' is a global variable and will be available to any other scripts in the project which are loaded after it

## Displaying a Map Marker

1. Cannot use addEventListener() function because the map is in a library
   - We use an event listener from the library (on())
   - The .on() event listener is attached to the 'map' object
   - It requires at least two parameters
     - The action to listen for (click)
     - The function to execute when the action is executed
   - The map.on() event sets an event that can be accessed by the callback function
   - The event passed to the callback function contains the latitude and longitude of the click on the map
   - Use the latitude and longitude from the click event to set the marker
2. Then add the marker to the map
3. Then bind the popup
   - Set the popup options using the L.popup object
   - Options
     - maxWidth: 250
     - minWidth: 100
     - autoClose: false
     - closeOnClick: false
     - className: 'the CSS class to use'
4. Set the content of the popup
5. And finally Open the popup
6. The documentation for this library is very good (https://leafletjs.com/reference)

## Rendering Workout Input Form

1. Creating the marker on the map had to be changed
   - The market is only supposed to be added after the workout form is updated
   - The workput form has nothing to do wu=ith the map or teh geolocation so the set maker had to be removed from the location function
   - The marker addition had to come after the form is updated
2. The form is updated when the fields are entered and the form is submitted
   - There is not submit button so the submit occurs when the enter key is pressed
   - An event listener was added to the form
     - The action was 'submit'
     - The callback function contained the add marker code
3. There are two problems with the marker code in the form event listener
   - The map and mapEvent variables are not available to the form listener
   - To make them available
     - Create a global variable for map and map event
     - Remove the variable creation for map in the geolocation position function
     - Set the mapEvent in the map.on() function in the geolocation function
   - Now the marker function should work in the form listener
4. When changing event types, the last element in the form has to change
   - Running should have distance, duration. and cadence fields
   - Cycling Shoudl have distance duration, and Elevation fields
   - Therefore, form\_\_row--hidden CSS class has to be toggled when the input type is changed
5. To toggle the CSS hidden class, add an event listener on the input type
   - Create and event listener on the input type field
   - When the type is changed toggle the CSS hidden class for the evevation and cadence classes
   - By default the cadence filed is used with the Running type
   - Therefore, the Cadence field is used with the cycling type

## Project Architecture

1. OOP using classes will be the main architecture for this project
2. Where and how to store the data is one of the most important responsibilities of the application
3. The data for this application changes for Running and Cycling activities
   - Both activities have distance duration and coordinates
   - However, Running has a cadence and pace
   - While cycling has an elevation gain and speed
4. Therefore, the class named WOrkout will contain the common coordinates
   - The activities will each be a child class to the WOrkout class
   - Child class Running
   - Child class Cycling
5. The App class will be the heart of the application
   - Properties
     - workouts (array)
     - map (leaflet map object)
   - Methods
     - constructor
     - getPosition
     - loadMap
     - showForm
     - toggleElevationFields (change input per action)
     - newWorkout

## Refactoring fro Project Architecture

1. Using event listeners inside a class can cause issues
2. To fix the issues of the 'this' keyword
   - Bind the this variable to a class method called in an event listener
   - Bind the this variable when class methods are called by third party library methods

## Managing Workout Data

1. Will create the workout class to manage this data
2. Every object should have a unique identifier
   - Use a third-part library to create IDs
   - Never create IDs on your own
     - They may be too weak
     - If so, they are easily hacked
3.
