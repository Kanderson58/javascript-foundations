class Pirate {
    constructor(pirateName, pirateJob = "scallywag") {
        this.name = pirateName
        this.job = pirateJob
        this.cursed = false
        this.booty = 0
    }
    robShip() {
        if (this.booty < 500 && !this.cursed) {
            this.booty += 100
            return "YAARRR!"
        } else {
            this.cursed = true
            return "ARG! I\'ve been cursed!"
        }
    }
    liftCurse() {
        if (!this.cursed) {
            return "You don\'t need to lift a curse!"
        } else {
            this.booty = 200
            this.cursed = false
            return "Your curse has been lifted!"
        }
    }
}


module.exports = Pirate