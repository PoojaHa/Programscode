// // let a=[1,2,3,4,1]

// // const reducers2=a.reduce((acc,curr)=>{
// //      if(!acc[curr]){
// //         acc[curr]=1;
// //      }else{
// //         acc[curr]++;
// //      }
// //      return acc
// //     },{})
// // console.log(reducers2);



// // function Countpalindrome (arrs){
// //    let obj={}
// //   for(let i=0;i<arrs.length;i++){
// //     let firstarr =arr[i];
// //   if(obj[firstarr]){
// //        obj[firstarr] =obj[firstarr]+1
// //     }else{
// //       obj[firstarr]=1
// //     }
// //   }
// //   return obj
// // }
// // let arr =['aaa','baa','ccc','cba','aaa']
// // console.log(Countpalindrome(arr))
// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// var addBinary = function(a, b) {

//    let result = "";

//    let count = 0;

//    let i = a.length - 1;

//    let j = b.length - 1;

//    while (i >= 0 || j >= 0 || count > 0) {

//        let sum = count;

//        if (i >= 0) {

//            sum += parseInt(a[i]);
//            i--;
//        }

//        if (j >= 0) {

//            sum += parseInt(b[j]);
//            j--;
//        }

//        result = (sum % 2) + result;

//        count = Math.floor(sum / 2);      
//    }

//    return result;
// };
var multiply = function(num1, num2) {
    if(!+num1 || !+num2) return '0'
    const prod = Array(num1.length + num2.length).fill(0);
    let currIdx = prod.length-1;
    
    for(let i = num1.length-1; i >= 0; i--) {
        let idx = currIdx--;
        
        for(let j = num2.length-1; j >= 0; j--) {
            const res = +num1[i] * +num2[j] + prod[idx];
            prod[idx] = res % 10;
            prod[--idx] += Math.floor(res / 10);
        }
    }
    return prod.join('').replace(/^0+/, '')
};
let num1="123";
let num2="456";
multiply(num1,num2)