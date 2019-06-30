import XrTest from './src/test'
XrTest.install = Vue => {
    Vue.component(XrTest.name,XrTest)
}
export default XrTest