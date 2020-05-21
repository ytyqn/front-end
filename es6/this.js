const name = 'ddd'
const {log}=console
global.name='fff'
const m={
    name: 'sss',
    getName:()=>{
        console.log(name)
        log(this.name)
        log(this)
    },
    getName0:function(){
        console.log(name)
        log(this.name)
        log(this)
    },
    getName2:function(){
        log(this)

        setTimeout(function(){
            console.log(name)
            log(this.name)
        log(this)
        })
    },
    getName3:function(){
        log(this)

        setTimeout(()=>{
            log(name)
            log(this.name)
        log(this)

        })
    }
}

m.getName()
new Promise((resolve)=>{
    log('qwww')
    resolve()
}).then(()=>{
    log('then')
})
m.getName0()
m.getName2()
new Promise((resolve)=>{
    log('qwww1')
    resolve()
}).then(()=>{
    log('then2')
})
m.getName3()


log(this)
const n = ()=>{
    log('wo')
    log(this)
}
n()