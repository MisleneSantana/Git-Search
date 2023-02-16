export function renderUser(userData) {
    let userContainer = document.querySelector('.header__container');
    if (!userContainer) return;

    userContainer.innerHTML = '';

    let user = createUser(userData);
    userContainer.appendChild(user);

    return userContainer;
}

export function createUser(element) {
    let userContainer = document.createElement('figure');
    let userImage = document.createElement('img');
    let userName = document.createElement('figcaption');

    userContainer.setAttribute('class', 'header__user');
    userImage.src = element.avatar_url;
    userImage.alt = element.name;
    userName.innerText = element.name;

    userContainer.append(userImage, userName);

    return userContainer;
}

export function renderRepositary(array) {
    let listRepositary = document.querySelector('.main__list');

    if (!listRepositary || !array) return;
    listRepositary.innerHTML = '';

    array.forEach((repositary) => {
        let cardRepositary = createRepositaryCard(repositary);
        listRepositary.appendChild(cardRepositary);
    })
    return listRepositary;
}

function createRepositaryCard(element) {
    let cardContainerRepositary = document.createElement('li');
    let repositaryTitle = document.createElement('h3');
    let projectDescription = document.createElement('p');
    let repositaryLink = document.createElement('a');

    cardContainerRepositary.setAttribute('class', 'main__card');
    repositaryTitle.innerText = element.name;
    projectDescription.innerText = element.description;
    repositaryLink.href = element.html_url;
    repositaryLink.target = '_blank';
    repositaryLink.innerText = 'Repositório'

    cardContainerRepositary.append(repositaryTitle, projectDescription, repositaryLink);

    return cardContainerRepositary;
};