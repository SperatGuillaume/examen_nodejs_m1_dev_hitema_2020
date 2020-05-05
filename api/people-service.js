const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!

        this.peoples.filter(person => {
            if (person.id == id) {
                person = people;
                person.id = id
                people.id = id;
            }
        });

        fs.writeFile(__dirname + '/people.json', JSON.stringify(this.peoples), (error) => {
            if (error) throw error;
        });

        return people.id;
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
