class Dragon {
    constructor(name, rider, hungry = true) {
        this.name = name;
        this.rider = rider;
        this.hungry = hungry;
        this.count = 0;
    }
    greet() {
        return `Hi, ${this.rider}!`
    }

    eat() {
        if (this.count < 2) {
            this.count += 1
            return this.hungry = true
        } else {
            return this.hungry = false
        }
    } 
}

module.exports = Dragon;