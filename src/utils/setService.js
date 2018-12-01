import tokenService from './tokenService';

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
    create
}