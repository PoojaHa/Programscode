let a=[1,2,3,4,1]

const reducers2=a.reduce((acc,curr)=>{
     if(!acc[curr]){
        acc[curr]=1;
     }else{
        acc[curr]++;
     }
     return acc
    },{})
console.log(reducers2);
