const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const urlSchema = mongoose.Schema({
    original_url: { type: String, required: true },
    short_url: String
});
const Urls = mongoose.model('Urls', urlSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/api/shorturl/new", (req, res) => {
    let originalUrl = req.body.url;
    let shortUrl = Math.floor(Math.random() * 1000);
    let result;

    const urls = new Urls({ original_url: originalUrl, short_url: shortUrl });
    urls.save((err, data) => {
        if (err) console.log(err.message);
    });
    if (!result) {
        result = {
            "original_url": originalUrl,
            "short_url": shortUrl
        };
    }

    res.json(result);
});

app.get("/api/shorturl/:shortUrl", (req, res) => {
    Urls.findOne({ short_url: req.params.shortUrl }, (err, data) => {
        if (err ? console.log(err.message) : res.redirect(data["original_url"]));
    });
});

module.exports = app;
