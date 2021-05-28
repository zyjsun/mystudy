Function.prototype.bind = function(){
	var fn = this;
	var args = Array.prototye.slice.call(arguments);
	var context = args.shift();

	return function(){
		return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
	};
};
