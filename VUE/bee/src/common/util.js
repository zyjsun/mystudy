export function debounce (fun, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay);
  }
}