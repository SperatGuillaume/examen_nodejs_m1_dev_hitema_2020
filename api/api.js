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

    try {
        const id = request.params.id;
        const body = request.body;
        const people = peopleService.updatePeople(id, body);
        return people ? response.sendStatus(200) : response.sendStatus(404);
    } catch (error) {
        response.sendStatus(404);
    }
    
});


v1.get('/people', async (request, response) => {
    let filters = request.query;

    const people = await peopleService.getPeople(filters);
    response.send(people);
});

module.exports = app;
