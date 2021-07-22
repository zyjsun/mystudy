import Vue from 'vue'
class Store {
  constructor(options) {
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })

    //getters
    let getters = options.getters || {}
    this.getters = {}
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state)
        }

      })
    })

    //mutations
    let mutations = options.mutations || {}
    this.mutations = {}
    Object.keys(mutations).forEach(mutationsName => {
      this.mutations[mutationsName] = (args) => {
        mutations[mutationsName](this.state, args)
      }
    })

    //actions
    let actions = options.actions || {}
    this.actions = {}
    Object.keys(actions).forEach(actionsName => {
      this.actions[actionsName] = (args) => {
        actions[actionsName](this, args)
      }
    })


  }
  commit = (method, arg) => {
    this.mutations[method](arg)
  }
  dispatch (method, arg) {
    this.actions[method](arg)
  }
  get state () { //state  this.$store.state.num
    return this.vm.state
  }
}
let install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      if (this.$options && this.$options.store) {//根组件
        this.$store = this.$options.store
      } else {//子组件的vue
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}
let Vuex = {
  Store,
  install
}

export default Vuex