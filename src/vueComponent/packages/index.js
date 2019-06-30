import XrTest from './test'
//所有组件列表
const components = [
    XrTest
]
//定义install方法,接收Vue 作为参数
const install = Vue => {
    if(install.installed) return
    install.installed = true
    // 遍历所有组件
    components.map(component => Vue.component(component.name,component))
}
// 检测到Vue才执行
if (typeof window !=='undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    // 所有组件,必须具有 install,才能使用Vue.use()
    ...components
}