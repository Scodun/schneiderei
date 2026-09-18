import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import ForSaleView from '../views/ForSaleView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Schneiderei & Design - Gabriele Burgstaller | Villach' }
    },
    {
      path: '/zu-verkaufen',
      name: 'forsale',
      component: ForSaleView,
      meta: { title: 'Sofort verfügbar - Einzelstücke | Gabriele Burgstaller' }
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumView,
      meta: { 
        title: 'Impressum | Gabriele Burgstaller',
        robots: 'noindex, nofollow'
      }
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: PrivacyPolicyView,
      meta: { 
        title: 'Datenschutz | Gabriele Burgstaller',
        robots: 'noindex, nofollow'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // Update Title
  const title = to.meta.title
  if (title) {
    document.title = title
  }

  // Update Robots Meta Tag
  const robots = to.meta.robots || 'index, follow'
  let robotsTag = document.querySelector('meta[name="robots"]')
  if (robotsTag) {
    robotsTag.setAttribute('content', robots)
  } else {
    robotsTag = document.createElement('meta')
    robotsTag.setAttribute('name', 'robots')
    robotsTag.setAttribute('content', robots)
    document.head.appendChild(robotsTag)
  }

  next()
})

export default router
