const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
    const { author, title } = req.body;
    const params = `${title ? "title=" + title : ""}${
    author ? "&author=" + author : ""
}`;
    fetch(`http://openlibrary.org/search.json?${params}&limit=10`)
    .then((result) => result.json())
    .then((data) => res.json(data));
});

module.exports = router;