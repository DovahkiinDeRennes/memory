// import de la fonction de sauvegarde dans le Localstorage
import { saveData } from "./save.js";
import { refresh } from "./display.js";

// CallBack appelé lors de la soumission du form
function submitUser(event) {
    // Block auto refresh
    event.preventDefault()
    // Si le champ n'est pas vide
    if (event.currentTarget.querySelector('#field1').value != '') {
        // Sauvegarde "Sauvage"
        saveData("users", {
            name: event.currentTarget.querySelector('#field1').value,
            email: event.currentTarget.querySelector('#field2').value
        })
        
        // Empty Fields
        event.currentTarget.querySelector('#field1').value = ''
        event.currentTarget.querySelector('#field2').value = ''
        
        // Refresh Users List
        refresh()
    }
}

// Export de la fonction de callback
export {
    submitUser
}