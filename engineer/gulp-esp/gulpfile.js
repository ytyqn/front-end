// gulp入口文件

// exports.foo = done=>{
//     console.log('foo task working~')
//     done() // 标识任务完成
// }


// exports.default = done=>{
//     console.log('default task working~')
//     done() // 标识任务完成
// }

// 不推荐
// const gulp = require('gulp')
// gulp.task('bar',done=>{
//     console.log('var task working~')
//     done() // 标识任务完成
// })

// gulp组合任务
const { series, parallel, watch } = require('gulp')
const foo = done=>{
    console.log('foo task working~')
    done() // 标识任务完成
}
const foo1 = done=>{
    console.log('foo1 task working~')
    done() // 标识任务完成
}
// 执行yarn gulp task1，会依次执行foo，foo1
// 串行执行任务，就是一个个执行
exports.task1 = series(foo, foo1)
// 并行执行任务，就是一起执行
exports.task2 = parallel(foo,foo1)

//Error
// 如果时多任务执行时，报错后不执行后面的内容
exports.callback_error = done=>{
    console.log('callback task working~')
    done(new Error('tsak failed!'))
}

// pomise
exports.promise = ()=>{
    console.log('promise task working~')
    return Promise.resolve()
}

exports.promise_error = ()=>{
    console.log('promise task working~')
    return Promise.reject(new Error('task failed!'))
}

// async
const timeout = time=>{
    return new Promise(resolve=>{
        setTimeout(resolve,time)
    })
}

exports.async = async ()=>{
    await timeout(1000)
    console.log('async task~')
}

// const fs = require('fs')
// exports.stream = ()=>{
//     const readStream = fs.createReadStream('package.json')
//     const writeStream = fs.createWriteStream('temp.txt')
//     readStream.pipe(writeStream)
//     return readStream
// }

// return 可以识别为在end事件执行done()
// exports.stream = done=>{
//     const readStream = fs.createReadStream('package.json')
//     const writeStream = fs.createWriteStream('temp.txt')
//     readStream.pipe(writeStream)
//     readStream.on('end',()=>{
//         done()
//     })
// }


// 压缩css
const fs = require('fs')
const {Transform} = require('stream')
exports.minicss = ()=>{
    const readCss = fs.createReadStream('main.css')
    const writeCss = fs.createWriteStream('main.min.css')

    const transform = new Transform({
        transform:(chunk, encoding, callback)=>{
            // 核心转换实现
            // chunk=> 读取流中读取到的内容（buffer）
            const input = chunk.toString()
            const output = input.replace(/\s+/g,'').replace(/\/\/*.+?\*\//g,'')
           // null为报错配置
            callback(null,output)
        }
    })

    readCss.pipe(transform).pipe(writeCss)
    return readCss
}

// gulp API
const {src,dest} = require('gulp')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
exports.apitest = ()=>{
    return src('main.css') // src('css/*.css)
    .pipe(cleanCss())
    .pipe(rename({extname:'.min.css'})) // 重命名后缀
    .pipe(dest('dist'))
}

const bs = require('browser-sync')

// const serve = ()=>{
//     // watch([需要编译的所有css文件], [编译css的命令如minicss])
//     // watch([需要压缩的所有图片，字体，其他文件], bs.reload) bs.reload用于更新，没有编译或压缩
//     bs.init({
//         server:{
//             // 关闭浏览器右上方的提示
//             notify: false,
//             // localhost的端口
//             port:2080,
//             // 自动打开浏览器页面关闭
//             open: false,
//             // 监听文件,当dist下文件改动，浏览器更新
//             files: 'dist/**',
//             baseDir: 'dist',
//             // 将路径替换，可以是在html里的link或是script
//             router:{
//                 '/node_modules': 'node_modules'
//             }
//         }
//     })
// }