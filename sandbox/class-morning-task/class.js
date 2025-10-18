class Mug {
  constructor(colour) {
    this.beverage = null;
    this.isFull = false;
    this.colour = colour;
  }

  peek() {
    return `A ${this.colour} mug full of ${this.beverage}.`;
  }

  fill(beverage) {
    this.beverage = beverage;
    this.isFull = true;
    return `Your ${this.colour} mug has been filled with some delicious ${beverage}.`;
  }

  drink() {
    this.isFull = false;
    return `You take a few sips of some delicious ${this.beverage} from your ${this.colour} mug.`;
  }
}

const morningTea = new Mug('cyan');

console.log('My morning tea:');

console.log(morningTea); // Prediction Here obj with all the methods from class mug

console.log(morningTea.peek()); // Prediction Here this mug is full of null

console.log(morningTea.fill('Tea')); // Prediction Here your cyan mug has been filled with tea

console.log(morningTea.beverage); // Prediction Here tea

console.log(morningTea.drink()); // Prediction Here you take a few sips blah blah


class SelfStirringMug extends Mug {
  constructor(colour, stirDuration) {
    super(colour);
    this.stirDuration = stirDuration;
  }

  activateStir() {
    return `A vortex appears in the middle of your delicious ${this.beverage}... and then disappears after ${this.stirDuration} seconds.`;
  }
}

const afternoonHotChoco = new SelfStirringMug('orange', 10);

console.log(afternoonHotChoco.fill('Hot Chocolate')); // Prediction Here

console.log(afternoonHotChoco.peek()); // Prediction Here

console.log(afternoonHotChoco.activateStir()); // Prediction Here

console.log(afternoonHotChoco.drink()); // Prediction Here