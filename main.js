let quantity = document.querySelector("#quantity");
let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");
let validate = document.querySelector('.validate');

decrement.addEventListener("click", function() {
  quantity.value--;
});

increment.addEventListener("click", function() {
  quantity.value++;
});


validate.addEventListener('click', () => alert(`Vous avez ajouté ${quantity.value} ${quantity.value == 1 ? "maillot": "maillots"} à votre panier`))