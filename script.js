
//1) a. Print odd numbers in a given array using anonymous function.

var temp = []
var res = function(arr){
for(var i =0;i<arr.length;i++){
if(arr[i]%2!=0)
temp.push(arr[i])
}
return temp;
}
console.log(res([1,2,3,4,5,6,7,8,9,10]))


// 1) a. print odd numbers in a given array using IIFE function.

temp= []
(function(arr){
for(var i =0;i<arr.length;i++){
if(arr[i]%2!=0){
temp.push(arr[i])
}
}

console.log(temp)})([1,2,3,4,5,6,7,8,9,10])

 
//1.b convert all the strings to title caps in a string array using anonymous function:

var res= function(arr){
    for(var i=0;i<arr.length;i++)
    {
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    return arr
    }
    console.log(res(["full","stack","webdevelopment","course","is", "awesome"]))


//1.b. Convert all the strings to title caps in a string array using IIFE:

(function(arr){
    for(var i=0;i<arr.length;i++)
    {
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    console.log(arr)})(["full","stack","webdevelopment","course","is", "awesome"])





   
 //1.c Sum of all numbers in an array using anonymous function:

 var sum=0
 var res=function(arr){
   for(var i=0;i<arr.length;i++)
 {
   sum= sum+arr[i]
 }
 return sum;
 }
 console.log(res([1,2,3,4,5]))


 //1.c. Sum of all numbers in an array using IIFE:

var sum= 0
(function(arr){
  for(var i=0;i<arr.length;i++)
{
  sum= sum+arr[i]
}
console.log(sum)
})([2,3,5,6,1,4])





// 1.d. Return all the prime numbers in an array using anonymous function:

var temp={}
var final_array=[]
var res=function(arr){
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

// 1.d. Return all the prime numbers in an array using IIFE:

var temp={}
var final_array=[]
(function(arr){
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
  console.log(final_array)
})([1,2,3,4,5,6,7,8,9,10])




// 1.e. Return all the palindromes in an array using Anonymous Function:

var temp=[]
var palindrome=[]
var reverse_str=""
var res=function(arr){
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

// 1)e. Return all the palindromes in an array using IIFE:

var temp=[]
var palindrome=[]
var reverse_str=""
(function(arr){
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
  console.log(palindrome)
})(["racecar",'level',"kite","potato"])



//1.f. Return median of two sorted arrays of the same size using Anonymous Function:

var Merged_Array=[]
var temp=0
var count=0
var Median=0
var res=function(arr1,arr2){
  if(arr1.length==arr2.length)
  {
  Merged_Array=[...arr1,...arr2]
  for(var i=0;i<Merged_Array.length;i++)
  {
    for(var j=i+1;j<Merged_Array.length;j++)
  {
    if(Merged_Array[i]>=Merged_Array[j])
    {
      temp=Merged_Array[i]
      Merged_Array[i]=Merged_Array[j]
      Merged_Array[j]=temp
    }
  }
  }
  if(Merged_Array.length%2==0)
  {
    count=Merged_Array.length/2
    Median=(Merged_Array[count-1]+Merged_Array[count])/2
  }
  else
  {
    count=Math.round(Merged_Array.length/2)
    Median=Merged_Array[count-1]
  }
  return Median
  }
  else 
  return "The given arrays are not of same size"
}
var arr1=[1,2,3,4,5]
var arr2= [6,7,8,9,10]
console.log(res(arr1,arr2))

//1)f. Return median of two sorted arrays of the same size using IIFE:

var Merged_Array=[]
var temp=0
var count=0
var Median=0
(function(arr1,arr2){
  if(arr1.length==arr2.length)
  {
  Merged_Array=[...arr1,...arr2]
  for(var i=0;i<Merged_Array.length;i++)
  {
    for(var j=i+1;j<Merged_Array.length;j++)
  {
    if(Merged_Array[i]>=Merged_Array[j])
    {
      temp=Merged_Array[i]
      Merged_Array[i]=Merged_Array[j]
      Merged_Array[j]=temp
    }
  }
  }
  if(Merged_Array.length%2==0)
  {
    count=Merged_Array.length/2
    Median=(Merged_Array[count-1]+Merged_Array[count])/2
  }
  else
  {
    count=Math.round(Merged_Array.length/2)
    Median=Merged_Array[count-1]
  }
  console.log(Median)
  }
  else 
  console.log("The given arrays are not of same size")
})([1,2,3,4,5],[6,7,8,9,10])

//1)g. Remove duplicates from an array using Anonymous Function:

var temp={}
var final_array=[]
var res = function(arr){
 for(var i=0;i<arr.length;i++)
 {
  var element=arr[i]
   if(temp[element]){
     temp[element]++
   }
   else
   {
     temp[element]=1
   }
 }
 for(var key in temp)
 {
   if(temp[key]==1)
   {
     final_array.push(parseInt(key))
   }
 }
 return final_array
}
console.log(res([7,6,8,9,6,5,5,7,8,9,,6,2,3,1,2,]))

//1)g. Remove duplicates from an array using IIFE:


//1)h. Rotate an array by K times using Anonymous Function:
var i=0
var res = function(arr,k){
  while(i<k){
arr.push(arr.shift())
i++
}
return arr
}
console.log(res([1,2,3,4,5],2))

//1)h. Rotate an array by K times using IIFE:
function rotate_arr(arr,k){
  for(var a=0;a<k;a++){
    var end= arr[0]
    for(var i=0;i<arr.length-1;i++){
      arr[i]= arr[i+1]
      }
      arr[arr.length-1]=end
    }
    return arr;
   }
var arr= [1,2,3,4,5]
var k= 2;
console.log(rotate_arr(arr,k))