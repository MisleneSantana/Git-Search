export async function getUserByName(userName) {
    const user = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((responseJason) => {

            if (responseJason.message !== 'Not Found') {
                console.log(responseJason.message)
                localStorage.setItem('userFound', JSON.stringify(responseJason))
                acessUserRepositary(userName);
            } else {
                window.location.replace('./src/pages/error.html');
            }
        })
    return user;
};

async function acessUserRepositary(userName) {
    const repositary = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then((response) => { return response.json() })
        .then((responseJason) => {
            localStorage.setItem('repositories', JSON.stringify(responseJason))
            window.location.replace('./src/pages/profile.html');
        })
    return repositary;
};
