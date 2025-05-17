
//ARRAY
// Array is a special type of variable that store multipule value  in  a single variable 
let fruist = ['apple','banana','orenge'];
console.log(fruist);// output ['mango','papaya','graips']
// In array the index refers to the entair alement (like full string or number
// whareas in string the index refers to the single character
let fruist1 = ['mango','papaya','graips'];
console.log(fruist1[0]); // output mango
//  ['apple','banana','orenge']
//    0        1         2
console.log(fruist1[0][0]); //output is m
//In JavaScript, when you use typeof on an array, 
// it returns "object" because arrays
//  are technically a special type of object.
//------ Array is mutable ------
// An array is mutable because we can change its elements directly
// in the same memory location without creating a new array.
// ------Array method-----
// 1 push: add to end  means add the value at the end
let car = ['bmw','maruty','xuv'];
car.push('toyata');
console.log(car); //output is ['bmw','maruty','xuv','toyata'];
// 2 pop method delete value add at the end
let car2 = ['bmw','maruty','xuv','toyata'];
car2.pop('toyata');
console.log(car2);//output is ['bmw','maruty','xuv'];
//3 method shift delete from start
let car3 = ['bmw','maruty','xuv','toyata'];
car3.shift('bmw');
console.log(car3); //output is ['maruty','xuv','toyata'];
// 4 method unshift add to start
let car4 = ['yellow','geen','orenge'];
car4.unshift('red');
console.log(car4); // output is  ['red', 'yellow', 'geen', 'orenge']
//5 concatenat merge 2 array
let car5 =  ['yellow','green','orenge'];
let car6 = ['apply','papaya','banana'];
console.log(car5.concat(car6));
 //output is ['yellow', 'green', 'orenge', 'apply', 'papaya', 'banana']
console.log(car6.concat(car5));
//output is ['apply', 'papaya', 'banana', 'yellow', 'green', 'orenge']
// in this case create a new array and store the value of car5  and
//car6  in it
// 6 method reverse means reverse the value of array 
let car7 =  ['apply','papaya','banana'];
car7.reverse();
console.log(car7); // output is ['banana', 'papaya', 'apply']
// do not create a new string reverse the orignal array   
// 7 splice remove/replace/add.elementin place
//splice (start,delete,count,item--item n)
let color = ['yellow','green','orange','pink','blue'];
color.splice(0,2,);//means start from  0 index end delete 2 element
console.log(color);//output  ['orange', 'pink', 'blue']
color.splice(0,0,'black','white');
console.log(color);// output is ['black', 'white', 'orange', 'pink', 'blue']
color.splice(2,1,'yellow');
console.log(color); // output is ['black', 'white', 'yellow', 'pink', 'blue']
//8-----importent consept array refrences----
let a = [1,2,3];
let b = a;
console.log(b);//output is [1,2,3]
b.push(4);
console.log(a); //output is  [1,2,3,4]
//When you assign an array to a variable,
//  JavaScript stores a reference (memory address) to that array, 
// not the actual data.
//So if you assign one array to another variable (e.g., let b = a),
//both variables point to the same array in memory.
//Any change through one variable will affect the original array.
//Both a and b point to the same memory location.
//If you change the array using either a or b, 
// the change reflects in both because they share the same references.

  