// Add your code here

function submitData(name, email) {
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


  return  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
      })
      .then(function(object) {
          console.log(object);
          console.log(object.id);
        const main = document.querySelector('body')
        const h2 = document.createElement('h2')
        h2.textContent = object["id"];
        main.appendChild(h2)
      })
      .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
        const newMain = document.querySelector('body')
        const newh2 = document.createElement('h2')
        newh2.textContent = error.message
    newMain.appendChild(newh2)
      });
   }



   
 
   
