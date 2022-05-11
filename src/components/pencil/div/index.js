import div from './src/index.vue';

div.install=function(Vue){
    Vue.component(div.name,div)
}
export default div