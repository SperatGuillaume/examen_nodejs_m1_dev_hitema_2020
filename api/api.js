const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const bodyParser = require('body-parser');
const v1 = express.Router();
const app = express();

// To be implemented!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

v1.put('/people/:id', async (request, response) => {
    let id = request.params.id;
    let body = request.body;
    let person = await peopleService.updatePeople(id, body);

    response.send(person);
});


v1.get('/people', async (request, response) => {
    let filters = request.query;

    const peoples = await peopleService.getPeople(filters);
    response.send(peoples);
});

module.exports = app;
