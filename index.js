function submitData (name, email) {

    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    function mountToBody(object) {
        document.body.innerHTML = object["id"]
    }

    function displayError(error) {
        document.body.innerHTML = error.message
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(mountToBody)
    .catch(displayError)

}