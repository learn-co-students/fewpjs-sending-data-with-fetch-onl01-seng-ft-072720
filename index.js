

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`
        })
    })
    .then(resp => resp.json())
    .then(data => {
        const newId = document.createElement('h1');
        const text = document.createTextNode(`${data.id}`);
        newId.appendChild(text);
        document.querySelector('body').appendChild(newId);
    })
    .catch(error => {
        const newError = document.createElement('h5');
        const text = document.createTextNode(`${error.message}`);
        newError.appendChild(text);
        document.querySelector('body').appendChild(newError);
    })
}
