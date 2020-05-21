const m = new Set()
const {log}=console
m.add(1).add(3).add(4).add(1)
log(m)

m.forEach(i=>log(i))

for(let item of m){
    log(item)
}
log('```````````````````')
log(m.size)
log(m.delete(3))
log(m)
log(m.has(4))
log(m.has(8))
m.clear()
log(m)