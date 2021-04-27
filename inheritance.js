class Parent{
    constructor(){
        this.fatherName="abdul khalid islam";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name + " " +this.fatherName;
    }
}
const baby=new Child("nazmul");
const baby2=new Child("sumon");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());