
# Traveler's Insider!

# Table of Contents
- [Description](#Description)
- [Instructions](#Instructions)
- [Illustration](#Illustration)
- [Framework HTML/CSS/JS](#Framework)
- [Quick GoThrough](#Gothrough)
- [Credits](#Credits)

## Description
This site allows you to explore and find current events and diffrenet native cuisines in cities you are interested in traveling to.
AS A traveler,
You're able to find new events and restaurants in a city that you're going to,
SO THAT you can experience new things!

## Instructions
* Searche Restaurants:
  * Enter a city fro location, select an establishment and a cuisine to search for restaurants around.
  * City is required to be entered, other options could be bypassed
  * You'll be presented with details of the specific restaurant...

* Search Events
  * Enter a city to get events that's going to happen and also details and options available

## Framework
* HTML- Data & CSS - (build with Bulma and own CSS style)
* JS - code:
    * Jquerry$ and WEB API (Transversing the DOM...)
        ```
        .querySelector
        .setAttribute
        .append()
        $(document).on("click")
        $("#").addClass()
        ...
        ```
    * Server WEB Api's
         ```
          Main call for api data
         fetch(requestRestaurantsUrl, {
          headers: requestHeader
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
              function()...
          });
        ...
        ```
    * for loops:
        ```
        ...
        for (var i = 0; i < data.length; i++) {
            $("<section>").addClass().text()
            .append(.clone())          
        }
        ```
    * if/else statements:

## Gothrough

* When search button is clicked 
* fetch data call is activated to get data form API's
* Then sections with restaurants/events around is presented
* If there's no details selected and click button happens
* the user will still get restaurants around the city and inforomed with a message
* Searched cities are saved in the aside bar

## Illustration
![illustration](assets/images/illustration.gif)

## Credits
* List of the resources used to complete this project:
    * - [Bulma](https://bulma.io/documentation/overview/start/)
    * - [StackOverFlow](https://stackoverflow.com/)
    * - [W3Schools](https://www.w3schools.com/) 
    * - [Zomato developers](https://developers.zomato.com/api)
    * - [TickeMaster developer](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

## APIs
* - [Zomato developers](https://developers.zomato.com/api)
* - [TickeMaster developer](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

## Contributing

* Victor Codrean
  * [Email](CodreanVictor@gmail.com)
  * [GitHub](https://github.com/VictorCodrean)
* Ingrid Lyublinsky
  * [Email]()
  * [GitHub]()
* Matache Marius
  * [Email]()
  * [GitHub]()
* Parm Singh
  * [Email]()
  * [GitHub]()
* Mason Beckler
  * [Email]()
  * [GitHub]()

## Directory
* [Deployed Website](https://ilyublinsky.github.io/group-project/index.html)
* [GitHub Source](https://github.com/ilyublinsky/group-project)
