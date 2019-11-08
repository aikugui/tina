const currify=(fn,params)=>{
	 (...args)=>args.length+params.length==fn.length?fn.call(null,...args,...params):currify(fn,[...args,...params]);


addTwo = (a,b)=>a+b
addThree = (a,b,c)=>a+b+c

newAddTwo = currify(addTwo)
newAddThree = currify(addThree)

console.log(newAddTwo(1)(2)) // 3
console.log(newAddThree(1)(2)(3)) // 6