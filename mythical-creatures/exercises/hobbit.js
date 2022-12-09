class Hobbit {
    constructor(hobbitName, hobbitAge = 0) {
        this.name = hobbitName.name
        this.age = hobbitAge
        this.adult = false
        this.old = false
        this.hasRing = false
    }
    celebrateBirthday() {
        if (this.age < 32) {
            this.adult = false
        } else if (this.age > 99) {
            this.old = true
        } else {
            this.adult = true
        }
        this.age += 1
    }
    getRing() {
        if (this.name !== "Frodo") {
            this.hasRing = false
            return 'You can\'t have it!'
        } else {
            this.hasRing = true
            return 'Here is the ring!'
        }
    }
}

module.exports = Hobbit;