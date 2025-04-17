let array=[12,68,26,45,65];

let largeNum=array[0];

for(let i=0;i<array.length;i++)
{
if(array[i]>largeNum)
{
largeNum=array[i];
}
}

console.log("Largest number is: ",largeNum);