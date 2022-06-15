<p align="center">
<img width="400px" src="https://user-images.githubusercontent.com/64798006/173778984-1d0092dc-f8af-4e9f-bd8d-5e34fbd7334d.png" />
  </p>


# Eventbrite technical test
#### url to visualise the project: https://sararunda.github.io/eventbrite-events/ 
### Run the project:

```sh
$ npm install
$ npm start
```

## 1.Tech stack🛠️:
Language: English.

Using HTML, Sass, Javascript, React.

Use of mediaqueries for the adaptation of the application to the different devices, mobile, tablet and desktop.

Use of routes for web browsing

Using git for project version control. 

Publication of the result on the Internet using GitHub Pages.
## 2.Requirements and functions:
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
### How did I make the specific ones marked? 🚀
- To use the API it was necessary to create a token, as stated in Eventbrite's documentation https://www.eventbrite.com/platform/api#/introduction/about-our-api and then use the api created with my token and with the necessary expansions that I am going to use as properties, for example, for the address of events.
- the url for the fetch request would be: https://www.eventbriteapi.com/v3/organizations/1010195270413/events/?{MYTOKEN}expand=venue 
- I created an Eventbrite account to generate 6 events, 3 for San Francisco and 3 for Madrid, with different dates, different prices and different types of events (physical or online) I then published them in private viewing.
- Diagrams with components:

![components](https://user-images.githubusercontent.com/64798006/173798064-ff094b00-3e0e-4dfd-8f2d-5ae70bbe9448.PNG)


- The diagram shows that the application is divided into 5 components. All components share data with each other, with **"App"** being the root of all of them. First of all, the **"filter"** component has been created, in which I have chosen to make it with a _"form"_ and a _"filter"_ of type _"select"_ in which you can choose to show the online, physical and all of them.

- The events are displayed in the **"EventList"** component created to paint the lists, so a _"filter"_ and a _"map"_ are necessary to render them. The main part of this component is the list of all events.

- The content of "li" is created in a separate component called **"EventItem"** where the properties of the events object are passed by "props". Here it is interesting to note that a date format change has been used based on the documentation https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date

- The "info" button is created to redirect to a separate component called **"EventDetail"**. When you click on "info" the url address changes with the "id" of the selected card, this is done through Routes. In this event we want to show some information used in the "EventItem" but incorporating new information coming from the API. 

Documentation for the routes: https://reactrouter.com/docs/en/v6/getting-started/tutorial 

## 3.Layout and styles :art:


![maquetacion](https://user-images.githubusercontent.com/64798006/173825230-74cfc943-8d83-4d2a-aae9-7a29f3b07e43.PNG)

- Responsive design for mobile, tablet and desktop (Formatting changes from 600px onwards) using mediaqueries.
- SCSS and BEM format for styles.
- Grid for adapting lists to different formats.
- SCSS files divided according to each JS component.

## 4.Future considerations/improvements :bulb:
- Expand the url with the description and the price of the tickets to have access to the properties and to be able to paint them in the "EventDetail" component.
- Save the information searched in LocalStorage in the "EventDetail" component and in the App component set a condition when I get the "datapath" to ask if the clicked component is LocalSotrage.
- Create a database to save event information. I would create the data storage to store the data, for example, of the user (email, passwords, name, relation with the events) because the events themselves come from a private api. 
To create the database, I would start a new project to configure it from scratch and use it as a local server, these would be the steps to configure this new project:

  ``npm init`` (to generate json)
 
  ``npm install express``
 
  ``npm install cors``
  
 Create src folder with an index.js file, where the express and cors dependencies will be imported.
 
 Configure express with the code:
 
``server.use(cors());
server.use(express.json());``
``const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);``
  
  Once the server is configured, I would add the front-end project to this application.



#### :raising_hand: Author:

Sara Fernández






