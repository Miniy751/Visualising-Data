# Project #3 - Visulasing Data

![Title Image](https://treehousetechgroup.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-28-at-10.13.28-AM.png)

## Contents
* [Project Outline](#outline):
*    1. [Data Sources](#sources)
*    2. [Findings](#findings)

* [Project Report](#report):
*    1. [Extract](#extract)
*    2. [Transform](#transform)
        1. [Happiness Data](#happiness-data)
        2. [Alcohol Consumption Data](#alcohol-data)
*    3. [Load](#load)
* [Repository Structure](#repo)
* [How to Run / Main Working Files](#main)
* [Dependencies](#dependencies)
*   1. [Environment](#environment)
*   2. [Modules](#modules)
*   3. [Config password file](#config)
* [Software Used](#software)
* [Team - Roles](#team)




## Project Outline<a id="outline"></a>

### Restaurants are open again, so here’s a great place to start if you need ideas

From top tapas bars to fancy fine dining rooms, barnstorming bistros to great gastropubs, our project brings you the top 100 places to eat across the UK as voted for by an elite academy of chefs, restaurateurs and food writers nationwide.


### Data Sources<a id="sources"></a>

Hardens annual poll of diners surveys thousands of participants which, as curated by the editors, form the basis for the inclusions and ratings in the guide. 
We used one data source provided by their [website](https://www.leadingrestaurants.co.uk/data/full-lists/hardens/) 

The resulting data set contains 100 records, 

For the final data we used a Non-Relational database - MongoDB

### Findings<a id="findings"></a>
The resulting csv was used for visualising data using a Python Flask- powered API, HTML/CSS, JavaScript. 

This project is a combination of web scraping and Leaflet and Plotly.

![Title Image](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)


## Project Report:<a id="report"></a>

### Extract<a id="extract"></a>
The original Data Sources used are outlined above in the [Data Sources](#sources) section.

The files are contained in the Resources/Input directory.

Using [Jupyter Notebook](#notebook):

These CSV files were loaded into [Pandas](#pandas) Dataframes by using the pd.read_csv Pandas function using Jupyter Notebook.

![Extract](Images/extract.png)
