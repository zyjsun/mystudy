Vue.use(plugin)
// let Toast={}

// Toast.install=function(VUe){

// }

Vue.use = function (plugin) {
  const installedPlugins = (this._installedPlugins || (this.this_installedPlugins = []))
  if (installedPlugins.indexOf(plugin) > -1) {
    return this
  }
  const args = toArray(arguments, 1)//拿到其他参数
  args.unshift(this) //[this,xxxx]  vue实参
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args)
  } else if (typeof plugin === 'function') {
    plugin.install(plugin, args)//
  }
  installedPlugins.push(plugin)
  return this
}