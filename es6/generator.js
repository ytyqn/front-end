const {log}=console

function * foo(){
    log('ggg')
    const m = yield 200
    log(m)
    log('jjjj')
    const n = yield 300
    log(n)
    
}
const generator = foo()
log(generator.next())
log(generator.next(400))
log(generator.next(500))