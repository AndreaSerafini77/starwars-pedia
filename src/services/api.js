const baseUrl = 'https://swapi.dev/api/';

// fetch all the species
export function getSpecies(limit) {
    const segment = 'species';
    const response = fetch(baseUrl + segment)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            let species = data.results.map((x, index) => {
                let obj = x;
                obj.key = index + 1;
                return obj;
            });

            return species.slice(0, limit);
        })
        .catch(() => {
            return [];
        });
    return response;
}

// fetch all the people
export function getPeople(limit) {
    const segment = 'people';
    return fetch(baseUrl + segment)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            let people = data.results.map((x, index) => {
                let obj = x;
                obj.key = index + 1;
                return obj;
            });

            return people.slice(0, limit);;
        })
        .catch(() => {
            return [];
        })
}

// fetch a specific human by its id
export function getPeopleById(id) {
    const segment = 'people';
    return fetch(baseUrl + segment + '/' + id)
        .then(res => res.json())
        .then((data) => {

            return data;
        })
        .catch(() => {
            return null;
        })
}

// fetch a specific race by its id
export function getSpeciesById(id) {
    const segment = 'species';
    return fetch(baseUrl + segment + '/' + id)
        .then(res => res.json())
        .then((data) => {

            return data;
        })
        .catch(() => {
            return null;
        })
}
