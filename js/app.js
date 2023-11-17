// Appeler mes dépendances
import { submitUser } from "./events/callback.js";
import { refresh } from "./events/display.js";

// Key LS
const KEY = "users"

// Display if Users exists 
refresh()

// Ecoute Form
const $form = document.getElementById('user-form')
// Listen
$form.addEventListener('submit', submitUser)


let myEmail = document.getElementById("email");
myContainer.textContent = "Nouvel élément ajouté!";





