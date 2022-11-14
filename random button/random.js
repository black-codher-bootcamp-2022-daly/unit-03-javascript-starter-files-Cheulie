export default function randomize(items) {
    const itemsLength = items.length
    const ramdomDecimal = Math.random()
    const randomNumber = Math.floor(randomDecimal * itemsLength)

    return items[randomNumber];

}