import { getUserByName } from './requests.js';

export function searchUserByName() {
    let inputUserSearch = document.querySelector('.search__user');
    let searchButton = document.querySelector('.search__button');

    searchButton.addEventListener('click', async (event) => {

        let userName = inputUserSearch.value.replaceAll(' ', '');
        let user = await getUserByName(userName);

        return user;
    });
}