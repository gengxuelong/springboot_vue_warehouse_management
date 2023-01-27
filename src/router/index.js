import VueRouter from "vue-router";
const routes = [
    {
        path: '/',
        name: 'login',
        component: ()=>import('../components/Login')
    },
    {
        path: '/index',
        name:'index',
        component: ()=>import('../components/Index'),
        children: [
            {
                path: '/Home', // 这个路径为从根起始的路径，和父亲的路径并无关系，子级路由只是有子级view-router显示罢了
                name:'home',
                meta: {
                    title: '首页',
                },
                component: ()=>import('../components/Home')
            }
        ]
    }
]
const router = new VueRouter({
    mode : 'history',
    routes,
})
export default router

export function resetRouter(){
    router.matcher = new VueRouter({
        mode: 'history',
        routes: []
    }).matcher
}
const vueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to){
    return vueRouterPush.call(this,to).catch(err=>err)
}
