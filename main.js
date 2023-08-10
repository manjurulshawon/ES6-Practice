 "use strict";

// ***************************Spread Operator***************
// let poorCountry =['Bangladesh','Srilanka'];
// let rachCountry =[...poorcountry,'America','Canada','Italy'];
// console.log(rachCountry);

//  without spread Operator - using Push()
let poorCountry=['Bangladesh','Srilanka','Pakishthan'];
let rachCountry=['America','Canada','Italy'];
// rachCountry.push(poorCountry);

// *********Rest Parameter***************

function Calculation(a,b,...numbers){
let sum = 0;
for(let i of numbers){

    sum=sum+i;
}
console.log(sum);
}
//  Calculation(2,4,6,5);

// ****************  Dynamic Function

let name=function(namevalue){
  return namevalue;
}
console.log(name("Manjurul Islam Shawon"));

