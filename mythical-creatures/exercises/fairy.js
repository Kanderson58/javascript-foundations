class Fairy {
    constructor(fairyName) {
        this.name = fairyName
        this.dust = 10
        this.clothes = {dresses: ["Iris"]}
        this.disposition = "Good natured"
        this.humanWards = []
    }
    receiveBelief() {
        this.dust += 1
        console.log(this.name)
    }
    believe() {
        this.dust += 10
    }
    makeDresses(dressTypes) {
        for (var i = 0; i < dressTypes.length; i++) {
            this.clothes.dresses.push(dressTypes[i])
        }
    }
    becomeProvoked() {
        this.disposition = "Vengeful"
    }
    replaceInfant(infant) {
        if (this.disposition === "Vengeful" && this.humanWards.length <= 2) {
            infant.disposition = "Malicious"
            this.humanWards.push(infant)
        } 
        if (this.humanWards.length >= 3) {
            this.disposition = "Good natured"
        } return infant
    }
}

module.exports = Fairy;