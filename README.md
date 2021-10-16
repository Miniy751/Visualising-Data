# Bootcamp-project-3

# Project #3 - Visualising Data
​
![Title Image](https://treehousetechgroup.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-28-at-10.13.28-AM.png)
​
## Contents
* [Project Outline](#outline):
*    1. [Data Sources](#sources)
*    2. [Findings](#findings)
​
* [Project Report](#report):
*    1. [Web Scraping](#web-scraping)
*    2. [Transform](#transform)
​
* [Dependencies](#dependencies)
​
* [Visualisation]
*    1. [Flask application]
*    2. [Plotly]
*    3. [Leaflet]
​
* [Team - Roles](#team)
​
​
## Project Outline<a id="outline"></a>
​
### Restaurants are open again, so here’s a great place to start if you need ideas
​
From top tapas bars to fancy fine dining rooms, barnstorming bistros to great gastropubs, our project brings you the top 100 places to eat across the UK as voted for by an elite academy of chefs, restaurateurs and food writers nationwide.
​
​
### Data Sources<a id="sources"></a>
​
Hardens annual poll of diners surveys thousands of participants which, as curated by the editors, form the basis for the inclusions and ratings in the guide. 
We used one data source provided by their [website](https://www.leadingrestaurants.co.uk/data/full-lists/hardens/) 
​
The resulting data set contains 100 records, 
​
For the final data we used MongoDB, a Non-Relational database.
​
### Findings<a id="findings"></a>
The resulting csv was used for visualising data using a Python Flask- powered API, HTML/CSS, JavaScript. 
​
This project is a combination of web scraping, allowing visualisations created in Flask, Leaflet and Plotly.
​
![Title Image](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)
​
​
## Project Report:<a id="report"></a>
​
### Web Scraping<a id="web-scraping"></a>
​
We used BeautifulSoup for web scraping purposes to pull the data out of HTML files. It allowed us to create a parse tree from the page source code and extract data in a hierarchical and more readable manner.
​
​
### Transform<a id="transform"></a>
​
We have inspected the webpage and printed all the paragraphs contained in <div>.
Then, we created columns from the data scraped, found all div and created a list containing the following class names: ‘res_names’ , ‘res_location’ and ‘top_pos’. These were later renamed for readability.
​
​
We extracted the links containing the restaurants name and their respective postcode.
​
We extracted the addresses and the ratings, then we added them to the dataframe.
We have also extracted the latitude and longitude.
​
These coordinates will have helped us to determine the location on the map.
​
The resulting data was saved as a csv in the Resources folder.
​
​
## Dependencies<a id="Dependencies"></a>
​
Dependencies
-	Pandas
-	Beautiful Soup
-	Browser
-	ChromeDriverManager
-	Geocoder
-	numpy
​
​
## Team - Roles<a id="team"></a>
​
Although each person worked primarily on their allocated task, all steps were reviewed and completed as a team effort.
​
* [Monkagisi Mafavuke](https://github.com/chokison79)
    * Primary task: Visualising data using Plotly, HTML/CSS, JavaScript & Leaflet
    * Secondary task: Scrape, Transform & Load Process
​
* [Mini Yadav](https://github.com/Miniy751) 
    * Primary task: Scrape, Transform & Load Process, Finding Datasets
    * Secondary task: Project report
​
* [Maxwell Ansah](https://github.com/maximum-boop)
    * Primary task: Scrape, Transform & Load Process, Finding Datasets
    * Secondary task: Scrape, Transform & Load Process
    
* [Elena Dragmomir](https://github.com/elliedragomir)
    * Primary task: PowerPoint presentation, Project report, ReadMe
    * Secondary task: Scrape, Transform & Load Process
