let profileName = document.querySelector("#profileName");

function changeName(element){
  profileName.innerText = "Naty García"
}

let acceptInvite1 = document.querySelectorAll("#para-borrar");
console.log(acceptInvite1);

function borrarInvite (element){
  acceptInvite1.forEach((invite) => {
    invite.remove();
  });
}

let acceptInvite2 = document.querySelectorAll("#para-borrar2");
console.log(acceptInvite1);

function borrarInvite2 (element){
  acceptInvite2.forEach((invite) => {
    invite.remove();
  });
}