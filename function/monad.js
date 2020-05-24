// minad函子
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

    join(){
        return this._value()
    }

    flatMap(fn){
        return this.map(fn).join()
    }
}

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

let r = readFile('package.json')
        // .map(x=>x.toUpperCase())
        .map(fp.toUpper)
        .flatMap(print)
        .join()

log(r)