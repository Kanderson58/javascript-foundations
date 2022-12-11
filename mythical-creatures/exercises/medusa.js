var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(medusaName) {
        this.name = medusaName
        this.statues = []
    }
    gazeAtVictim(victim) {
        var newVictim = new Statue(victim.name) 
        if (this.statues.length < 3) {
            this.statues.push(newVictim)
        } else {
            var oldVictim = new Person(this.statues[0].name, "relieved")
            this.statues.shift()
            this.statues.push(newVictim)
            return oldVictim
        }
    }
}


module.exports = Medusa