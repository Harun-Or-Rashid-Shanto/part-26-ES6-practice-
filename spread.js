const ages1=[12,22,14,54];
const ages2=[23,43,25,65];
const ages3=[89,34,23,67];
// const allAges=ages1.concat(ages2).concat([5]).concat(ages3);
// const allAges=[ages1,ages2,5,ages3] array er moddhe abar oi array gula banay felbe
const allAges=[...ages1,...ages2,5,...ages3];  //spread
console.log(allAges);

//
// const num1=430;
// const num2=233;
// const num3=908;
const bigNumber=[430,209,903,949]
const maximum=Math.max(...bigNumber);
console.log(maximum);  //array er moddhe theke konta big seta spread er maddhome ber kora jay