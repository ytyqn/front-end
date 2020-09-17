const Vue = require('vue')
const fs = require('fs')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync('./index.template.html','utf-8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle,{
    template,clientManifest
})
const express = require('express')

const serve = express()

serve.use('/dist', express.static('./dist'))

serve.get('/',(req,res)=>{
    // const app = new Vue({
    //     template: `
    //         <div id="app">
    //             <h1>{{ message }}</h1>
    //         </div>
    //     `,
    //     data:{
    //         message:'ytyt'
    //     }
    // })
     
    renderer.renderToString( {
        title: 'yqyq',
        meta: `<meta name="description" content="yyj">`
    },(err, html)=>{
        if (err) {
            return res.status(500).end('Internal Server Error.')
        }
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        // res.end(` 
        // <!DOCTYPE html> 
        // <html lang="en">
        //     <head> 
        //         <title>Hello</title> 
        //         <meta charset="UTF-8">
        //     </head>
        //     <body>${html}</body>
        // </html>
        // `)
        res.end(html)
    })
})

serve.listen(5000,()=>{
    console.log('server running at port 5000.')
})