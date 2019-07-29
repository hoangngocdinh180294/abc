import List from './components/product/list.vue'
import Home from './components/layout/Home'
export const routes = [{
        path: '/product/list',
        component: List,
        name: 'list'
    },
    {
        path: '/',
        component: Home,
        name: 'home'
    }
];