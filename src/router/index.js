import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/person',
    meta: { title: '电工管理', icon: 'person' },
    alwaysShow: true, // will always show the root menu
    children: [
      {
        path: '/dashboard/person',
        name: 'person',
        component: () => import('@/views/Electricity/dashboard/index'),
        meta: { title: '人员管理', icon: 'people' }
      },
      {
        path: '/dashboard/levels',
        name: 'levels',
        component: () => import('@/views/Electricity/levels/index'),
        meta: { title: '等级管理', icon: 'levels' }
      },
      {
        path: '/dashboard/electrician',
        name: 'electrician',
        component: () => import('@/views/Electricity/electrician/index'),
        meta: { title: '电工查询', icon: 'electrician' }
      },
      {
        path: '/dashboard/voucher',
        name: 'voucher',
        component: () => import('@/views/voucher/index'),
        meta: { title: '证件审核', icon: 'voucher' }
      }
    ]
  },
  {
    path: '/base',
    component: Layout,
    meta: { title: '基础配置', icon: 'base' },
    alwaysShow: true, // will always show the root menu
    children: [
      {
        path: '/base/tabs',
        name: 'tabs',
        component: () => import('@/views/baseDeploy/tabs/index'),
        meta: { title: '标签库', icon: 'tabs' }
      },
      {
        path: '/base/profession',
        name: 'profession',
        component: () => import('@/views/baseDeploy/profession/index'),
        meta: { title: '工种库', icon: 'profession' }
      },
      {
        path: '/base/cardpack',
        name: 'cardpack',
        component: () => import('@/views/baseDeploy/cardpack/index'),
        meta: { title: '卡包库', icon: 'cardpack' }
      },
      {
        path: '/base/worknode',
        name: 'worknode',
        component: () => import('@/views/baseDeploy/worknode/index'),
        meta: { title: '作业节点库', icon: 'worknode' }
      },
      {
        path: '/base/workguide',
        name: 'workguide',
        component: () => import('@/views/baseDeploy/workguide/index'),
        meta: { title: '作业指导书', icon: 'workguide' }
      },
      {
        path: '/base/worktemplate',
        name: 'worktemplate',
        component: () => import('@/views/baseDeploy/worktemplate/index'),
        meta: { title: '作业模版库', icon: 'worktemplate' }
      },
      {
        path: '/base/question',
        name: 'question',
        component: () => import('@/views/baseDeploy/question/index'),
        meta: { title: '题库管理', icon: 'question' }
      },
      {
        path: '/base/redpacket',
        name: 'redpacket',
        component: () => import('@/views/baseDeploy/redpacket/index'),
        meta: { title: '红包管理', icon: 'redpacket' }
      },
      {
        path: '/base/indentset',
        name: 'indentset',
        component: () => import('@/views/baseDeploy/indentset/index'),
        meta: { title: '订单设置', icon: 'indentset' }
      }
    ]
  },
  {
    path: '/agreement',
    component: Layout,
    meta: { title: '协议管理', icon: 'agreement' },
    alwaysShow: true, // will always show the root menu
    children: [
      {
        path: '/agreement/setting',
        name: 'setting',
        component: () => import('@/views/agreement/setting/index'),
        meta: { title: '协议设置', icon: 'setting' }
      },
      {
        path: '/agreement/examine',
        name: 'examine',
        component: () => import('@/views/agreement/examine/index'),
        meta: { title: '协议查看', icon: 'examine' }
      }
    ]
  },
  {
    path: '/appSetting',
    component: Layout,
    meta: { title: 'app设置', icon: 'agreement' },
    alwaysShow: true, // will always show the root menu
    children: [
      {
        path: '/appSetting/pageSetting',
        name: 'pageSetting',
        component: () => import('@/views/appSetting/pageSetting/index'),
        meta: { title: '页面设置', icon: 'setting' }
      }
    ]
  },
  {
    path: '/shopping',
    component: Layout,
    meta: { title: '红包商城', icon: 'agreement' },
    alwaysShow: true, // will always show the root menu
    children: [
      {
        path: '/shopping/goods',
        name: 'goods',
        component: () => import('@/views/shopping/goods/index'),
        meta: { title: '商品列表', icon: 'setting' }
      },
      {
        path: '/shopping/goods/edit',
        name: 'goodsEdit',
        hidden: true,
        component: () => import('@/views/shopping/goods/edit/index'),
        meta: { title: '商品编辑', icon: 'setting' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
