const title = document.querySelector("h2");
const buttonTurn = document.querySelector("#buttonTurn");
const buttonAutomatic = document.querySelector("#buttonAutomatic");
const celeritySelector = document.querySelector("#vitesse");

let celerity = vitesse.value;
let refresh = 1000 / celerity;
let turn = 1;
title.textContent = `tour ${turn}`;
let plateau = [];

function changeCelerity(newCelerity) {
  refresh = 1000 / celerity;
  celerity = newCelerity;
}

function newTurn() {
  turn++;
  title.textContent = `tour ${turn}`;
  birth(plateau);
  death(plateau);
  draw();
}

function automatic() {
  setTimeout(() => {
    turn++;
    title.textContent = `tour ${turn}`;
    birth(plateau);
    death(plateau);
    draw();
    automatic();
  }, refresh);
}

// fonction qui permet la vie ou la mort d'une cellule en un simple clic
function clickEvent(e) {
  sourisX = e.offsetX;
  sourisY = e.offsetY;

  cellMouseX = Math.floor(sourisX / 20);
  cellMouseY = Math.floor(sourisY / 20);

  if (plateau[cellMouseX][cellMouseY][0] === true) {
    plateau[cellMouseX][cellMouseY][1] = 0;
    console.log(0);
  } else {
    plateau[cellMouseX][cellMouseY][1] = 1;
    console.log(1);
  }
  draw();
}

// création du tableau représentant le plateau du jeu
for (let i = 0; i < 50; i++) {
  plateau.push([]);
  for (let j = 0; j < 50; j++) {
    plateau[i].push([false, 0]);
  }
}

// affichage du premier plateau
var canvas = document.getElementById("canvas");
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  draw();
}

buttonTurn.addEventListener("click", newTurn);

buttonAutomatic.addEventListener("click", automatic);

canvas.addEventListener("click", (e) => clickEvent(e));
