// // function chunk(array, chunkSize) {
// //     if(chunkSize<1){
// //     console.log(array)
// //     return 
// //     }
// //     const result =[]
   
// //   const chunk=Math.ceil(array.length/chunkSize)

// //   //TODO: implement this. 
// //   for(let i=0;i<chunk;i++){
// //     const temparr=array.slice(i*chunkSize,(i+1)*chunkSize)
// //     result.push(temparr)
// //   }
// //   console.log(result)
// //   } 
// //   chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],0)
  
// function f1() { 
//     console.log("this is", this); 
//     console.log(“arguments is”, arguments); 
// } 
// f1() 

class Node{
    constructor(value){
        this.value =value;
        this.left =null;
        this.right=null
    }
}
class BST{
    constructor(){
        this.root =null;
    }
    Insert(value){
        const newnode = new Node(value);
         if(this.root === null){
            this.root = newnode;
            return this
         }
         let temp =this.root;
          while(temp){
            //lesser value insert left side
            if(newnode.value < temp.value){
               if(temp.left==null){
                temp.left =newnode
                return this
              }
               temp =temp.left
            }else{
                if(temp.right == null){
                    temp.right =newnode;
                    return this
                }
                temp=temp.right
            }
         }
    }
}
let myTree =new BST()
myTree.Insert(23)
myTree.Insert(18)
myTree.Insert(89)
console.log(myTree)