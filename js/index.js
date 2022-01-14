let profileName = document.querySelector("#profileName");

function changeName(element){
  profileName.innerText = "Naty García"
}

let acceptInvite = document.querySelectorAll(".user-line.borrar");
console.log(acceptInvite);


for(let i = 0; i < acceptInvite.length; i++) {
  acceptInvite[i].addEventListener('click', remove , false)
}

function removeUser(element){
  acceptInvite.remove();
}