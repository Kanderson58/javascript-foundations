class Centaur {
    constructor(centaurName) {
        this.name = centaurName.name
        this.breed = centaurName.type
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.count = 0
    }
    shootBow() {
        if (this.count < 2 && this.layingDown === false) {
            this.count += 1
            return "Twang!!!"
        } else {
            this.cranky = true
        } return "NO!"
    }
    run() {
        if (this.count < 2 && this.layingDown === false) {
            this.count +=1
            return "Clop clop clop clop!!!"
        } else {
            this.cranky = true
        } return "NO!"
    }
    sleep() {
        if(this.standing === true) {
            return "NO!"
        } this.cranky = false
        this.count = 0
        return "ZZZZ"
    }
    layDown() {
        this.layingDown = true
        this.standing = false
    }
    standUp() {
        this.layingDown = false
        this.standing = true
    }
    drinkPotion() {
        if (this.standing === true) {
            this.cranky = false 
        } return "Not while I\'m laying down!"
    }
}

module.exports = Centaur