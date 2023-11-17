import { getData } from "./save.js";
/**
 * Display in target tag 
 * @param {String} id 
 * @param {HTML} content
 */
function showInList(id, content) {
    // Ciblage
    const $list = document.getElementById(id)
    // Parcours des items à afficher
    content.forEach(item => {
        if (item) {
            // Insert
            $list.insertAdjacentHTML('afterend', `<li>${item.name}</li>`)
        }
    })
}

/**
 * Update Display
 */
function refresh() {
    const users = getData("users")
    showInList("result", users)
}

export { showInList, refresh }