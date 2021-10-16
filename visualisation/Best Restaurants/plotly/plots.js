// Initialised arrays
let rank = []
let restaurants = []
let locations = []
let ratings = []
let reviews = []

// For loop to populate arrays

for (let i in  RestaurantsResults) {
  row =  RestaurantsResults[i];
  rank.push(row.rank);
  restaurants.push(row.restaurants);
  locations.push(row.location);
  ratings.push(row.ratings);
  reviews.push(row.reviews);
}

// Trace 1 for the Reviews Data
let trace1 = {
  x: restaurants,
  y: reviews,
  text: restaurants,
  name: "Reviews",
  type: "bar"
};

// Trace 2 for the Ratings Data
let trace2 = {
  x: restaurants,
  y: ratings,
  text: restaurants,
  name: "Ratings",
  type: "bar"
};

// Define data variable
let data = [trace1, trace2];

// Define the layout with a title and y-axis label
let layout = {
  title: "Restaurants Reviews And Ratings",
  yaxis: {
    title: "reviews and ratings"
  }
};


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

