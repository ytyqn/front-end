// maybe函子
class MayBe{
    static of(v){
        return new MayBe(v)
    } 
    constructor(v){
        this._value = v
    }
    map(fn){
        return this.isNothing() ? MayBe.of(fn(null)) :MayBe.of(fn(this._value))
    }
    isNothing(){
        return this._value === null || this._value ===undefined
    }
}

let n = MayBe.of(null)
        .map(x=>x+2)
        .map(x=>x*x)
console.log(n)    