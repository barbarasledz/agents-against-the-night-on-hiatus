import store from "../store"

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login(username = 'Some User') {
    // placeholder
    // TODO: replace with actual token stuff
    const token = {
        "username": username
    }
    setToken(token);
}

function setToken(token) {
    /* token = object (will be stringified to store in local storage) */
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUsername() {
    // placeholder
    // TODO: return actual username
    return JSON.parse(localStorage.getItem('token'))['username'];
}

export function getUserId() {
    // placeholder
    // TODO: return actual user id
    return 1;
}