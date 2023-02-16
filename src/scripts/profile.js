import { renderUser, renderRepositary } from './render.js';

function showSearch() {
    const user = JSON.parse(localStorage.getItem('userFound'));
    const repositories = JSON.parse(localStorage.getItem('repositories'));

    renderUser(user);
    renderRepositary(repositories);
}

function newSearch() {
    let buttonChangeUser = document.querySelector('.nav__button');

    if (!buttonChangeUser) return;

    buttonChangeUser.addEventListener('click', (event) => {
        window.location.replace('../../index.html');
    })
}

showSearch();
newSearch();