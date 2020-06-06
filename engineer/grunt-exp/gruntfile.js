// Grunt 的入口文件
// 用于定义一些需要Grunt自动执行的任务
// 需要导出一个函数
// 此函数接受一个Grunt的形参，内部提供一些创建任务可以用到的API

module.exports = grunt =>{
    grunt.registerTask('foo',()=>{
        console.log('hello grunt~')
    })

    grunt.registerTask('bar',' 任务描述',()=>{
        console.log('other task~')
    })

    // default为默认，直接执行yarn grunt
    // grunt.registerTask('default',()=>{
    //     console.log('default task~')
    // })

    // 执行yarn grunt,会依次执行foo和bar
    grunt.registerTask('default',['foo','bar'])

    // 不支持异步
    // grunt.registerTask('async-task',()=>{
    //     setTimeout(()=>{
    //         console.log("async task working!")
    //     },1000)
    // })

    // 需要this.async()来解决异步问题
    // 而且不能使用箭头函数，需要使用function()
    grunt.registerTask('async-task',function(){
        const done = this.async()
        setTimeout(()=>{
            console.log("async task working!")
            done()
        },1000)
    })

    grunt.initConfig({
        build:{
            // 配置选项，不是任务
            // 可以通过this.options()获取
            options:{},
            // 如果
            // css: {
                // 在执行css时通过this.options()获取，不会获取外部的options
            //    options:{}
            // }
            css:'1',
            js:'2'
        }
    })

    grunt.registerMultiTask('build',function(){
        console.log(`target: ${this.target}, data:${this.data}`)
    })
}