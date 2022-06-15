<p align="center">
<img width="400px" src="https://user-images.githubusercontent.com/64798006/173778984-1d0092dc-f8af-4e9f-bd8d-5e34fbd7334d.png" />
  </p>


# Eventbrite technical test
#### url to visualise the project: https://sararunda.github.io/eventbrite-events/ 
### Previous steps:
- Install the local dependencies by running the following command in the terminal:
**npm install**
- Start the project with the command:
**npm start**
## A website will be developed with the following characteristics:
Language: English.

Using HTML, Sass, Javascript, React.

Use of mediaqueries for the adaptation of the application to the different devices, mobile, tablet and desktop.

Use of routes for web browsing

Using git for project version control. 

Publication of the result on the Internet using GitHub Pages.
## Requirements and functions:
_A web platform to show events in San Francisco and save the information of these events in a database._
#### First condition:
Create an EB account and then create 3 events in Madrid and 3 in San Francisco with different start and end dates.
#### Specific tasks:
- [x]  Use Eventbrite API: https://www.eventbrite.com/platform/api
- [x]  Create a Landing Page with a list of the events you created in the pre-condition.
- [x]  There will be at least two filters on the top: online events and physical events.
- [x]  Create an Event page with image, event description, title, date and tickets button.
- [ ]  Create a tickets page with name, price, description, show free and paid ticket and status (available or sold out).
- [ ]  Create datebase and save all the information there (create all the tables and fields).
#### How did I make the specific ones marked? 🚀
- To use the API it was necessary to create a token, as stated in Eventbrite's documentation https://www.eventbrite.com/platform/api#/introduction/about-our-api and then use the api created with my token and with the necessary expansions that I am going to use as properties, for example, for the address of events.
- the url for the fetch request would be: https://www.eventbriteapi.com/v3/organizations/1010195270413/events/?{MYTOKEN}expand=venue 
- I created an Eventbrite account to generate 6 events, 3 for San Francisco and 3 for Madrid, with different dates, different prices and different types of events (physical or online) I then published them in private viewing.
- Diagrams with components:

![components](https://user-images.githubusercontent.com/64798006/173798064-ff094b00-3e0e-4dfd-8f2d-5ae70bbe9448.PNG)


The diagram shows that the application is divided into 5 components. All components share data with each other, with App being the root of all of them. First of all, the **"filter" component** has been created, in which I have chosen to make it with a _"form"_ and a _"filter"_ of type _"select"_ in which you can choose to show the online, physical and all of them.

![filter](https://user-images.githubusercontent.com/64798006/173808334-f5865ddc-52f2-4b4a-a05b-1b5b5dbe5c5d.PNG)

The events are displayed in the **"EventList" component** created to paint the lists, so a _"filter"_ and a _"map"_ are necessary to render them. The main part of this component is the list of all events.

![events](https://user-images.githubusercontent.com/64798006/173808947-09e0e0cf-bdd0-4e26-971f-34bc5cb40b59.PNG)


The content of "li" is created in a separate component called "EventItem" where the properties of the events object are passed by "props". Here it is interesting to note that a date format change has been used based on the documentation https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date

The "info" button is created to redirect to a separate component called "EventDetail". When you click on "info" the url address changes with the "id" of the selected card, this is done through Routes. In this event we want to show some information used in the "EventItem" but incorporating new information coming from the API. How does our application know that it has to link the generated url with the id and show the card data?
To do this, it is necessary to perform a "find" of the events to establish a comparison between our id of each event and the id generated in "dataPath". This way, we get back an object that we can pass to the "EventDetail" component and use it to paint the new data by "props".
It is advantageous to use the paths in this part because it allows us to get a specific page of the event we are selecting and we could, for example, share this page without doing the same "click path".


Documentation for the routes: https://reactrouter.com/docs/en/v6/getting-started/tutorial 





