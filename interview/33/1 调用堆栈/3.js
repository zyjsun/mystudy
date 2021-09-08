function myStrim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
console.log(myStrim('   12  34  '));

