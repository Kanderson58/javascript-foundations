const Direwolf = require("./direwolf")

class Stark {
    constructor(starkObject) {
        this.name = starkObject.name
        this.location = starkObject.area || "Winterfell"
        this.safe = false
        this.houseWords = "Winter is Coming"
    }
    sayHouseWords() {
        return this.houseWords
    }
    callDirewolf(direwolfName, currentLocation) {
        var direwolf = new Direwolf(direwolfName, currentLocation)
        direwolf.home = this.location
        direwolf.protect(this)
        return direwolf
    }
}

module.exports = Stark