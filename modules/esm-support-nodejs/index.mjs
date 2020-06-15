// esm nodejs支持
// 修改js后缀，改成mjs
// 命令： node --experimental-modules index.mjs
import {foo,bar} from './modules.mjs'

console.log(foo,bar)

import fs from 'fs'

fs.writeFileSync('foo.txt', 'es module working~')