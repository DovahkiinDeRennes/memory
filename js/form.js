


const $form = document.getElementById('form1')

$form.addEventListener('submit', (event) => {

const user = {};
event.preventDefault();
const $inputs = event.target.querySelectorAll("input");

 $inputs.forEach(input => {
switch (input.id) {
  case "name":
    console.log("name");
    localStorage.setItem("name", input.value);
    break;

  case "mail":
    console.log("mail ");
    localStorage.setItem("mail", input.value);
    break;

  case "mdp":
    console.log("mdp");
   localStorage.setItem("mdp", input.value);
    break;

case "cmdp":
    console.log("cmdp");
   localStorage.setItem("cmdp", input.value);
    
    break;
}
});
})




