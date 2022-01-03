let arr=[2,3,4,5,6];
/** Implementation of Map Function */
const squaredArray=[];
function squareElements(currentVal, index){
  squaredArray.push(currentVal*2);
}

function myMap(array,callback){
  for(let i=0;i<array.length;i++){
    callback(array[i],i);
  }
}


/**Implementation of Filter Function.*/
const evenElements=[];
function checkEven(value){
  if(value%2==0)
  evenElements.push(value);
}

function myFilter(array,callback){
  for(let i=0;i<array.length;i++){
    callback(array[i]);
  }
}


/**Implementation of Reducer Function. */
let sum=0;
function findSumOfAllElements(total, currentValue){
  sum=total+currentValue;
}

function myReducer(array, callback){
  for(let i=0;i<array.length;i++)
  callback(sum,array[i]);
}


/**Implementation of Reducer Function. */
function  display(currentVal,index){
  console.log('The element at index '+index+' is: '+currentVal);
}

function myForEach(array, callback){
  for(let i=0;i<array.length;i++)
  callback(array[i],i);
}


myMap(arr,squareElements);
console.log('Squared Array using myMap function: '+squaredArray);
myFilter(arr,checkEven);
console.log('Even Elements using myFilter function: '+evenElements);
myReducer(arr, findSumOfAllElements);
console.log('Sum of All Elements: '+sum);
console.log('Displaying original elements of the array using myForEach function:');
myForEach(arr, display);
