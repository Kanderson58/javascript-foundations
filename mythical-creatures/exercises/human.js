class Human {
    constructor(humanName) {
        this.name = humanName
        this.encounterCounter = 0
        this.knockedOut = false
    }
    noticesOgre() {
        if (this.encounterCounter > 2 && this.encounterCounter < 5) {
            return true
        } else if (this.encounterCounter >= 6) {
            return true
        } else {
            return false
        }
    }
}

module.exports = Human