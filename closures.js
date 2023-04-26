function x(){
    var a=2;
    function y(){
        console.log(a)
    }
    return y
}
var s=x();
console.log(s);

//same 1 and 2
function x(){
    var a=2;
  return function y(){
        console.log(a)
    }

}
var s = x();
s();
console.log(s)

function x(){
   for(var i=1;i<=5;i++){
    setTimeout(function(){
      console.log(i)
    },1000)
   }
}
x();