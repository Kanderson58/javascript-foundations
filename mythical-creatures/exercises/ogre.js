class Ogre {
    constructor(ogreObject) {
        this.name = ogreObject.name
        this.home = ogreObject.abode || "Swamp"
        this.swings = 0
    }
    encounter(newHuman) {
        newHuman.encounterCounter++
        if(newHuman.noticesOgre() && this.swings < 2) {
            this.swingAt()
        } else {
            newHuman.knockedOut = true
        }
    }
    swingAt() {
            this.swings++
    }
    apologize(newHuman) {
        newHuman.knockedOut = false
    }
}

module.exports = Ogre