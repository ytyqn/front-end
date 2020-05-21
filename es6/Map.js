const m = new Map()


const {log}=console

const n = {k:12}, b=12345

m.set(n,'get it')
m.set(b,'get number')

log(m.get(n))
log(m.get(b))

log(m)

log(m.has(n))
log(m.delete(n))
log(m)
m.clear()
log(m)
