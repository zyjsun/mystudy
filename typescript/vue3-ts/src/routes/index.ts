import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// interface RouterRaw{
//   path: string,
//   component: string
// }
const modules = import.meta.glob('./modules/*.ts')
const routes: RouteRecordRaw[] = []
//{home:()=>{path:'/home},component:()=>{}}}
console.log(modules);

for (let path in modules) {
  const mod = await modules[path]()
  console.log(mod);

  routes.push(...mod.default)
}

const router = createRouter({
  history: createWebHistory(),
  routes//实参
})

export default router