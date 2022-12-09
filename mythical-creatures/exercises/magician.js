class Magician {
    constructor(magicianName, favoriteAccessory = "top hat") {
        this.name = `The Great ${magicianName.name}`
        this.assistant = magicianName.assistant
        this.favoriteAccessory = magicianName.clothing || favoriteAccessory
    }

}

module.exports = Magician