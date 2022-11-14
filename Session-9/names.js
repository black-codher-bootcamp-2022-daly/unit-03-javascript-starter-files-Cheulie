const randomButton = document.querySectory(".random-button");

const names ["Tara", "Tobia", "Patience", "Tammy"];
const points =[1,3,5,7,9,2,3,3435,4,0,.5, 100000];

function randomize(items) {
    return items [Math.floor(Math.randon() * items.length)];
}

function putNameOnPage(name) {
    const title = document.querySelector('.winner')
    titleTag.textContent = name

}

function handleClick () {
    const randomName = randomize(names)
    putNameOnPage (randomName)
}


function addPointsToPage (points) {
    const pointTag  = document.querySelector('.points')
    pointTag.textContent = point 
}

randomButton.onclick = handleClick
    const randomName = document.querySelector(".random-button");

    const names =["A", "B", "C", "D", "E", "F"];
    const points

    function handleClick() {
        if(alreadyWon)

        const group = document.querySelector(".winner")
        const points = document.querySelector(".points")
        group.innerText = ""
        points.innerText = ""
        const alreadyWon = document.querySelector(".winnerTag")
        alreadyWon.remove()
        return

    }

const randomName = randomize(names)
const randomPoint = randomize(points)
console.log('click', {randomPoint, randomName});-

const winnerTag = document.createElement("H2")
winnerTag.textContent = "You are a winner"

document.body.appendChild(winnerTag)

