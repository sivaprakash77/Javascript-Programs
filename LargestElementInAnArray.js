function LargestElement(arr){
    let max=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
            max=arr[i];
    }
    console.log(max);
}
let arr=[12,34,56,900,65,104];
LargestElement(arr);