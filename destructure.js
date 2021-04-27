const person={
    name:"Jon abraham",
    age:23,
    phone:"03289042",
    gf:"maria"
}
// console.log(person.phone);
// console.log(person.name);
const {name,gf}=person;  //destructure
console.log(gf);
console.log(name);

//nested object destructure

const person2={
    name:"imran hasmi",
    info:{
        address:"pabna" ,
        leader:"Tiger",
    }
}
const {leader}=person2.info;
console.log(leader);


//array destructuring
const friends=["khalek","soffar","kobir","shajahan","shofi"];
const [firstPerson,secondPerson,...restFriend]=friends;  //1st theke serially jabe.
console.log(firstPerson);
console.log(secondPerson);
console.log(restFriend);