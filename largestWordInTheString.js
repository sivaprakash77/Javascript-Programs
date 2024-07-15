let string = "I am a Fullstack developers";
let strarr = string.split(" ");
let newstrarr="";
for(let i=0;i<strarr.length;i++)
{
    if(strarr[i].length>newstrarr.length)
        newstrarr=strarr[i];
}
console.log(newstrarr);