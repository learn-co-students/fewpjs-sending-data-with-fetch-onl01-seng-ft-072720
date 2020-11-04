function submitData(name, email){
  let names = {name: name, email: email}
  let obj = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(names)
  }
  return fetch('http://localhost:3000/users', obj)
  .then(function(response){
      return response.json()
  })
  .then(function(object){
      document.body.innerHTML = object['id']
  })
  .catch(function(error){
      alert('Bad things happened here...')
      document.body.innerHTML = error.message
  })
}