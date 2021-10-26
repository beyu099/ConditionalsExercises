// 1. if..else statement

let number = 15

if (number % 2 === 0){
  console.log('even')
} else{
  console.log('odd')
}


// 2. Musical groups
let musicians = 20;
if ( musicians === 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if ( musicians === 2 ) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if ( musicians === 4 ) {
    console.log("quartet");
} else {
    console.log("this is a large group");
};

// 3. murder mystery
let rooms = ['ballroom', 'gallery', 'billiards room', 'dining room']
let weapons = ['poison', 'trophy', 'pool stick', 'knife']
let suspects = ['mr parkes', 'ms van cleve', 'mrs sparr', 'mr kalehoff']

let solved = false;
let weapon = '';

let room = 'Dining room';
let suspect = 'Mr parkes';

room = room.toLowerCase()
suspect = suspect.toLowerCase()

if (room === rooms[0] && suspect === suspects[3]){
  solved = true
  weapon = weapons[0]
} else if (room === rooms[1] && suspect === suspects[1]){
  solved = true
  weapon = weapons[1]
} else if (room === rooms[2] && suspect === suspects[2]){
  solved = true
  weapon = weapons[2]
} else if (room === rooms[3] && suspect === suspects[0]){
  solved = true
  weapon = weapons[3]
} else{
  solved = false
  weapon = 'not found'
}

if (solved){
  console.log(`${suspect} did it in the ${room} with the ${weapon}!`)
} else{
  console.log(`weapon ${weapon}. Mystery remains unsolved. Contact Sherlock Holmes`)
}

// 4. Checking your balance
let balance = 15;
let isActive = true;
let checkBalance = true;

if (!checkBalance) {
  console.log("Thank you. Have a nice day!");
} else if (isActive && balance > 0) {
  console.log(`Your balance is ${balance}.`)
} else if (!isActive) {
  console.log("Your account is no longer active");
} else if (balance === 0){
  console.log(`Your account is empty`)
} else{
  `Your balance is negative. Please contact bank`
}

// 5. Ice cream
let flavour = ["Vanilla", "Chocolate"];
let vessels = ["Cone", "Bowl"];
let toppings = ["Sprikles", "Peanuts"];

flavour = 'Vanilla';
vessels = 'Bowl';
toppings = 'Peauts';

if (flavour.includes(flavour) && vessels.includes(vessels) && toppings.includes(toppings)) {
  console.log(`I'd like two scoops of ${flavour} ice cream in a ${vessels} with ${toppings}.
`);
} else{
  console.log();
}

// 6. 



// 7. Animal types based of food
let eatsPlants = true;
let eatsAnimals = true;

let type = eatsPlants && eatsAnimals ? 'omnivore' : eatsAnimals ? 'carnivore' : eatsPlants ? 'herbivore' : undefined
console.log(type);

// 8. Labor Statistics 
let education = "a professional degree";
let salary = 0;

education = education.toLowerCase();
salary = salary.toLocaleString("en-US"); // unable to set this so i convert it to string 

switch (education) {
  case 'no high school diploma':
    salary = '$25,636'
    break;
  case 'a high school diploma':
    salary =  '$35,256'
    break;
  case "an associate's degree":
    salary = '$41,496'
    break;
  case "a bachelor's degree":
    salary = '$59,124'
    break;
  case "a master's degree":
    salary = '$69,732'
    break;
  case 'a professional degree':
    salary = '$89,960' 
    break;
  case 'a doctoral degree':
    salary = '$84,396'
    break;
  default:
    break;
}
console.log(`In 2015, a person with ${education} earned an average of ${salary}/year`);