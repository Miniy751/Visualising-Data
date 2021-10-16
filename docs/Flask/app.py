# import necessary libraries
from flask import Flask, render_template
from rest_data import restaurants
import os
import pymongo
from pymongo import database
from table import headings
from table import data
# create instance of Flask app
app = Flask(__name__)
# Create a connection variable to mongo database

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.commerce_db
table_top_10 = db["items"].find().limit(10)
# create route that renders index.html template
@app.route("/")
def home():
    
    return render_template("index.html", text="Top 20 Leading Restaurants in the UK", headings = headings, data=data)

@app.route("/restaurants/")
def rest():
    return render_template("restaurant.html", restaurants=restaurants)

if __name__ == "__main__":
    app.run(debug=True)