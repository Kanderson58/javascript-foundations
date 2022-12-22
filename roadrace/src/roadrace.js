class Roadrace {
    constructor(raceObject) {
        this.name = raceObject.title;
        this.location = raceObject.city;
        this.distance;
        this.participants = [];
    }
    setDistance(numMiles) {
        this.distance = numMiles;
        return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
    }
    registerParticipants(participantName) {
        this.participants.push(participantName);
    }
    completeRace() {
        for(var i = 0; i < this.participants.length; i++) {
            this.participants[i].runRace(this.name, this.distance)
        }
    }
}

module.exports = Roadrace;
