// function doubleIt(num){
//     return num*2;
// }
// const result=doubleIt(5);
// console.log(result);


// const doubleIt=function (num){
//     return num*2;
// }
// const result=doubleIt(5);
// console.log(result);

const doubleIt= (num)=> num*2;
const result=doubleIt(6);
console.log(result);
//
const add=(x,y)=> x+y;
const addResult=add(20,30);
console.log(addResult);
//
const give5=()=> 5;
const resultReturn=give5();
console.log(resultReturn);
//
const doMath=(m,n)=>{
    const sum=m+n;
    const sub=m-n;
    const diff=sum*sub;
    return diff;
}
const resultDiff=doMath(7,5);
console.log(resultDiff);

//arrow function jodi ak line e hoy r single parameter thake ta hole () dileo hobe na dileo hobe.issa moto.r parameter dui or beshe hole () dite hobe.abar ak line er jonno {} use na korleo hoy.{} use na korle ak line er jonno return keyword ta likha lage na automatic return kore.but multiple line hole {} ditei hobe.r { } use korlei return likha lagbe.