// Functor
class Container{
    constructor(v){
        this._value = v
    }
    map(fn){
        return new Container(fn(this._value))
    }
}

let r = new Container(5)
        .map(x=>x+2)
        .map(x=>x*x)
console.log(r)        

// --------------------------------
class Container1{
    static of(v){
        return new Container1(v)
    }
    constructor(v){
        this._value = v
    }
    map(fn){
        return Container1.of(fn(this._value))
    }
}

let n = Container1.of(4)
        .map(x=>x+2)
        .map(x=>x*x)
console.log(n)    