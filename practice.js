// function sorts0(arr) {
//     let mid=0;
//     let low=0;
//     let high=arr.length-1;
//     let temp;
//     while(mid<high){
//       if(arr[mid]==0){
//         temp=arr[low]
//         arr[low]=arr[mid];
//         arr[mid]=temp
//         mid++
//         low++
//       }else if(arr[mid]==1){
//          mid++
//       }else{
//          temp=arr[high];
//          arr[high]=arr[mid];
//          arr[mid]=temp
//          high--
//       }
//     }
//     return arr
//    }
//    const arr=[0,1,0,0,2,2,1,2]
//    console.log(sorts0(arr))

 
// function reverseVowels(s){
  
//     let start=0;
//     let end =s.length-1;
//     let temp;
//     while(start < end){
//        if(isvowel(s[start]) && isvowel(s[end])){
//          temp=s[start];
//          s[start] =s[end]
//          s[end] =temp
//          start++
//          end--
//        }
//        if(!isvowel(s[start])){
//          start++
//        }else{
//          end--
//        }
    
//     }
//     return  s
//  }
//  function isvowel(charcter){
//     let vowles=['a','e','i','o','u'];
//     return vowles.includes(charcter)
//  }
//  let str="hello"
//  console.log(reverseVowels(str))

// //  for(let i=1;i<=10;i++){
// //   let count=0
// //   for(let j=1;j<=i;j++){
// //       if(i%j==0){
// //         count++
// //       }
// //   } 
// //   if(count===2){
// //       console.log(i)
// //   }
// // }

function solve(s, l, r) {
  if (l >= r) 
      return true;

   if (s[l] === s[r]) {
      return solve(s, l + 1, r - 1);
  }

  return false;
}

function longestPalindrome(s) {
  const n = s.length;

  let maxlen = Number.MIN_SAFE_INTEGER;
  let startingIndex = 0;

  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          if (solve(s, i, j)) {
              if (j - i + 1 > maxlen) {
                  startingIndex = i;
                  maxlen = j - i + 1;
              }
          }
      }
  }

  return s.substring(startingIndex, startingIndex + maxlen);
}
const result = longestPalindrome("babad");
console.log(result);