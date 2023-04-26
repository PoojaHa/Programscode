function a(){
    console.log(b)
}

var b=10;
a()

console.log(x);
let x=10;
console.log(x1)
const x1=20;

console.log(window.x);
var a=100;
{
    var a=10;
    const b=20;
    let c=10;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(b)
console.log(c)