var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;
// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursAway = milesAway / this.speedMph;
        var daysAway = hoursAway / 24;
        return daysAway;
    };
    Spacecraft.prototype.printDaysToLocation = function (location, distanceToLocation) {
        var template = this.name + " would take " + this.getDaysToLocation(distanceToLocation) + " days to get to " + location + ".";
        console.log(template);
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
spaceShuttle.printDaysToLocation("Mars", kilometersToMars);
spaceShuttle.printDaysToLocation("the Moon", kilometersToTheMoon);
