class Person {
    constructor(name){
        this.name = name
    }
    say(){
        console.log(this.name)
    }
}

const m = new Person('jack')
m.say()

class Student extends Person{
    constructor(name,number){
        super(name)
        this.number = number
    }
    say(){
        console.log(this.number)
    }
}

const n = new Student('Tom',123411)
n.say()

const {log}=console
function Person1(name){
    this.name = name
    this.say=function(){
        console.log(this.name)
    }
}
Person1.prototype.talk= function(){
    console.log('talk '+this.name)
}

const a= new Person1('jack')
a.say()
a.talk()

function Student1(name){
    Person1.call(this,name)
}
Student1.prototype = new Person1()
const b= new Student1('Tom')
b.say()
b.talk()