// Add your code here
function submitData(name, email) {
    let formData = {
        name,
        email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(formData)
    };
    return fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            mountUsersToDom(object)
        })
        .catch(function(error) {
            document.body.innerHTML = error.message;
        })


}

function mountUsersToDom(object){

    const body = document.querySelector("body");
    const userData = document.createElement("p");
    userData.innerHTML = `User: ${object.name}, Email: ${object.email}, ID: ${object.id}`;
    body.append(userData);
}
