import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            name:"bookCase",
            path:"/bookCase",
            component:()=>import('../pages/bookCase/index.vue')
        },
        {
            name:"bookStore",
            path:"/bookStore",
            component:()=>import('../pages/bookStore/index.vue')
        },
        {
            name:"classify",
            path:"/classify",
            component:()=>import('../pages/classify/index.vue')
        },
        {
            name:"mine",
            path:"/mine",
            component:()=>import('../pages/mine/index.vue')
        },
        
        {
            redirect:'*',
            path:'/home'
        }
        
    ]
}) 



export default router