console.log("hello");
const personOne =(friend,callbackfrind)=>{
    console.log(`hello  ${friend}`);
    callbackfrind();
}
const persontwo =()=>{
    console.log("calling back my function");
}
// pooja argumnet persontwo is actual function 
personOne("pooja",persontwo)

async function Api(){
    return "ghjkl"
}

Api().then((val)=>console.log(val))


function outer(val,callback){
  console.log(val);
  callback()
}
function inner(){
  console.log("iiner");
}

outer(20,inner)