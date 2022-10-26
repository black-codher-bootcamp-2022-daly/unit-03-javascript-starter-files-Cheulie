import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

const button = document.createElement('button');

const buttonText = document.createTextNode('Get Fruits')

button.appendChild(buttonText)

button.onClick = () => createListOfFruit(fruits)

button.addEventListener

document.body.appendChild(button)


// start click me

// const x = document.querySelector("#clickMe");
// const y = document.querySelector("#hovering");

// x.addEventListener("click", respondClick);
// y.addEventListener("mouseover", respondMouseOver);
// y.addEventListener("mouseout", respondMouseOut);

// function respondMouseOver() {
//   document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
// }

// function respondMouseOut() {
//   document.querySelector("#effect").innerHTML += "MouseOut Event" + "<br>";
// }

// function respondClick() {
//   document.querySelector("#effect").innerHTML += "Click Event" + "<br>";
// }
const crazyButton = document.querySelector('#remove-handler-button')

function removeHandler () {
    const box = document.querySelector('#remove-handler')
    box.removeEventListener('mousemove', randomNumber)
}

crazyButton.addEventListener('click', removeHandler)

document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber);

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random();
}
