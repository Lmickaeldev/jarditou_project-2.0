//variable utlisé la fonction formulaire
let formulaire_contact = document.getElementById("formulaire_contact");
//fonction
formulaire_contact.addEventListener("submit", function (form) {
  //variable liasaon a l'html
  
  let username = document.getElementById("name");
  let nickname = document.getElementById("nickname");
  let date = document.getElementById("date");
  let codepost = document.getElementById("codepost");
  let adress = document.getElementById("adress");
  let ville = document.getElementById("ville");
  let mail = document.getElementById("mail");
  let ask = document.getElementById("ask")
  let acces = document.getElementById("acces");
  let requete = document.getElementById("requete");
  //regex
  let myregex = /^[a-zA-Z-\s]+$/;
  let myregex2 =/^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
  let myregex3 = /^\d{5}$/;
  //pour le Nom
  if (username.value.trim() == "") {
    let defaultusername = document.getElementById("defaultname");
    defaultusername.innerHTML = "* veuillez indiquer votre nom ";
    defaultusername.style.color = "red";
    e.preventDefault();
  } else if (myregex.test(username.value) == false) {
    let defaultusername = document.getElementById("defaultname");
    defaultusername.innerHTML =
      "* veuillez indiquer votre nom (seul les lettre, espace et (-) sont autorisé)";
    defaultusername.style.color = "#FE5E41";
    e.preventDefault();
  }
  //pour le prénom
  if (nickname.value.trim() == "") {
    let defaultnickname = document.getElementById("defaultnickname");
    defaultnickname.innerHTML = "* veuillez indiquer votre prénom ";
    defaultnickname.style.color = "red";
    e.preventDefault();
  } else if (myregex.test(nickname.value) == false) {
    let defaultnickname = document.getElementById("defaultnickname");
    defaultnickname.innerHTML =
      "* veuillez indiquer votre prénom (seul les lettre, espace et (-) sont autorisé)";
    defaultnickname.style.color = "#FE5E41";
    e.preventDefault();
  }
  //code postal
  if (codepost.value.trim() == "") {
    let defaultCodepost = document.getElementById("defaultcodepost");
    defaultCodepost.innerHTML = "* veuillez indiqué votre code postal ";
    defaultCodepost.style.color = "red";
    e.preventDefault();
  } else if (myregex3.test(codepost.value) == false) {
    let defaultCodepost = document.getElementById("defaultcodepost");
    defaultCodepost.innerHTML =
      "* vous devez saisir les 5 chiffre de votre ville";
    defaultCodepost.style.color = "#FE5E41";
    e.preventDefault();
  }
  //pour l'adresse
  if (adress.value.trim() == "") {
    let defaultadress = document.getElementById("defaultadress");
    defaultadress.innerHTML = "*veuillez indiqué votre adresse";
    defaultadress.style.color = "red";
  } else if (myregex.test(adress.value) == false) {
    let defaultadress = document.getElementById("defaultadress");
    defaultadress.innerHTML = "*veuillez indiqué votre adresse valide";
    defaultadress.style.color = "#FE5E41";
  }
  //pour la date
  if (date.value == "") {
    let defaultdate = document.getElementById("defaultdate");
    defaultdate.innerHTML = "* veuillez indiquer votre date de naissance ";
    defaultdate.style.color = "red";
    e.preventDefault();
  }
  //pour la ville
  if (ville.value.trim() == "") {
    let defaultville = document.getElementById("defaultville");
    defaultville.innerHTML = "*veuillez indiqué votre ville";
    defaultville.style.color = "red";
  } else if (myregex.test(ville.value) == false) {
    let defaultville = document.getElementById("defaultville");
    defaultville.innerHTML = "*veuillez indiqué votre adresse valide";
    defaultville.style.color = "#FE5E41";
  }
  //pour l'email
  if (mail.value.trim() == "") {
    let defaultmail = document.getElementById("defaultmail");
    defaultmail.innerHTML = "*veuillez indiqué votre mail";
    defaultmail.style.color = "red";
  } else if (myregex2.test(mail.value) == false) {
    let defaultmail = document.getElementById("defaultmail");
    defaultmail.innerHTML = "*veuillez indiqué votre adresse valide";
    defaultmail.style.color = "#FE5E41";
  }
  
  //pour le menu deroulant
  if (requete.value.trim() == "") {
    let defaultrequete = document.getElementById("defaultrequete");
    defaultrequete.innerHTML = "* veuillez selectionner une categorie";
    defaultrequete.style.color = "red";
  }
//pour la checkbox
  if(acces.checked== false) {
    let defaultacces = document.getElementById("defaultacces");
    defaultacces.innerHTML = "veuillez accepter le traitement du formulaire";
    defaultacces.style.color = "red";
  }
  //pour la question
  if(ask.value.trim()=="")
{
let defaultask=document.getElementById('defaultask');
defaultask.innerHTML="merci d'écrire le sujet de votre demande";
defaultask.style.color="red"
}

}
);






