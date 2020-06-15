import {fileURLToPath} from 'url'
import {dirname} from 'path'

const {log} = console

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// require,module,exports 可以用 import和export 代替

// 当前文件的绝对路径
log(__filename)

// 当前文件所在目录
log(__dirname)