let string = "malayalam";
let revstring="";
for(let i=string.length-1;i>=0;i--)
{
    revstring+=string.charAt(i);
}
if(string===revstring)
    console.log("Palindrome");
else
    console.log("Not a Palindrome");


