function missingelement(arr){
   for(let i=0;i<arr.length;i++){
       if(i+1!=arr[i])
        return i+1;
   }
}
let arr = [1,2,3,5]
console.log(missingelement(arr))