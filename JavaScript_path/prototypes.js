// i want to make new Cups. they need a constructor
// …since every cup might be different, the 'type' property has to be specific to that object—aka, use "this"
function Cup(type, fave_drink) {
    this.type = type;
    this.best_bev_for_me = fave_drink;
};

// …however, every cup can *do* stuff, too, like say hi or say what drink it's best for
// …that method is the same for all cups, so set that on the prototype which i don't have yet but am about to
// methods go on prototype—this isn't a prototype yet
let some_object_that_could_be_a_prototype = {
    greet() {
        console.log(`Hi I'm a ${this.type}. The best drink to put in me is ${this.best_bev_for_me}…`);
    },
    bid_adieu() {
        console.log(`so long ${this.type}-y!`);
    }
};

// where am i now? i have
// - a function that is a constructor
// - an object
// – they aren't connected yet



// errors bc the constructor doesn't know about the greet method or the object it's a part of yet
// muggy.greet();

// fix it! hook the object method to the constructor's prototype

// V1: assign this specific method (and not the 'bid_adieu' one)
// Cup.prototype.greet = some_object_that_could_be_a_prototype.greet;
// Cup.prototype.bid_adieu = some_object_that_could_be_a_prototype.bid_adieu;

// V2: assign 1) to this constructor's prototype 2) this object
// Object.assign(Cup.prototype, some_object_that_could_be_a_prototype)
// …and try again
// muggy.greet();

// new cup
let muggy = new Cup("mug", "coffee");
muggy.greet();
muggy.bid_adieu();

let stein = new Cup('stein', 'beer');
stein.greet();
stein.bid_adieu();

let flute = new Cup("flute", "champagne duh");
flute.greet();
flute.bid_adieu();