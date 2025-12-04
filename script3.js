const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];
// This time, Julia and Kate are studying the activity levels of different dog breeds.

// YOUR TASKS:
// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// 3. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// 3. Create an array "allActivities" of all the activities of all the dog breeds
// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

// TEST DATA:

const huskyWeight = breeds
  .map((br) => br.averageWeight)
  .reduce((acc, averageWeight) => acc + averageWeight, 0);
console.log(`1. ${huskyWeight}`);

// let dogBothActivities = breeds
//     .map((br) => br.activities);
// console.log(dogBothActivities);

// dogBothActivities = dogBothActivities
//     .findIndex((br) =>
//         {
//             console.log(br);
//             return br.includes('agility') && br.includes('fetch');

//         });
//console.log(dogBothActivities);
//console.log(breeds[dogBothActivities]);
//console.log(` 3 .The name of the only breed that likes bot running and fetch is ${breeds[Number(dogBothActivities)].breed}`);
// console.log(dogBothActivities.includes(['sleeping']));
// function CheckActivities(activities) {
//     return activities
// }

// const hasSleepingDog = breeds.some(br => { console.log(br);
//     return  br.activities.includes('sleeping');
// });
// console.log(hasSleepingDog); // true (ο Bulldog κοιμάται)

const dogs = breeds.filter(
  (br) => br.activities.includes("agility") && br.activities.includes("fetch"),
);
//console.log(dogs);
//console.log(dogs.map(d => d.breed));

const dog3 = breeds.find(
  (br) => br.activities.includes("running") && br.activities.includes("fetch"),
);

//console.log([dog3]); // "Dalmatian"
console.log(
  `3.The name of the only breed that likes bot running and fetch is : `,
  ...[dog3].map((d) => d.breed),
);
//console.log(...[dog3].map(d => d.breed));

const allActivities = breeds.slice().map((br) => br.activities); //shallow copy
console.log("3.", ...allActivities.flat());
//console.log(allActivities.flat());
//console.log(...new Set(allActivities.flat()))
const uniqueActivities = [...new Set(allActivities.flat())];
console.log("4. ", ...uniqueActivities);
//flat σε ενα array περνει ολα τα εσωτερικα array και τα κανει ολα ενα array

const dogSwim = breeds.filter((br) => br.activities.includes("swimming"));
//console.log(dogSwim.map((br) => br.activities).flat().filter((br) => br != 'swimming'));
const swimmingAdjacent = new Set(
  dogSwim
    .map((br) => br.activities)
    .flat()
    .filter((br) => br != "swimming"),
);
console.log("5.", ...swimmingAdjacent);

const averageWeight = breeds
  .slice()
  .map((br) => br.averageWeight)
  .every((avg) => avg >= 10);
console.log("6. Average weight of dogs is greater than 10 : ", averageWeight);

const activeDog = breeds.slice().some((br) => br.activities.length >= 3);
console.log(activeDog);

//Sort Methods //
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// return < 0,  A,  B keep order
// return > 0   B,  A switch order

// Ascending 
// console.log(movements);
// movements.sort((a, b) => {
//   //greater than zero
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// // Descending
// movements.sort((a, b) => {
//   //greater than zero
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);

// // movements.sort((a, b) => a - b );
// // movements.sort((a, b) => b - a );

// let movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log("Ξεκινάμε με:", [...movements2]);

// movements2.sort((a, b) => {
//   console.log(`Συγκρίνω: ${a} και ${b}  →  a-b = ${a - b}  →  επιστρέφω ${a - b > 0 ? "θετικό" : a - b < 0 ? "αρνητικό" : "μηδέν"}`);
//   console.log([...movements2]);
//   return a - b;
// });

// console.log("Τελικό αποτέλεσμα:", movements2);

// let arr = [50, 10, 80, 20, 70, 30];

// let step = 0;
// arr.sort((a, b) => {
//   step++;
//   const snapshot = { ...arr };  // ← το μαγικό copy
//   console.log(`Βήμα ${step}: Συγκρίνω ${a} ↔ ${b}`);
//   console.log("Array τώρα:", Object.values(snapshot).join(" → "));
//   return a - b;
// });

// console.log("Τελικό:", arr.join(" → "));


movements.sort((a, b) => a - b );
console.log(movements)
movements.sort((a, b) => b - a );
console.log(movements); // All that matters to remember is this two 

