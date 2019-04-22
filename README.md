# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif 'Example of working project')

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

    DOM stands for Document Object Model. It is the language-agnostic, object version of 
    the page stored in memory at the time the page is loaded.

2. What is an event?

    Common examples are the actions that take place when a user interacts with an 
    element in the DOM via a keyboard press, a mouse click, a window resize, scrolling, 
    etc.

    Events are also objects which can be captured and utilized by event-listeners. An 
    event listener can gain access to the particular `event` object and its properties 
    fired from its associated DOM element.

3. What is an event listener?

    An event listener is method on the EventTarget object that “listens” for the event
    dispatched by the EventTarget object. The EventTarget can be many things, but in this 
    sprint we mainly focused on `window`, `document` or specifically targeted DOM 
    element.

    `target.addEventListener(‘event’, callbackFunction)`

    The `addEventListener` methods accepts two parameters, the event type and a callback 
    function which contains the code or procedure that should be executed in response to 
    the event.

4. Why would we convert a NodeList into an Array?

    Converting a NodeList to an array allows us to call Array methods not associated with
    the NodeList object. Since a NodeList is an array-like object, we only have access to
    two array-like properties, the index of the NodeList and the method `forEach`.

    Should we want to access or modify the NodeList in ways we can only do with Arrays, it 
    would first have to be converted.

5. What is a component?

    A component is an API that allows you to define, use and reuse custom elements and their
    behavior within a webpage. The utility of the component framework is to abstract away
    complex UI functionality into DRY, reusable code.

    Components can be encapsulated within an ES6 `class` structure representing a DOM 
    node or series of classes representing groups of DOM nodes associated by
    functionality.

    This class structure allows us to store references to targeted DOM nodes as 
    class properties and define their functionality within methods which are called
    in response to bounded event listeners.

    Having a central API that defines all instances of this DOM element allows developers
    replicate functionality throughout webpage and even across several web pages.

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

* [ ] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item.  **Note: You will need to un-comment the code after the lines of instructions.  The code is commented out so you can work error-free**

* [ ] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, play around with the styling on all the components, and understand how each is built.
