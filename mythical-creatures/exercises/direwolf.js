class Direwolf {
    constructor(direwolfName, direwolfHome = "Beyond the Wall", direwolfSize = "Massive") {
        this.name = direwolfName
        this.home = direwolfHome
        this.size = direwolfSize
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
    }
    protect(newStark) {
        if (this.home === newStark.location && this.starksToProtect.length < 2) {
            this.starksToProtect.push(newStark)
            newStark.safe = true
            newStark.houseWords = "The North Remembers"
            this.huntsWhiteWalkers = false
        }
    }
    leave(currentStark) {
        currentStark.safe = false
        this.starksToProtect.splice(currentStark, 1)
    }
}

module.exports = Direwolf