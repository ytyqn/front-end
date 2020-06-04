#!/usr/bin/env node

// node CLI 应用入口文件必须要有这样的文件头
// 如果是linux和macOS系统下还需要修改此文件的读写权限 755
// 可以通过chmod 755 cli.js来实现

// 脚手架工作工程：
// 1. 通过命令行交互询问用户问题
// 2.根据用户回答的结果生成文件

// console.log('working!')
const inquirer = require("inquirer")
const path =require('path')
const fs = require('fs')
const ejs = require('ejs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Your project name?'
    }
]).then(answers=>{
    // console.log(answers)

    // 模板目录
    const tmpDir = path.join(__dirname, 'templates')
    // 目标目录
    const destDir = process.cwd()

    // 将模板下的文件全部转换到目标目录
    fs.readdir(tmpDir, (err,files)=>{
        if(err) throw err
        files.forEach(file=>{
            // console.log(file)
            // 通过模板引擎渲染文件

            ejs.renderFile(path.join(tmpDir,file),answers,(err,res)=>{
                if (err) throw err
                // console.log(res)

                fs.writeFileSync(path.join(destDir,file),res)
            })
        })
    })
})