// What does the following code return/print?

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ? 8
// console.log(yearNeptuneDiscovered); // ? 1846



// What does the following code return/print?

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ?  {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



// What does the following code return/print?

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   // 'Your name is Alejandro and you like purple'
//   getUserData({firstName: "Melissa"}) // ?
//   // 'Your name is Melissa and you like green'
//   getUserData({}) // ?
//   // 'Your name is undefined and you like green'



// What does the following code return/print?

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?   Maya
// console.log(second); // ?  Marisa
// console.log(third); // ?   Chi



// What does the following code return/print?

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // ? Raindrops on roses
//   console.log(whiskers); // ?  whiskers on kittens
//   console.log(aFewOfMyFavoriteThings); // ?  
//   // (3) ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']



// What does the following code return/print?

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ? [10, 30, 20]



// ES2015 Refactoring

// ES5 Assigning Variables to Object Properties
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

// // ES2015 Object Destructuring

// const { a, b } = obj.numbers;

// // ES5 Array Swap

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// // ES2015 One-Line Array Swap with Destructuring

// [1, 2] = [2, 1]

// raceResults()

// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/


const raceResults = ([first, second, third, ...rest]) => {
    return {
        first, second, third, rest
    }
}

// I am unsure why rest is now the second object in the new object instead of last but it works. 
