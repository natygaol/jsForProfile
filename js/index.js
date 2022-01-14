let profileName = document.querySelector("#profileName");

function changeName(element){
  profileName.innerText = "Naty García"
}

let acceptInvite = document.querySelectorAll(".user-line.borrar");
console.log(acceptInvite);



function removeUser(element){
  console.log(element.parentNoderemoveChild(element));
}