// Create the map object with options.
var Restmap = L.map("map-id", {
  center: [ 52.489471, -1.898575],
  zoom: 12
});


// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(Restmap);

// Creating a new marker:
// We pass the coordinates, define the popup, and add the marker to the map by using the addTo() method.
L.marker([52.489471, -1.898575])
.bindPopup("Birmingham!")
.addTo(Restmap);

var restaurants = [{
  rank: 1,
  restaurants: "Fraiche",
  location: "Birkenhead",
  ratings: 4.8,
  reviews: 84,
  coordinates:[53.38200, -3.04308]
},
{
  rank: 2,
  restaurants: "The Five Fields",
  location: "London",
  ratings: 4.7,
  reviews: 266,
  coordinates:[51.4917193, -0.1612992]
},
  {
  rank: 3,
  restaurants: "Mana",
  location: "Manchester",
  ratings: 4.7,
  reviews: 192,
  coordinates:[53.4848285, -2.2279954]
},
{
  rank: 4,
  restaurants: "Restaurant Sat Bains",
  location: "Nottingham",
  ratings: 4.7,
  reviews: 455,
  coordinates:[52.92526, -1.16777]
},
{
  rank: 5,
  restaurants: "Moor Hall",
  location: "Ormskirk",
  ratings: 4.8,
  reviews: 460,
  coordinates:[53.5499659, -2.8990735]
},
{
  rank: 6,
  restaurants: "Hambleton Hall",
  location: "Oakham",
  ratings: 4.8,
  reviews: 349,
  coordinates:[52.6573713, -0.6682024]
},
{
  rank: 7,
  restaurants: "The Ledbury",
  location: "London",
  ratings: 4.7,
  reviews: 1325,
  coordinates:[51.5166794, -0.2000637]
},
{
  rank: 8,
  restaurants: "Kitchen Table",
  location: "London",
  ratings: 4.6,
  reviews: 110,
  coordinates:[51.5207557, -0.1370935]
},
{
  rank: 9,
  restaurants: "Core by Clare Smyth",
  location: "London",
  ratings: 4.8,
  reviews: 831,
  coordinates:[51.5127194, -0.2031072]
},
{
  rank: 10,
  restaurants: "Casamia",
  location: "Bristol",
  ratings: 4.8,
  reviews: 280,
  coordinates:[51.4472332, -2.5940292]
},
{
  rank: 11,
  restaurants: "Outlaw's New Road",
  location: "Port Isaac",
  ratings: 4.7,
  reviews: 269,
  coordinates:[50.5941778, -4.8287148]
},
{
  rank: 12,
  restaurants: "L'Enclume",
  location: "Cartmel",
  ratings: 4.8,
  reviews: 705,
  coordinates:[54.2018975, -2.9533433]
},
{
  rank: 13,
  restaurants: "Umu",
  location: "London",
  ratings: 4.3,
  reviews: 388,
  coordinates:[51.511358, -0.1443836]
},
{
  rank: 14,
  restaurants: "The Waterside Inn",
  location: "Bray",
  ratings: 4.8,
  reviews: 527,
  coordinates:[51.5086565, -0.699862]
},
{
  rank: 15,
  restaurants: "Belmond Le Manoir aux Quat' Saisons",
  location: "Oxford",
  ratings: 4.8,
  reviews: 1030,
  coordinates:[51.7167910, -1.0910564]
},
{
  rank: 16,
  restaurants: "Etch",
  location: "Hove",
  ratings: 4.8,
  reviews: 208,
  coordinates:[50.8284983, -0.177725]
},
{
  rank: 17,
  restaurants: "Maos",
  location: "London",
  ratings: 4.4,
  reviews: 56,
  coordinates:[51.5244892, -0.0752262]
},
{
  rank: 18,
  restaurants: "Endo at the Rotunda",
  location: "London",
  ratings: 4.8,
  reviews: 89,
  coordinates:[51.5104386, -0.2256502]
},
{
  rank: 19,
  restaurants: "Adam Reid at The French",
  location: "Manchester",
  ratings: 4.7,
  reviews: 218,
  coordinates:[53.4776963, -2.2447867]
},
{
  rank: 20,
  restaurants: "Lumiere",
  location: "Cheltenham",
  ratings: 4.9,
  reviews: 118,
  coordinates:[51.9007279, -2.0767203]
},
{
  rank: 21,
  restaurants: "The Araki",
  location: "London",
  ratings: 4.5,
  reviews: 206,
  coordinates:[51.5117878, -0.1402334]
},
{
  rank: 22,
  restaurants: "Texture [CLOSED]",
  location: "London",
  ratings: 4.5,
  reviews: 298,
  coordinates:[51.51497, -0.15616]
},
{
  rank: 23,
  restaurants: "Hakkasan Mayfair",
  location: "London",
  ratings: 4.4,
  reviews: 2700,
  coordinates:[51.5105247, -0.1446711]
},
{
  rank: 24,
  restaurants: "Winteringham Fields",
  location: "Winteringham",  
  ratings: 4.7,
  reviews: 216,
  coordinates:[53.6877774, -0.5894838]
},
{
  rank: 25,
  restaurants: "Orwells",
  location: "Henley-on-thames",  
  ratings: 4.7,
  reviews: 172,
  coordinates:[51.5008621, -0.9104676]
},
{
  rank: 26,
  restaurants: "Sushi Tetsu",
  location: "London",
  ratings: 4.8,
  reviews: 393,
  coordinates:[51.52328445, -0.1040442]
},
{
  rank: 27,
  restaurants: "Amaya",
  location: "London",  
  ratings: 4.3,
  reviews: 1027,
  coordinates:[51.4991891, -0.1569930]
},
{
  rank: 28,
  restaurants: "Restaurant Andrew Fairlie at Gleneagles",
  location: "Auchterarder",
  ratings: 4.8,
  reviews: 59,
  coordinates:[56.2834115, -3.7517463]
},
{
  rank: 29,
  restaurants: "Adam's",
  location: "Birmingham",  
  ratings: 4.8,
  reviews : 710,
  coordinates:[52.4797973, -1.9014144]
},
{
  rank: 30,
  restaurants: "The Little Fish Market",
  location: "Hove",  
  ratings: 4.8,
  reviews: 162,
  coordinates:[50.8248834, -0.1573958]
},
{
  rank: 31,
  restaurants: "Restaurant Martin Wishart",
  location: "Edinburgh",
  ratings: 4.7,
  reviews: 352,
  coordinates:[55.975436, -3.1704432]
},
{
  rank: 32,
  restaurants: "Roganic [CLOSED]",
  location: "London", 
  ratings: 4.5,
  reviews: 236,
  coordinates:[51.51842, -0.15169]
},
{
  rank: 33,
  restaurants: "Le Cochon Aveugle",
  location: "York",    
  ratings: 4.8,
  reviews: 140,
  coordinates:[53.9569208, -1.0763055]
},
{
  rank: 34,
  restaurants: "Gymkhana",
  location: "London", 
  ratings: 4.5,
  reviews: 1170,
  coordinates:[51.5084811, -0.1414863]
},
{
  rank: 35,
  restaurants: "Hipping Hall",
  location: "Kirkby Lonsdale",   
  ratings: 4.8,
  reviews: 153,
  coordinates:[54.1767763, -2.5474905]
},
{
  rank: 36,
  restaurants: "Dastaan",
  location: "Epsom",
  ratings: 4.7,
  reviews: 619,
  coordinates:[51.3689519, -0.2659405]
},
{
  rank: 37,
  restaurants: "House of Tides",
  location: "Newcastle Upon Tyne",  
  ratings: 4.7,
  reviews: 397,
  coordinates:[54.967953, -1.6102132]
},
{
  rank: 38,
  restaurants: "Sorrel",
  location: "Dorking",
  ratings: 4.9,
  reviews: 237,
  coordinates:[51.22868255, -0.3344390]
},
{
  rank: 39,
  restaurants: "Indian Accent [CLOSED]",
  location: "London",
  ratings: 4.4,
  reviews: 402,
  coordinates:[51.50947, -0.14156]
},
{
  rank: 40,
  restaurants: "Morston Hall",
  location: "Blakeney",  
  ratings: 4.9,
  reviews: 253,
  coordinates:[52.9550283, 0.9860007]
},
{
  rank: 41,
  restaurants: "The Peat Inn",
  location: "St Andrews", 
  ratings: 4.8,
  reviews: 282,
  coordinates:[56.2783576, -2.8841545]
},
{
  rank: 42,
  restaurants: "The Neptune Restaurant with Rooms",
  location: "Hunstanton",
  ratings: 4.8,
  reviews: 70,
  coordinates:[52.9509841, 0.5073734]
},
{
  rank: 43,
  restaurants: "Opheem",
  location: "Birmingham", 
  ratings: 4.6,
  reviews: 348,
  coordinates:[52.4815548, -1.9082238]
},
{
  rank: 44,
  restaurants: "The Artichoke",
  location: "Amersham", 
  ratings: 4.6,
  reviews: 205,
  coordinates:[51.6665527, -0.6163335]
},
{
  rank: 45,
  restaurants: "Sosban and The Old Butcher's",
  location: "Menai Bridge",
  ratings: 4.8,
  reviews: 58,
  coordinates:[53.2261352, -4.1628596]
},
{
  rank: 46,
  restaurants: "Le Gavroche",
  location: "London",
  ratings: 4.7,
  reviews: 819,
  coordinates:[51.5112595, -0.1552059]
},
{
  rank: 47,
  restaurants: "La Dame de Pic London",
  location: "London",  
  ratings: 4.6,
  reviews: 387,
  coordinates:[51.5103076, -0.0783230]
},
{
  rank: 48,
  restaurants: "Zuma",
  location: "London", 
  ratings: 4.6,
  reviews: 1687,
  coordinates:[51.5009278, -0.1631825]
},
{
  rank: 49,
  restaurants: "Fordwich Arms",
  location: "Canterbury",
  ratings: 4.5,
  reviews: 566,
  coordinates:[51.2951414, 1.1253071]
},
{
  rank: 50,
  restaurants: "Lympstone Manor",
  location: "Exmouth", 
  ratings: 4.6,
  reviews: 326,
  coordinates:[50.6418105, -3.4197468]
},
{
  rank: 51,
  restaurants: "Lake Road Kitchen",
  location: "Ambleside",  
  ratings: 4.7,
  reviews: 96,
  coordinates:[54.4304873, -2.9622948]
},
{
  rank: 52,
  restaurants: "Purnell's",
  location: "Birmingham",
  ratings: 4.7,
  reviews: 546,
  coordinates:[52.4826617, -1.9018277]
},
{
  rank: 53,
  restaurants: "Roski",
  location: "Liverpool",  
  ratings: 4.8,
  reviews: 244,
  coordinates:[53.4018472, -2.9732715]
},
{
  rank: 54,
  restaurants: "Paul Ainsworth at No. 6",
  location: "Padstow",  
  ratings: 4.8,
  reviews: 535,
  coordinates:[50.541273, -4.9398507]
},
{
  rank: 55,
  restaurants: "Raby Hunt",
  location: "Darlington",    
  ratings: 4.7,
  reviews: 122,
  coordinates:[54.567402, -1.6888651]
},
{
  rank: 56,
  restaurants: "The Whitebrook",
  location: "Monmouth",   
  ratings: 4.7,
  reviews: 175,
  coordinates:[51.7597507, -2.6866026]
},
{
  rank: 57,
  restaurants: "Bohemia",
  location: "Jersey",
  ratings: 4.4,
  reviews: 236,
  coordinates:[49.1813359, -2.1028661]
},
{
  rank: 58,
  restaurants: "Stark",
  location: "Broadstairs",
  ratings: 4.9,
  reviews: 66,
  coordinates:[51.3567402, 1.4406849]
},
{
  rank: 59,
  restaurants: "La Petite Maison",
  location: "London",  
  ratings: 4.6,
  reviews: 548,
  coordinates:[51.5126169, -0.1461126]
},
{
  rank: 60,
  restaurants: "21212",
  location: "Edinburgh",  
  ratings: 4.4,
  reviews: 285,
  coordinates:[55.9567618, -3.1807104]
},
{
  rank: 61,
  restaurants: "AW Restaurant at The Westbury Mayfair Hotel [CLOSED]",
  location: "London",    
  ratings: 4.6,
  reviews: 171,
  coordinates:[51.51155, -0.14229]
},
{
  rank: 62,
  restaurants: "Ikoyi",
  location: "London",  
  ratings: 4.5,
  reviews: 515,
  coordinates:[51.5092034, -0.1332106]
},
{
  rank: 63,
  restaurants: "Ynyshir",
  location: "Machynlleth",  
  ratings: 4.8,
  reviews: 132,
  coordinates:[52.5451784, -3.941751]
},
{
  rank: 64,
  restaurants: "Hunan",
  location: "London",
  ratings: 4.5,
  reviews: 346,
  coordinates:[51.49045925, -0.152804]
},
{
  rank: 65,
  restaurants: "A. Wong",
  location: "London",  
  ratings: 4.4,
  reviews: 818,
  coordinates:[51.4929978, -0.1405397]
},
{
  rank: 66,
  restaurants: "Roka Charlotte Street",
  location: "London",
  ratings: 4.4,
  reviews: 1938,
  coordinates:[51.5194605, -0.1357715]
},
{
  rank: 67,
  restaurants: "Chez Bruce",
  location: "London",
  ratings: 4.8,
  reviews: 789,
  coordinates:[51.4460189, -0.1655464]
},
{
  rank: 68,
  restaurants: "1921 Angel Hill",
  location: "Bury St Edmunds",   
  ratings: 4.7,
  reviews: 56,
  coordinates:[52.2457543, 0.7172300]
},
{
  rank: 69,
  restaurants: "Elystan Street",
  location: "London",
  ratings: 4.7,
  reviews: 296,
  coordinates:[51.4916305, -0.1677674]
},
{
  rank: 70,
  restaurants: "Street XO [CLOSED]",
  location: "London",
  ratings: 4.4,
  reviews: 1699,
  coordinates:[51.51143, -0.14115]
},
{
  rank: 71,
  restaurants: "Ooty [CLOSED]",
  location: "London",
  ratings: 4.5,
  reviews: 103,
  coordinates:[51.51926, -0.15559]
},
{
  rank: 72,
  restaurants: "The Black Swan at Oldstead",
  location: "York",  
  ratings: 4.8,
  reviews: 415,
  coordinates:[54.2127451, -1.1865790]
},
{
  rank: 73,
  restaurants: "Restaurant MCR [CLOSED]",
  location: "Manchester",  
  ratings: 4.7,
  reviews: 68,
  coordinates:[53.48114, -2.25048]
},
{
  rank: 74,
  restaurants: "Gravetye Manor Hotel",
  location: "East Grinstead",  
  ratings: 4.8,
  reviews: 490,
  coordinates:[51.0965057, -0.0612308]
},
{
  rank: 75,
  restaurants: "Number One at The Balmoral",
  location: "Edinburgh", 
  ratings: 4.6,
  reviews: 182,
  coordinates:[55.9529802, -3.1892083]
},
{
  rank: 76,
  restaurants: "Babur",
  location: "London",  
  ratings: 4.6,
  reviews: 666,
  coordinates:[51.4474517, -0.0418371]
},
{
  rank: 77,
  restaurants: "The Blackbird [CLOSED]",
  location: "Bagnor",  
  ratings: 4.3,
  reviews: 236,
  coordinates:[51.41207, -2.25048]
},
{
  rank: 78,
  restaurants: "The Sportsman",
  location: "Whitstable", 
  ratings: 4.6,
  reviews: 517,
  coordinates:[51.3462974, 0.9834153]
},
{
  rank: 79,
  restaurants: "Club Gascon",
  location: "London",  
  ratings: 4.6,
  reviews: 337,
  coordinates:[51.5186249, -0.1000500]
},
{
  rank: 80,
  restaurants: "The Moorcock Inn",
  location: "Sowerby Bridge",  
  ratings: 4.7,
  reviews: 315,
  coordinates:[53.6927621, -1.9180448]
},
{
  rank: 81,
  restaurants: "Northcote",
  location: "Blackburn",  
  ratings: 4.7,
  reviews: 776,
  coordinates:[53.8092292, -2.4474884]
},
{
  rank: 82,
  restaurants: "The Frog Hoxton [CLOSED]",
  location: "London",   
  ratings: 4.5,
  reviews: 436,
  coordinates:[51.52741, -0.08054]
},
{
  rank: 83,
  restaurants: "Midsummer House",
  location: "Cambridge", 
  ratings: 4.7,
  reviews: 446,
  coordinates:[52.210522, 0.1295481]
},
{
  rank: 84,
  restaurants: "Trinity Restaurant",
  location: "London",  
  ratings: 4.7,
  reviews: 475,
  coordinates:[51.4634296, -0.1414943]
},
{
  rank: 85,
  restaurants: "The Ninth",
  location: "London", 
  ratings: 4.5,
  reviews: 624,
  coordinates:[51.5187999, -0.1348251]
},
{
  rank: 86,
  restaurants: "Caractere",
  location: "London",
  ratings: 4.8,
  reviews: 147,
  coordinates:[51.5178482, -0.2008117]
},
{
  rank: 87,
  restaurants: "Skosh",
  location: "York",
  ratings: 4.8,
  reviews: 547,
  coordinates:[53.9568478, -1.0895837]
},
{
  rank: 88,
  restaurants: "Seven Park Place by William Drabble",
  location: "London",
  ratings: 4.6,
  reviews: 152,
  coordinates:[51.5061214, -0.1402233]
},
{
  rank: 89,
  restaurants: "Indian Essence",
  location: "London", 
  ratings: 4.5,
  reviews: 455,
  coordinates:[51.3903227, 0.075521]
},
{
  rank: 90,
  restaurants: "La Trompette",
  location: "London",   
  ratings: 4.6,
  reviews: 621,
  coordinates:[51.4920787, -0.2559853]
},
{
  rank: 91,
  restaurants: "Crab House Cafe",
  location: "Wyke Regis",
  ratings: 4.7,
  reviews: 945,
  coordinates:[50.5858072, -2.4743774]
},
{
  rank: 92,
  restaurants: "Joro",
  location: "Sheffield",   
  ratings: 4.7,
  reviews: 343,
  coordinates:[53.3882439, -1.4758496]
},
{
  rank: 93,
  restaurants: "Kahani",
  location: "London",
  ratings: 4.4,
  reviews: 240,
  coordinates:[51.4940706, -0.1573070]
},
{
  rank: 94,
  restaurants: "Ormer Mayfair",
  location: "London",
  ratings: 4.7,
  reviews: 346,
  coordinates:[51.5059517, -0.144664]
},
{
  rank: 95,
  restaurants: "Box Tree",
  location: "Ilkley",
  ratings: 4.7,
  reviews: 217,
  coordinates:[53.9261027, -1.8257323]
},
{
  rank: 96,
  restaurants: "The Barbary",
  location: "London", 
  ratings: 4.6,
  reviews: 863,
  coordinates:[51.5144072, -0.1261845]
},
{
  rank: 97,
  restaurants: "John's House",
  location: "Mountsorrel",  
  ratings: 4.9,
  reviews: 386,
  coordinates:[52.7328718, -1.1458913]
},
{
  rank: 98,
  restaurants: "Pollen Street Social",
  location: "London", 
  ratings: 4.6,
  reviews: 973,
  coordinates:[51.5133619, -0.1422525]
},
{
  rank: 99,
  restaurants: "The Small Holding",
  location: "Cranbrook",   
  ratings: 4.7,
  reviews: 176,
  coordinates:[51.0920716, 0.4276332]
},
{
  rank: 100,
  restaurants: "Trishna",
  location: "London",  
  ratings: 4.4,
  reviews: 769,
  coordinates:[51.5183432, -0.1530705]
}
];

var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var restaurantsLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Only one base layer can be shown at a time.
var baseMaps = {
  Street: streetLayer
};
// Overlays that can be toggled on or off
var overlayMaps = {
  Restaurants: restaurantsLayer
};


// Pass all layers into the layer control and add the layer control to the map
L.control.layers(baseMaps, overlayMaps,{collapsed: false}).addTo(Restmap);




// Looping through the resturants array, create one marker for each restaurant, bind a popup containing its name and rating, and add it to the map.
for (i in restaurants) {
  var restaurant = restaurants[i];

  
  L.marker(restaurant.coordinates)
    .bindPopup(`<h3>${restaurant.restaurants}</h3> <p>Rating: ${restaurant.ratings.toLocaleString()}</p>`)
    .addTo(Restmap);
}


