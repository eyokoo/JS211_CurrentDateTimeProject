// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const addMe = () => {
let num = 15
num.toString()
console.log(num.toString())
document.getElementById("display-element").innerHTML = num.toString();
}

// Write a JavaScript program to convert a string to the number.
const parseIntMe =()=> {
  let x = '15';
  parseInt(x);
  console.log(parseInt(x));
  document.getElementById("display-element").innerHTML = parseInt(x);
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
 const whatDataType = (something)=>{ 
  // write a function that takes in a variable and returns its Datatype
  return typeof something;
 }  

 // * Boolean
console.log(whatDataType(true))
  
// * String
 let str1 = "dogs"
console.log(whatDataType(str1))
  // * Null 
let blackhole = null
console.log(whatDataType(blackhole))

// * Function
console.log(whatDataType(parseIntMe))

// * Undefined
let air 
console.log(whatDataType(air))

// * Number
let bodyweight = 110
console.log(whatDataType(bodyweight))

  // * NaN
console.log(whatDataType(NaN))

 
  
// Write a JavaScript program that adds 2 numbers together.
const num1 = 5;
const num2 = 3;
const sumOfBoth = num1 + num2;
console.log(sumOfBoth)


// Write a JavaScript program that runs only when 2 things are true.

const testNum = (a) => {
  if (a > 0) {
    result = 'positive';
  }
  else {
    result = 'negative';
  }
  return result;
}

console.log(testNum(-5));
// expected output: "NOT positive"

// Write a JavaScript program that runs when 1 of 2 things are true.

    // OR = || true as long as 1 is true
let x = true || false;
console.log(x);



// Write a JavaScript program that runs when both things are not true.  
    // AND = && true if both are true
let y = !true && !true;
console.log(y);


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.


// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
