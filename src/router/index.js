/*jshint esversion:6*/
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//状态控制
import store from '../store/index';

//页面控制
import index from '../page/index';
import meal from '../page/meal.vue';
import busDeatils from '../page/busDetails.vue';
import mealDeatils from '../page/mealDetails.vue';
import mealList from '../page/mealList.vue';
import cameraman from '../page/cameraman.vue';
import makeupman from '../page/makeupman.vue';
import busSample from '../page/busSample.vue';
import user from '../page/user.vue';
import guide from '../page/guide.vue';
import comment from '../page/comment.vue';
import collect from '../page/collect.vue';


const routes = [{
    path: '/',
    name:'首页',
    component: index,
    children: [
        { path: '/index', component: index, name: 'index'}
    ]
},{
    path: '/user',
    name:'user',
    component: user,
    meta: { auth: false }
},{
    path : '/meal',
    name:'meal',
    component : meal
},{
    path : '/busDeatils',
    name:'busDeatils',
    component : busDeatils
},{
    path : '/mealDeatils',
    name:'mealDeatils',
    component : mealDeatils
},{
    path : '/mealList',
    name:'mealList',
    component : mealList
},{
    path : '/busSample',
    name:'busSample',
    component : busSample
},{
    path : '/cameraman',
    name:'cameraman',
    component : cameraman
},{
    path : '/makeupman',
    name:'makeupman',
    component : makeupman
},{
    path : '/guide',
    name:'guide',
    component : guide
},{
    path : '/comment',
    name:'comment',
    component : comment
},{
    path : '/collect',
    name:'collect',
    component : collect,
    meta: { auth: false }
},
{
    path: '*',
    name: 'page404',
    component: resolve => require(['./../page/index.vue'], resolve)
}];

const router = new VueRouter({
    mode: 'hash',
    saveScrollPosition: true,
    routes
});

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta;
    const token = localStorage.getItem('user');
    var isLogin = Boolean(token);
    if(auth && isLogin && (path == '/user' || path == '/')){
        return next({ path: '/user' })
    }
    if(!isLogin && (path == '/index' || path == '/collect')){
        return next({ path: '/' })
    }
    next()
});

export default router;

