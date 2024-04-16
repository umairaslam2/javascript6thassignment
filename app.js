//h
//g 
//""

//Chapter 21-25;

// question 1;

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = "Umair Aslam"

// console.log("Salam" + " " + firstName + " " + lastName)

// question 2;

// var text = prompt("Enter your favourite mobile")

//  for(var i = 0; i < text.length; i++){
//     console.log(text);
// }


// question 3;

//var text = "Pakistani";

//console.log(text.indexOf("n"));



// question 4;

//var text = "Hello World";

 //console.log(text.lastIndexOf("l"));


 // question 5;


//var text = "Pakistani";

//console.log(text.charAt("3"));


// question 6;


// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = "Umair Aslam"

// console.log("Salam" + " " + firstName + " " + lastName)


// question 7;

//var text = "Hyderabad";

 //console.log(text.replace("Hyderabad" ,"Islam"));


 // question 8;

 //var text = "Ali and Sami are best friends. They play cricket and football together";



//console.log(text.replace(/and/g ,"&"));


// question 9;


//var str = "472";
//var num = parseInt(str)

//console.log(num)

// question 10

//var fullName = "peanuts"

 //console.log(fullName.toUpperCase());


 // question 11;

//  var fullName = "javascript"
// var firstLetter = fullName.slice(0,1).toUpperCase();
// var result = firstLetter + fullName.slice(1)

// console.log(result)

// question 12 ;

// var num = 35.34

// var convert = num.toString().replace(".", "")

// console.log(convert)


// question 14;

// var text = ["cake", "apple pie", "cookies", "patties"]
//  var user = prompt("welcome to ABC bakery please order")
//  var userLower = user.toLowerCase();

// if(text.includes(userLower)){
//     alert("found")
// }else{
//     alert("not found")
// }


// question 17 ;


//var text = "Pakistan";

//console.log(text.charAt("7"));




//Chapter 26-30;

// question 1;

//var perc = 3.45241

 //document.write(Math.round(perc));

 //document.write(Math.ceil(perc));

 //document.write(Math.floor(perc));


 // question 2;


 //var perc = -2.673

 //document.write(Math.round(perc));

 //document.write(Math.ceil(perc));

 //document.write(Math.floor(perc));


 // question 3;

 //var perc = -4

 //document.write(Math.abs(perc))


 // question 5;

//  var player1 = prompt("Enter head Name");
// var player2 = prompt("Enter tails Name");

// var toss = Math.random() * 2
// var ch = Math.floor(toss)

// if(ch == 0){
//     document.write(player1+ "head wins")
// }
// else{
//     document.write(player2+"tails wins")
// }

// questio 4 ;

 //var dice = Math.random() * 7
   // document.write(Math.floor(dice))


   // question 6;

   //var dice = Math.random() * 100
    //document.write(Math.floor(dice))


    // question 8;


//  var num = prompt("Enter secret number between 1 to 10");

//  if(num==="4"){
//     alert("congratulate")
//  }else{
//     alert("Try again")
//  }




//Chapter 31-34;

// question 1;

//var date = new Date();

 //console.log(date);

 // question 3;

//  var date = new Date();

//  var dayName = ["Sun", "Mon","Tue", "Wed", "Tu", "Fri", "Sat"]

// console.log(dayName[date.getDay()]);


// question 2;

//var date = new Date();

 //var dayName = ["jan", "feb","mar", "apr", "may", "june", "july"]

//console.log(dayName[date.getMonth()]);


// question 4;

// var dayName = prompt("Enter your day")

// if(dayName==("Sun")){
//   alert("it is fun day")
// }else{
//   alert("work day")
// }

// question 5;


//var date = new Date();

 // console.log(date.getDate());



 // question 6;

//  var eid1st = new Date("1 Jan, 1970");

//  var today = new Date();

//  var diff = today.getTime() - eid1st.getTime();

//  console.log(diff);

//  var eid1st = new Date("1 Jan, 1970");

//  var today = new Date();

//  var diff = today.getTime() - eid1st.getTime();

//  var mint = diff / (1000 * 60 *60 );

//  console.log(mint);


// question 7;

// var ampmTime = prompt("Enter your time")

// if(ampmTime="12:00 tO 11.59"){
//   alert("AM")
// }else{
//   alert("PM")
// }

// question 9 ;

// var eid1st = new Date("17 June, 2024");

//  var today = new Date();

// var diff = eid1st.getTime() - today.getTime();

//  var days = diff / (1000 * 60 *60 * 24);

//  console.log(days);

// question 10 ;


// var eid1st = new Date("17 June, 2024");

//  var today = new Date();

//  var diff = eid1st.getTime() - today.getTime();

//  var second = diff / (1000 * 60 );

//  console.log(second);

// question 13;

// var dateOfBirt = new Date("04 Feb, 2002");

//  var today = new Date();

//  var diff = today.getTime() - dateOfBirt.getTime();

//  var todayumer = diff / (1000 * 60 *60 * 24)/365;

//  console.log(todayumer);


