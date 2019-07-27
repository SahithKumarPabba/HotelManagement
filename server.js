const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 8080;
const health = require('./src/api/controllers/health');
const availability = require('./src/api/controllers/availability');
const reservation = require('./src/api/controllers/reservation');
const user = require('./src/api/controllers/user');

app.get(['/', '/health'], (req, res) => {
    health.getHealth(req, res);
});

app.get('/availability', (req,res) => {
    availability.getAll(req,res);
});

app.get('/userinfo/:name', (req,res) => {
    user.getByName(req,res);
});

app.post('/makeReservation', (req, res) => {
    reservation.makeReservation(req,res);
});

app.listen(port, () => console.log(`service started on port ${port}!`));