const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs", {title: "First WebSite"});
});

router.get("/contact", (req, res) => {
    res.render("contact.ejs", {title: "Contact Page"});
});

module.exports = router;