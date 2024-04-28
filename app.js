// =======================================Question1========================================

function Product(nums) {
    let Product = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = currentMax;
            currentMax = currentMin;
            currentMin = temp;
        }

        currentMax = Math.max(nums[i], currentMax * nums[i]);
        currentMin = Math.min(nums[i], currentMin * nums[i]);

        Product = Math.max(Product, currentMax);
    }

    return Product;
}

console.log(Product([2, 3, -2, 4])); 


// ===========================================Question2==============================================

// const numbrs = [2, 7, 11, 15];
// const target = +prompt("Set the target You want for Question 2");
// function twoSum(numbrs, target) {
//     for (let i = 0; i < numbrs.length; i++) {
//         for (let j = i + 1; j < numbrs.length; j++) {
//             if (numbrs[i] + numbrs[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// }

// document.write("<h2>Question2 TwoSums</h2>")
// document.write(twoSum(numbrs, target)); 


// ==============================Question3==================================


// let string = "Welcome to JavaScript Guide";
// let revString = string.split("").reverse().join("").split(" ").reverse().join(" ");
// console.log(revString)


// ====================================Question4==========================

// const library = [
//     {
//       author: "Bill Gates",
//       title: "The Road Ahead",
//       readingStatus: true 
//     },
//     {
//      author: "Steve Jobs",
//       title: "Walter Issacson",
//       readingStatus: true
//     },
//     {

//         author: "Suzanie Collens",
//       title: "MockingJay: The final Book of the Hunger Games",
//       readingStatus: false
//     }
//   ];
  
  
//   function displayResult(library) {
//     for (let i = 0; i < library.length; i++) {
//       const book = library[i];
//       console.log(`Book: ${book.title} +<br>`);
//       console.log(`Author: ${book.author}`);
//       console.log(`Reading Status: ${book.readingStatus ? 'Currently reading' : 'Not yet read'}`);
//       console.log("---------------")
//     }
//   }
  

//   displayResult(library);


//   ==========================================Question5=======================================


function amountToCoins(amount, coins) {
    
    coins.sort((a, b) => b - a);
    
    let result = [];
    
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    
    return result;
}


console.log(amountToCoins(46, [25, 10, 5, 2, 1]));




  

