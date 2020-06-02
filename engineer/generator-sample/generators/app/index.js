// Generator 核心入口
// 需要导出一个继承自Yeoman Generator的类型
// Yeoman Generator在工作中会自动调用我们在此类型中定义的一些生命周期
// 在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，比如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    // yeoman 在询问用户环节会自动调用此方法
    // 在此方法中可以调用父类发prompt()方法发出对用户的命令行询问
    prompting(){
        return this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Your project name',
                default: this.appname // appname为项目上传目录名称
            }, {
                type: 'input',
                name: 'success',
                message: 'Your project name',
                default: true // appname为项目上传目录名称
            }
        ]).then(answers=>{
            this.answers = answers
        })
    }
    writing(){
        // Yeoman 自动在生成文件阶段调用此方法
        // 我们在这里往项目目录中写入文件
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        // 通过模板方式写入文件到项目目录
        // 模板文件路径
        const tmpl = this.templatePath('foo.txt')
        // 输出路径
        const output = this.destinationPath('foo.txt')
        // 模板数据上下文
        const context = this.answers // {title: 'hello',success:true}

        this.fs.copyTpl(tmpl,output,context)
    }
}