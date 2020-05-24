// IO函子
const fp = require('lodash/fp')
const fs = require('fs')
const {log}=console

class IO{
    static of (v){
        return new IO(function(){
            return v
        })
    }

    constructor(fn){
        this._value = fn
    }

    map(fn){
        return new IO(fp.flowRight(fn,this._value))
    }
}

let r = IO.of('heelo aaa')
            .map(fp.toUpper)
log(r._value())

let readFile = function(filename){
    return new IO(function(){
        return fs.readFileSync(filename,'utf-8')
    })
}

let print = function(x){
    return new IO(function(){
        log(x)
        return x
    })
}

let cat = fp.flowRight(print,readFile)

let res = cat('package.json')
log(res._value()._value())