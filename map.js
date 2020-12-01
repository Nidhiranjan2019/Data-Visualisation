
const arr=[1,1,2,3,4,4,4,5];

const myMap = new Map();

for(let i=0;i<arr.length;i++){   //iterate through the array
    let count=0;                                    //counter for each element
    if(!myMap.has(arr[i])){                               //if map already has that element as key i.e. it's frequency has been counted
       for(let j=0;j<arr.length;j++){                       //for each unique element we traverse the array once
           if(arr[i]===arr[j])
               count++;
       }
       myMap.set(arr[i],count);
    }

}
console.log(myMap);

