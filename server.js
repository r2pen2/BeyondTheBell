const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require("express-fileupload")
const fs = require('fs');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

// Init express application
const app = express();

// Allow for CORS and file upload
app.use(cors());
app.use(fileUpload());

/** Firestore DB instance */
initializeApp({
    credential: cert(serviceAccount)
});
const db = getFirestore();

/** Always up-to-date testimonial data from Firebase */
let testimonialData = [];
/** Always up-to-date class offering data from Firebase */
let offeringData = [];
/** Always up-to-date staff data from Firebase */
let staffData = [];

// On launch, fetch testimonial, offering, and staff data from Firebase
const testimonialCollectionRef = db.collection("testimonials");
testimonialCollectionRef.onSnapshot((data) => {
    console.log("Found updated testimonial data");
    testimonialData = []; // Clear data
    for (const doc of data.docs) {
        testimonialData.push(doc.data());
    }
})
const offeringCollectionRef = db.collection("offerings");
offeringCollectionRef.onSnapshot((data) => {
    console.log("Found updated class offering data");
    offeringData = []; // Clear data
    for (const doc of data.docs) {
        offeringData.push(doc.data());
    }
})
const staffCollectionRef = db.collection("staff");
staffCollectionRef.onSnapshot((data) => {
    console.log("Found updated staff data");
    staffData = []; // Clear data
    for (const doc of data.docs) {
        staffData.push(doc.data());
    }
})

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

app.get("/testimonials", (req, res) => {
    res.send(testimonialData);
})
app.get("/offerings", (req, res) => {
    res.send(offeringData);
})
app.get("/staff", (req, res) => {
    res.send(staffData);
})

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