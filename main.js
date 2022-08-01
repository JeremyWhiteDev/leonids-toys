//Toy constructor

class Toy {
    constructor(id, name, maker, price, dimensions, weight, category, upc) {
        this.id = id;
        this.name = name;
        this.maker = maker;
        this.price = price;
        this.dimensions = dimensions;
        this.weight = weight;
        this.category = category;
        this.upc = upc;
        toys.push(this);
    }
}


//first batch of toys

const legoMilleniumFalcon = {
    id: 1,
    name: "Lego Millenium Falcon",
    maker: "lego",
    price: 800,
    dimensions: [33, 22, 8],
    weight: 30.5,
    category: "Puzzle",
    upc: 75192
};

const ticketToRide = {
    id: 2,
    name: "Ticket to Ride Board Game",
    maker: "Days of Wonder",
    price: 60,
    dimensions: [11.75, 11.75, 3],
    weight: 3.2,
    category: "Board Game",
    upc: 824968717912
};

const xBoxSeriesX = {
    id: 3,
    name: "XBOX Series X",
    maker: "Microsoft",
    price: 500,
    dimensions: [11.5, 8.5, 15],
    weight: 15,
    category: "Video Game",
    upc: 889842640724
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
    dimensions: [17, 18.5, 7],
    weight: 15,
    category: "Video Game",
    upc: 711719541028
};

const goodNightMoon = {
    id: 5,
    name: "Good Night Moon Board Book",
    maker: "Harper Collins",
    price: 9,
    volume: [12, 12, 0.5],
    weight: 1,
    category: "Book",
    upc: 9780694003617
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

// const epicObject = {
//     name: "Epic Object",
//     array: toys,
//     number: 100,
//     boolean: true,
//     float: 3.14159265
// }

// console.log(epicObject);

// console.log(toys);

const playDoh30Pak = new Toy (6, "Play-Doh Case of Imagination", "Play-Doh", 16.99, [10.5, 6.5, 4.5], 5.5, "Arts & Crafts", 630509267323);

// console.log(playDoh30Pak);

console.log(toys);