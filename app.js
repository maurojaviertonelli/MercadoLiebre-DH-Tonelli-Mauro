const express = require('express');
const path = require('path');
const app = express();


const publicPath = path.resolve(__dirname, "/public");
app.use( express.static(__dirname + "/public"));

/*app.listen(3001, () => {
    console.log("Servidor corriendo");
});*/
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});



