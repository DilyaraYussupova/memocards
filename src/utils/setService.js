import tokenService from './tokenService';

function getAll() {
    return fetch('/api/sets', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
    })
        .then(res => res.json())
        .then( studySets => studySets);
}

function create(studySet) {
    return fetch('/api/sets', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(studySet)
    });
}

export default {
    create,
    getAll
}