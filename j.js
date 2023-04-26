// var x=7;

// function geName(){
//     console.log('mnamste javascript')
// }
// geName();
// console.log(x)

var x=1;
a1();
b();
console.log(x)

function a1(){
    console.log(x)
     var x=10;
    console.log(x)
}
function b(){
    // var x=100;
    console.log(x)
}
function lengthOfLastWord(s) {
     
    let index = s.length - 1;
    let output = 0;

    while (s[index] === ' ' && index >= 0) index -= 1;

    while (s[index] !== ' ' && index >= 0) {

        output += 1;
        index -= 1;

    }
    return output;
};
let str="Hello World";
console.log(lengthOfLastWord(str))