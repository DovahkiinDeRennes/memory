/**
 * Get Datas
 * @param key 
 */
function getData(key) {
    // Long
    // On va récup le contenu sous la forme d'un tableau ou rien
    // const data = localStorage.getItem(key)
    // Convert data to previous format
    // const dataConverted = JSON.parse(data)

    // if (dataConverted) {
    //     return dataConverted
    // } else {
    //     return []
    // }

    // Short Ternary
    // return dataConverted ? dataConverted : [] 
    // Shortest Ternary
    return JSON.parse(localStorage.getItem(key)) ?? []
}

/**
 * Save data
 * @param {String} key 
 * @param {array} data 
 */
function saveData(key, data) {
    // Get Previous and Push
    const old = getData("users")
    // On ajoute le nouveau user à la liste existante
    old.push(data)
    // Convert data
    const convertData = JSON.stringify(old)
    // Save it
    localStorage.setItem(key, convertData)
}
// Export to
export { getData, saveData }