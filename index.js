// function submitData(userName, userEmail) {
//     fetch(http://localhost:3000/users, configurationObject);
// }


// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       //username/email go here? 
//     }),
//   };

function submitData(name, email) {
   return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }, 
    body: JSON.stringify ({name, email})
  })
  .then(r => r.json())
  .then(obj => document.body.innerHTML = obj.id)
  .catch(e => document.body.innerHTML = e.message)

}