someFunction = (param) => {
    console.log(param)
}

const someString = "I want to make this work";

giveItBackLater = (someString, someFunction) => {
    setTimeout(()=>someFunction(someString), 500)
}
addSomePromises = () => {

}
promiseToGiveItBackLater = () => {

}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater, someFunction, someString}