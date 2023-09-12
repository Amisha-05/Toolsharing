from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/rawData")
def get_data():
    return [
    {
        "id":3,
        "image":"images/drafter.jpg",
        "category":"Equipment",
        "Name":"Drafter",
        "description":"lorem1"
    },
    {
        "id":2,
        "image":"images/collegebag.jpg",
        "category":"lunch",
        "Name":"Bag",
        "description":"lorem1",
    },
    
    {
        "id":1,
        "image":"images/iit-jee.png",
        "category":"dinner",
        "Name":"IIT-JEE Books",
        "description":"lorempassumsnsjhwdkjhwkqj",

    },


    {
        "id":4,
        "image":"images/maggi.jpg",
        "category":"breakfast",
        "Name":"Maggie",
        "description":"lorem1",
    },
    {
        "id":5,
        "image":"images/momo.jpg",
        "category":"dinner",
        "Name":"Momo",
        "description":"lorem1"
    },
    {
        "id":6,
        "image":"images/pizza.jpg",
        "category":"lunch",
        "Name":"Pizza",
        "description":"lorem1"
    },
    {
        "id":7,
        "image":"images/puri.jpg",
        "category":"dinner",
        "Name":"Puri",
        "description":"lorem1"
    },
    {
        "id":8,
        "image":"images/rotiwithmeat.jpg",
        "category":"dinner",
        "Name":"Roti With Meat ",
        "description":"lorem1"
    },
    {
        "id":9,
        "image":"images/sweet.jpg",
        "category":"dinner",
        "Name":"Sweet",
        "description":"lorem1 bcjgiamfofiwefefiqehfig hcauhcjahuc ,oaj8ishqwed bfaDFSQJF "
    },



    {
        "id":10,
        "image":"images/vegthali.jpg",
        "category":"lunch",
        "Name":"VegThali",
        "description":"lorem1jhwdwuadguwebfjbfhjgwejhc smclajchaejbfmnwebygelkaoihj jnkuhaeiuaejfye"
    }]

if __name__ == "__main__":
    app.run(debug = True)