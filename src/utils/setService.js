import tokenService from './tokenService';


function getUser() {
    return tokenService.getUserFromToken();
}

function getUser1(id) {
    return fetch(`/api/users/${id}`)
}

function create(set, userId) {
    console.log(set);
    return fetch('/api/sets', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(Object.assign(set, { userId }))
    })
}

export default {
    create,
    getUser,
    getUser1
}