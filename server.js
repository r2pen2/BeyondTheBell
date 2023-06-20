const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require("express-fileupload")
const fs = require('fs');

// Init express application
const app = express();

app.use(cors());
app.use(fileUpload());

// Init env files
dotenv.config();

// Start listening on defined port
app.listen(process.env.PORT || 3001, () => {
    console.log('Now listening on port ' + process.env.PORT || 3001);
});

// BodyParser setup
app.use(bodyParser.json({ limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}));

// Serve static files
app.use(express.static(__dirname + "/server/static/"));



// Serve React build
app.use(express.static(__dirname + "/btb-client/build"));

app.get("/images/*", (req, res) => {
    res.sendFile(__dirname + req._parsedOriginalUrl.path);
})

app.post("/images/*", (req, res) => {
    const targetPath = __dirname + req._parsedUrl.path;
    fs.writeFile(targetPath, req.files.file.data, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    });
})

app.post("/delete-img", (req, res) => {
    const targetPath = __dirname + "/images/" + req._parsedUrl.query.substring(req._parsedUrl.query.indexOf("=") + 1)

    fs.rm(targetPath, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
})


// Serve react app
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/btb-client/build/index.html");
});