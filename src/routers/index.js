import Vue from 'vue'
import Router from 'vue-router'
import maindata from '../components/maindata'
import login from '../components/login'
import register from '../components/register'
import maindatahead from '../components/componentuitls/maindatahead'
import maindatamiddle from '../components/componentuitls/maindatamiddle'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'log',
            component: login
        },
        {
            path: '/maindata',
            name: 'maindata',
            component: maindata
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
        ,
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/maindatahead',
            name: 'maindatahead',
            component: maindatahead
        }
        ,
        {
            path: '/maindatamiddle',
            name: 'maindatamiddle',
            component: maindatamiddle
        }
    ]
})
