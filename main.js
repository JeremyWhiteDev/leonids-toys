
//first batch of toys

const legoMilleniumFalcon = {
    id: 1,
    name: "Lego Millenium Falcon",
    maker: "lego",
    price: 800,
    volume: 6000,
    weight: 30.5
};

const ticketToRide = {
    id: 2,
    name: "Ticket to Ride Board Game",
    maker: "Days of Wonder",
    price: 60,
    volume: 432,
    weight: 3.2
};

const xBoxSeriesX = {
    id: 3,
    name: "XBOX Series X",
    maker: "Microsoft",
    price: 500,
    volume: 2025,
    weight: 15
};

//create array

const toys = [legoMilleniumFalcon, ticketToRide, xBoxSeriesX];


// confirm array is complete
// console.log(toys)

//print current array to console:

// for (const toy of toys) {
//     console.log(`${toy.name} is made by ${toy.maker}`);
// }

//add two more toys:

const playStation5 = {
    id: 4,
    name: "Play Station 5",
    maker: "Sony",
    price: 500,
    volume: 2261,
    weight: 15
};

const goodNightMoon = {
    id: 5,
    name: "Good Night Moon Board Book",
    maker: "Harper Collins",
    price: 9,
    volume: 24,
    weight: 1
};

// Push toys to current array

toys.push(playStation5, goodNightMoon);


// print new array with price increase


// for (toy of toys) {
//     // price increase
//     toy.price = toy.price * 1.05;
//     //console log new catalog
//     console.log(`${toy.name} is made by ${toy.maker}, costs $${toy.price}, takes up ${toy.volume} cubic inches of shelf space, and weighs ${toy.weight} lbs.`);
// }

// Epic Object:

const epicObject = {
    name: "Epic Object",
    array: toys,
    number: 100,
    boolean: true,
    float: 3.14159265
}

console.log(epicObject)