var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var PageA = Vue.extend(require('./components/pageA.vue'));
var PageB = Vue.extend(require('./components/pageB.vue'));
var App = Vue.extend({});
var router = new VueRouter();

router.map({
    '/pageA': {
        component: PageA
    },
    '/pageB': {
        component: PageB
    }
})

router.start(App, '#app')
