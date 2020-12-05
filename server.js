const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VARIABLE DATA

var tables = [
    //     {
    //     name: "",
    //     phone: "",
    //     email: "",
    //     id:""
    // }
];

var waitList = [
    // //     {
    // //     name: "",
    // //     phone: "",
    // //     email: "",
    // //     id:""
    // // }
];

// ROUTES
// Displays HOME page only
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});
// Displays TABLE and WAITLIST only
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
})
// Displays RESERVE form only
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/reserve.html"));
})
// Takes in answers from RESERVE FORM and submits to the waitList
app.post("/reserve", (req, res) => {
    // ADD IN NEW RESERVATION
    // Based on FORM the user can edit
    var newTable = req.body;

    newTable.routeName //= newTable.[uniqueIDGiven]

    console.log(newTable);
    waitList.push(newTable);
    res.json(newTable);
})

// LISTENER
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));