const express = require('express');
app = express();
const port = 33310;
const health = require('./api/controllers/health');
const availability = require('./api/controllers/availability');
const reservation = require('./api/controllers/reservation');
const user = require('./api/controllers/user');

app.get(['/', '/health'], (req, res) => {
    health.getHealth(req, res);
});

app.get('/availability', (req,res) => {
    availability.getAll(req,res);
});

app.get('/userinfo/:name', (req,res) => {
    user.getByName(req,res);
});

app.listen(port, () => console.log(`service started on port ${port}!`));