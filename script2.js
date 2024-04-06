
//2.a Print all the odd numbers in a given array using arrow function.

var temp = []
var res = (arr)=>{
for(var i =0;i<arr.length;i++){

  if(arr[i]%2!=0){
   temp.push(arr[i])
  }
 }
return temp;
}
console.log(res([1,2,3,4,5,6,7,8,9,10]))


 // 2. b Convert all the strings to title caps in a string array using Arrow Function:

  var res=(arr)=>{
    for(var i=0;i<arr.length;i++)
   {
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
   }
   return arr
  }
  console.log(res(["full","stack","webdevelopment","course","is", "awesome"]))


  //2.c. Sum of all numbers in an array using Arrow Function:
 var sum = 0
 var res=(arr)=>{
  for(var i=0;i<arr.length;i++)
{
  sum= sum+arr[i]
}
return sum
}
console.log(res([1,2,3,4,5]))


// 2.d. Return all the prime numbers in an array using arrow function:

var temp={}
var final_array=[]
var res=(arr)=>{
  for(var i=0;i<arr.length;i++)
  {
  var element = arr[i]
  for(var j=1;j<=element;j++)
  {
   if(element%j==0)
   {
     if(temp[element])
     {
       temp[element]++
     }
     else
   {
     temp[element]=1
   }
  }
  }
  if(temp[element]==2)
  {
  final_array.push(element)
  }
  } 
  return final_array
}

console.log(res([1,2,3,4,5,6,7,8,9,10]))


// 2)e. Return all the palindromes in an array using Arrow Function:

var temp=[]
var palindrome=[]
var reverse_str=""
var res=(arr)=>{
  for(var i=0;i<arr.length;i++)
  {
   var str=arr[i].split("")
   for(var j=str.length-1;j>=0;j--)
   {
     reverse_str=reverse_str+str[j]
   }
   temp.push(reverse_str)
   reverse_str=""
  }
  for(var k=0;k<arr.length;k++)
  {
    if(arr[k]==temp[k])
    {
      palindrome.push(arr[k])
    }
  }
  return palindrome
}
console.log(res(["racecar",'level',"kite","potato"]))