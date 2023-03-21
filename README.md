# Destination Unknown

### A flight price comparison site that gives you itinerary recommendations for your destination

<br>

# Technologies

<div align="center">
  <code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
  <code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
  <code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
  <code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
  <code><img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" /></code>
  <code><img height="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" /></code>
  <code><img height="50" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest" /></code>
  <code><img height="50" src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" alt="Cypress" title="Cypress" /></code>
</div>

# Project Overview

Prior to starting this project we were given a broad remit of creating a site that present the user with aggregated data to help them make an informed decision.

After scoping out the project as a team we collectively decided to build a web tool to help source and combine data on potential trip destinations.

There were other ideas that we also considered such as tools to provide information on the economy or food prices.

After scoping out several of the ideas at a high level, exploring the potential data we had access to and considering our tight time frame we opted to create our travel tool Destination Unknown travel.

Here's a quick gif of our finished project.

![](./readme_images/presentation.gif)

# Planning

Once we had chosen an idea we broke our planning down into successive stages:

## Technologies Research

This was a broad stroke research that involved looking at several APIs, any areas of data we thought offered good insights and technologies we would like to utilise to display them.

After this stage we settled on the technologies listed above as well as the [FlightLabs API](https://www.goflightlabs.com/) and the [RoadGoat API](https://www.roadgoat.com/business/cities-api).

The FlightLabs API allowed us to source data covering global flights.

The RoadGoat API returns data such as images, attractions and budget ratings for locations globally.

## Scoping out our MVP

Once we had decided on the technologies and data we wanted to use the next stage was to create a brief for our minimum viable product.

Initially we did this by writing out user stories and from there dividing them into our MVP Stories and our Stretch Stories.

After creating the user stories we used Excalidraw to create a wireframe to display the different features we wanted to build, displayed below.

## MVP Stories

```
As a user
I want to specify dates for my trip

As a user
I want to choose a location for my trip

As a user
I want to choose a departure and
arrival location for my trip

As a user
I want to see flight prices
```

## Stretch Stories

```
As a user
I want to set a price boundary

As a user
I want to give a preference for the types of events
I want to attend

As a user
I want to be able to save my search results

As a user
I want to be able to compare my trip to a second city

As a user
I want to view flight details - Price, dept time, arr time,
duration, class

As a user
I want to give a preference for cuisines

As a user
I want to be able to toggle between events, food,
landmarks

As a user
I want to view seasonal flight prices for my destination/s

As a user
I want to share my plans with my friends
```

![](./images/mvp.png)

## Sprint Planning

Now we had settled on a product we took each feature and broke it down into smaller constituent parts to create our first sprint. To track our sprint progress we created a trello board.

Key to our success on this project was breaking down each feature into small actionable problems to solve. This allowed us to merge frequently but with smaller merges, thus reducing conflicts.

# Features

- User can search based on departure and return date
- User can select from a range of departure destinations
- User can select from a range of arrival destinations
- User can add a second city to make a side by side comparison
- The top 3 cheapest flights are displayed
- The cheapest flights link through to the site so the user has direct access
- Image gallery based on the destination
- The destinations 'known fors’ are summarised by emojis
- Each location has a graphical budget rating
- Each location has a graphical safety rating
- Each location has a graphical covid rating
- Each graphical location component displays more info on hover
- The user can access accommodation via several third party providers
- The user can access local events via several third party providers

# To run locally

## APIs

This program uses the [FlightLabs API](https://www.goflightlabs.com/)
Generate your key online, and save to a file named 'apikey.js' stored in api/client. Export this file and name it 'apiKey' and add this file to your gitignore to protect you API key.

It also uses the [RoadGoat API](https://www.roadgoat.com/business/cities-api). To get a key you need to register with an email address and mobile number. Once you have done that save it to a file named 'apikey.js' stored in api/client. Export this file and name it 'roadapi' and add this file to your gitignore to protect you API key. Additionally, you will be provided with a secret key. Follow the same steps above but save in 'roadsecret'

1. Clone this repo locally
2. Open a terminal and navigate into the 'api' folder. Run `node app.js`
3. In a separate terminal, navigate into the 'frontend' folder. Run `npm start build`

It will then open in your browser at localhost:3000

# Test Coverage

## Backend Testing

By keeping the code as light as possible we were able to create a relatively small backend but one that returned a great amount of data.

Our tests covered both the Roadgoat API call and the FlightLabs API call. Testing for both a completed response as well as for cathcing errors.

The code coverage is ok at 89% but if we had more time it would be better to get this to 100% coverage.

To run the backend Jest tests, navigate to the 'api' folder and run:
`jest --coverage`

![backend_test](readme_images/backend_test_coverage.png)

## Frontend Testing

For our front end testing we used the Cypress framework.

All components were successfully unit tested before being introduced to the main branch.

One limitation we found was that we could not test the content that loaded onto our flight price chart component. We could test the heading of the chart and that it had rendered but the nature of the library meant we could not access the content of each individual bar. This is because it renders onto something called a 'canvas'.

To run the frontend Cypress testing suite, navigate into the 'frontend' folder and run:
`npm run cypress:open`

# Future Actions

- Create a landing page to better describe the product
- Address some CSS issues such as:
  - Toggle button location
  - Some small responsive layout and sizing issues
- Accessibility with regard to colours and text
- Implement a weather data feature
- Rather than linking to accommodation and events, list them on the page
- Use visual Cypress testing to check the flight price chart has rendered correctly.
