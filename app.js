var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 3000;
    
app.use(express.static(__dirname));
    
app.get("/", function(req, res) {
    res.redirect("/main");
});

app.get("/main", function(req, res){
    res.sendFile(__dirname + "/main.html");
});

app.get("/img-gallery", function(req, res){
    res.sendFile(__dirname + "/img-gallery.html");
});

app.get("/sunset", function(req, res){
    res.sendFile(__dirname + "/sunset.html");
});

app.listen(port, function() {
    console.log("Server has started at " + port);
});