giveItBackLater = () => {

}
addSomePromises = (message) => {
    return new Promise(function (resolve, reject) {
        resolve(message);
        reject(new Error("Something went wrong, but don't blame the dev! (not immediately at least)"));
      })
}
promiseToGiveItBackLater = () => {

}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}