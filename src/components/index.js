// Different CSS animations

import Slide from './Menu/slide'
import Bubble from './Menu/bubble'
import Reveal from './Menu/reveal'
import Push from './Menu/push'
import Elastic from './Menu/elastic'
import FallDown from './Menu/fallDown'
import PushRotate from './Menu/pushRotate'
import Stack from './Menu/stack'
import ScaleRotate from './Menu/scaleRotate'
import ScaleDown from './Menu/scaleDown'
import Menu from './Menu'

import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import VueWinwheel from 'vue-winwheel/vue-winwheel'
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueWinwheel from 'vue-winwheel/vue-winwheel'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueWinwheel);

require('./bootstrap');

let app = new Vue({
	el: '#app',
	router: new VueRouter(routes),
	components: {
		VueWinwheel
	}
});

export default {
    Menu,
    Slide,
    Bubble,
    Reveal,
    Push,
    PushRotate,
    ScaleDown,
    ScaleRotate,
    Stack,
    FallDown,
    Elastic
}