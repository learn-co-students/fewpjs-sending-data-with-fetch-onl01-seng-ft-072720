let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   

function submitData(name, email) {
    return fetch("http://localhost:3000/users", configObj )
}

