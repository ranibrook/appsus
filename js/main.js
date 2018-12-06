// console.log('main');

import appRouter from './routes.js'
import navBar from './cmps/nav-bar-cmp.js'




new Vue ( {
    el:'#app',
    router: appRouter,
    components: {
        navBar

    }
})