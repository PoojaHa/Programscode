
function maponbj(arr){
    let m=new Map()
    for(let i=0;i<arr.length;i++){
       if(!m.has(i)){
            m.set(arr[i],1);
          }else{
            m.set(arr[i],m.get(arr[i])+1);
         }
    }
    return m
    }
    console.log(maponbj([2,4,5,5,6,6]))