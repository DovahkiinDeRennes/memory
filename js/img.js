document.addEventListener("DOMContentLoaded", function () {
  // Tableau d'URLs d'images
  let images = [
    "IMG\\kawaii1.png",
    "IMG\\kawaii2.png",
    "IMG\\kawaii3.png",
    // Ajoutez autant d'URLs d'images que nécessaire
  ];

  // Sélectionne une URL d'image au hasard
  let imageAleatoire = images[Math.floor(Math.random() * images.length)];

  // Sélectionne l'élément img par son ID
  let imgElement = document.getElementById("imageAleatoire");
  
  // Attribution de l'URL au src de l'élément img
  imgElement.src = imageAleatoire;
});


