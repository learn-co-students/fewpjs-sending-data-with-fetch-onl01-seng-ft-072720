// Add your code here

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }







// function formData(string1, string2) {
//     name: string1,
//     password: string2
// };

// function configObj(string1, string 2) = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData(string1, string2))
// };

// function submitData(string1, string2) {
//     fetch("http://localhost:3000/users", configObj)
//     .then(resp => resp.json());
//     return fetch("http://localhost:3000/users");
// };