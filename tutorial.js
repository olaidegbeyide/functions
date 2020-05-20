const showDeets = document.querySelector('.container')
const loadDetails = async () => {
    let html =``
 await fetch('https://jsonplaceholder.typicode.com/comments')
 .then(response => response.json())
 .then(data => {
    console.log(data);
     data.map(deets =>{
         
         
         html += `
                
         <p class="name">${deets.name }</p>
         <p><b>${deets.email}</b></p>
         <p class="name"><b> Email length: </b>${deets.email.length}</p>
         <p class="name">${deets.body}</p>
   `
     })
     showDeets.innerHTML = html
 })
}
loadDetails()



   