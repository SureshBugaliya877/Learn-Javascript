let score = "33abc";

//console.log(typeof score);
// console.log(typeof (score)); 

let valuInNumber = Number(score);
// console.log(typeof valuInNumber);
// console.log(valuInNumber);


// score = "33" ; typeof = number, value = 33
// score = "33abs" = typeof = number, value = NaN
// score = "undefind" = typeof = number, value = NaN
// score = "null" = typeof = number, value = 0
// score = "true" = typeof = number, value = 1
// score = "false" = typeof = number, value = 0


let LoggedIn = 1;

let conversionLoggedIn = Boolean(LoggedIn);
// console.log(conversionLoggedIn);
// console.log(typeof conversionLoggedIn);




//JavaScript Type Conversion
// 1. Converting Strings to Numbers
// 2. Converting Numbers to Strings
// 3. Converting Dates to Numbers
// 4. Converting Numbers to Dates
// 5. Converting Booleans to Numbers
// 6. Converting Numbers to Booleans


//Converting Numbers to Strings
// https://www.w3schools.com/js/js_type_conversion.asp

let Sscore = 33;

//console.log(typeof score);
// console.log(typeof (score)); 

let SvaluInNumber = String(Sscore);
//  console.log(typeof SvaluInNumber);
//  console.log(SvaluInNumber);


//***************************************operstion********************************************************************* */
let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**5); 2 ki power 5
// console.log(2/2); 
// console.log(2%2);

let str1 = "hello"
let str2 = "suresh"
// let str3 = str1 + str2
let str3 = str1+" "+str2

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);

// console.log(1 + 2 + "1");


//console.log((3 + 2) * 5 % 3);

console.log(+true);
console.log(+"");


let num1 , num2, num3

num1 = num2 = num3 = 5

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);