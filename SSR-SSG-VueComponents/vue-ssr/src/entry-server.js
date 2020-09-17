// 服务端入口
import { createApp } from './app.js'

export default context =>{
    const {app}=createApp()

    return app
}