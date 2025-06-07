const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing= require("./models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";



main().then(() =>{
    console.log("connected to db")
}).catch((err) =>{
    console.log(err);
})

async function main(params) {
    await mongoose.connect(MONGO_URL);
}

app.get("/test", async(req, res) =>{
    let sampleListings = new Listing({
        title: "My New Villa ",
        description: "By the beach",
        price: 2000,
        location: "Calangute, Gao",
        country: "India",
    });
    await sampleListings.save();
    console.log("sample was save ");
    res.send("succesfull");

});

app.get("/",(req, res) =>{
    res.send("Hi, I am root");
})

app.listen(8080,() =>{
    console.log("server is listening to the port 8080");
});