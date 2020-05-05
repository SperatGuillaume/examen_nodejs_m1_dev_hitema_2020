const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        // let people = this.people;

        // let person;
        // people.map(person => {
            
        // })
    }
    
    getPeople(filters) {
        // To be implemented!
        const filterKeys = Object.keys(filters);
        return this.peoples.filter(item => {
            return filterKeys.every(key => {
                return filters[key] === item[key];
            });
        });
    }
}
