import randomize from "./random.js"

const randomButton = document.querySelector(".button");

const colours = ["red", "orande", "yellow", "green", "blue", "purple"];

const randomColours = (items, selector) => {
    const randomColour =randomize(items);
    const targetElement = document.querySelector(selector);
    targetElement.textContent = randomColours;

}

randomButton.onclick =() => (randomColours(colours, ".colours"))

