// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLocation (kilometersAway:number):number{
    let milesAway:number = kilometersAway * milesPerKilometer;
    let hoursAway:number = milesAway / speedMph;
    let daysAway:number = hoursAway / 24;

    return daysAway;
}




// Call the function and print the outputs for the Mars trip and the moon trip:
let marsTemplate:string = `${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`;
let moonTemplate:string = `${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`;

console.log(marsTemplate);
console.log(moonTemplate);