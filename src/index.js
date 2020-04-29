const path = require("path");
const express = require("express");
const app = express();

app.set("port", 4000)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), ()=> {
    console.log("Server on port ", app.get("port"));
})