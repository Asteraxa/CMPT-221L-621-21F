const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/Student");

const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
})

app.get("/", function (req, res) {
    res.render('student')
})

app.post("/", function (req, res) {
    
    Student.create(req.body.student, function (err, student) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/');
        }
    })  
})

app.listen(port, function(req, res) {
    console.log('listening on port 4000')
})