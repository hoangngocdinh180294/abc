import ListProduct from './components/product/list.vue'
import ListTypeproduct from './components/typeproduct/list'
import Home from './components/layout/Home'
export const routes = [{
        path: '/product/list',
        component: ListProduct,
        name: 'listproduct'
    },
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/typeproduct/list',
        component: ListTypeproduct,
        name: 'listtypeproduct'
    }
];