const cartes = document.querySelectorAll(".carte");

let premiereCarte, secondeCarte;
let aRetourneLaCarte = false;
let verrouillage = false;
let pairesretournes = 0;
let finDuJeu = document.querySelector(".finDuJeu");
let tentatives = 0;
let compteurTentativesElement = document.getElementById("compteurTentatives");


/*--------------------------------------------------------*/ 
/*---------------------- A PRESENTER ---------------------*/
/*˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅*/ 

function ouiPaire() {
    // Une paire
    premiereCarte.removeEventListener('click', RotationCarte);
    secondeCarte.removeEventListener('click', RotationCarte);

    pairesretournes++;
    if (pairesretournes == 6) {
        finDuJeu.classList.add('ouvert')
    };

    reset();
};

/*˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄*/ 
/*---------------------- A PRESENTER ---------------------*/
/*--------------------------------------------------------*/




(function melange() {
  cartes.forEach((carte) => {
    let randomPos = Math.floor(Math.random() * 12);
    carte.style.order = randomPos;
  });
})();

function reset() {
    [aRetourneLaCarte, verrouillage] = [false, false];
    [premiereCarte, secondeCarte] = [null, null];
};

function RotationCarte() {
    if (verrouillage) return;
    if (this === premiereCarte) return;

    this.classList.add('flip');

    if (!aRetourneLaCarte) {
        // Premier clic
       
        aRetourneLaCarte = true;

        premiereCarte = this;
        
        return;
    }
    // Second clic 
    secondeCarte = this;

    checkMatch();
     incrementerTentatives();
};

function checkMatch() {
    // Les cartes font paire ?
    let isMatch = premiereCarte.id === secondeCarte.id;
    isMatch ? ouiPaire() : nonPaire();
};

 


function nonPaire() {
    verrouillage = true;

    // Pas une paire
    setTimeout(() => {
        premiereCarte.classList.remove('flip');
        secondeCarte.classList.remove('flip');

        reset();
    }, 1100);
};

 function incrementerTentatives() {
   tentatives++;
   compteurTentativesElement.textContent = "Tentatives : " + tentatives;
 }



  document.addEventListener("keydown", function (event) {
    // Vérifiez si la touche appuyée est la touche Espace (code 32)
    if (event.key === " " || event.key === "Spacebar") {
      // Actualisez la page
      location.reload();
    }
  });


cartes.forEach((carte) => carte.addEventListener("click", RotationCarte));

