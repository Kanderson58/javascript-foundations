class Runner {
    constructor(runnerName, runnerAge) {
        this.name = runnerName;
        this.age = runnerAge;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = [];
    }
    runSomeMiles(numMiles) {
        this.milesRun += numMiles;
        this.fitness += numMiles;
    }
    stretch() {
        this.fitness += .5;
    }
    runRace(raceName, raceMiles) {
        this.runSomeMiles(raceMiles);
        this.completedRaces.push(raceName);
    }
}

module.exports = Runner;
