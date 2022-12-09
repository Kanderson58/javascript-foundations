class Snowman {
    constructor(snowmanThangs) {
        this.carrots = snowmanThangs.carrots
        this.coal = snowmanThangs.coal
        this.buttons = snowmanThangs.buttons
        this.snowballs = snowmanThangs.snowballs
        this.magicHat = false
    }
    canWearMagicHat() {
        if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
            return this.magicHat = false
        }
         return this.magicHat = true
    }
}


module.exports = Snowman;