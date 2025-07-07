var s1 = "ayush";
console.log(s1);
var s1 = "aman";
console.log(s1);

let s2 = "anjali";
console.log(s2);
// let s2 = "aman";  //// it shows error because we can't redeclare the let variable
console.log(s2);

s2 = "Adit";
console.log(s2);     /// it does not show error because we can reassign the let variable

let s3 = "Pranshu";  // Changed from const to let since we need to reassign it
console.log(s3);

// const s3 = "Dev"  //// it shows error because we can't redeclare the const variable

// console.log(s3);


s3 = "harsh";

console.log(s3);


// /// functions with return value---------------------------

function sumOfTwo(a,b){
        let ans = a+b;
        return ans;
    }

let sumOfTwoBy = sumOfTwo(2,3);
console.log(sumOfTwoBy);


// /// functions with no return value---------------------------

function sum(a,b){
    console.log(a+b);
    
}

sum(2,3);

// /// arrow function---------------------------

var name = () =>{
        console.log("shreyas")
    }
    
console.log(name); //// it shows the function  [Function: name]
    
console.log(name()); //// it shows the return value of the function  shreyas,undefined
    
name(); //shreyas


//// closure function---------------------------

function a(){
    var x=7;
    var y=6;
    function b(){
        var y=8;
        console.log(y);
    }
    y=10;
    b(); //// it shows 8 because of the closure function
}
a(); //// it shows 8 because of the closure function

/// case 2---------------------------

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
    
var z=x();
console.log(z); //// it shows the function [Function: y]
z(); //// it shows 100 because of the closure function
    


//// case 3---------------------------


function z(){
    var b =900;

    function x(){
        var a = 7;

        function y(){
            console.log(a,b);
        }
        y(); //// it shows 7,900 because of the closure function
    }
    x();   //// it shows 7,900 because of the closure function
}
z();  //// it shows 7,900 because of the closure function




//settimeout function---------------------------


setTimeout(()=>{
    console.log("i'll print after 2 secs");
},2000);


//SETINTERVAL function---------------------------

setInterval(()=>{
    console.log("i'll print after 2 secs");
},2000)


//for loop with var i---------------------------
for(var i=0; i<10; i++){

    console.log(i);  /// 1,2,3,4,5,6,7,8,9,10
    
}




// /// for loop with setTimeout it will print 10 times 10 because of the callback queue function---------------------------

for(var i=0; i<10; i++){
    setTimeout(function(){
        console.log(i);
    }, 2000);
}



//EVENT LISTENERS

document.getElementById("functionCall").addEventListener("click",function abc(){
    console.log("EVENT HAPPENED!!")
})









