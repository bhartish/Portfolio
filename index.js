const express = require("express");
const port = 8000;

const app = express();

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('assets'));

app.get('/portfolio', function(req, res){
    return res.render('index');
});

app.listen(port, function(err){
    if(err){
        console.log("Error in running the server", err);
    }
    console.log("My server is running on port:", port);
});