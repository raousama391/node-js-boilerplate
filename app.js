const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const {corsOrigin} = require('./utils');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const v1 = require('./apiVersions/v1');

v1.prepareV1Routes(app);

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: corsOrigin, credentials: true}));


// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;