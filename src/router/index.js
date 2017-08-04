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


const routes = [{
    path: '/',
    name:'首页',
    one:true,
    redirect: '/index',
    component: index,
    children: [
        { path: '/index', component: index, name: 'index' }
    ]
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
}];

const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes
});

export default router;

