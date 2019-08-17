const express = require('express');
const app = express();
const fs = require('fs');
const home_route = require('../routes/home');
const flights_route = require('../routes/flights');
const promotions_route = require('../routes/promotions');
const explore_route = require('../routes/explore');
const about_route = require('../routes/about');
const login_route = require('../routes/login');
const register_route = require('../routes/register');
const port = process.env.PORT || 9001;

app.use('/', home_route);
app.use('/Flights', flights_route);
app.use('/Promotions', promotions_route);
app.use('/Explore', explore_route);
app.use('/About', about_route);
app.use('/Login', login_route);
app.use('/Register', register_route);

app.listen(port, () => {
    console.log('\nServidor iniciado en la direccion http://localhost:9001/\n');
});