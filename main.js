let arr=[2,3,4,5,6];
const resultArray=[];
function squareElements(currentVal, index){
  resultArray.push(currentVal*2);
}
function myMap(array,callback){
  for(let i=0;i<array.length;i++){
    callback(arr[i],i);
  }
}
myMap(arr,squareElements);
console.log(resultArray);
