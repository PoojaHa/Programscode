class Node{
    constructor(value) {
        this.value=value;
        this.next =null
      }
    
}
class Linkedlist{
   constructor(value){
     let newnode = new Node(value);
     this.head =newnode;
     this.tail=newnode;
     this.length=1
   }

   push(value){
    let newnode =new Node(value);
     if(this.length ==0){
        this.head =newnode;
        this.tail=newnode
     }else{
         this.tail.next=newnode;
         this.tail=newnode
     }
     this.length++
     return this
   }
   pop(){
     if(this.length==0){
        return  undefined
     }else{
        let temp =this.head;
        let pre=this.head;
        while(temp.next){
            pre =temp;
            temp=temp.next
        }
        this.tail=pre;
        this.tail.next =null;
        this.length--
        return this
     }
   }
   reverse(){
     let temp = this.head;
     this.head =this.tail;
     this.tail =temp;
     let prev= null;
     let next = temp.next;
     for(let i=0;i<this.length;i++){
        next =temp.next;
        temp.next =prev;
        prev =temp
        temp =next
     }
     return this
    }
   
 }
let node =new Linkedlist(4);
node.push(5);
node.push(10);
node.push(11);
node.push(12);
node.push(13);
//node.pop()
node.reverse()
console.log(node)