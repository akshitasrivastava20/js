function add(a,b){
    return a+b;
}

function square(val){
    return val*val;
}
 
// function compose(fn1,fn2){
//     return function(a,b){
//         return fn2(fn1(a,b));
//     }
// }

// const task=compose(add,square);

// const result=task(3,4);
// console.log(result);


// const compose=(fn1,fn2)=>(a,b)=>fn2(fn1(a,b));

const composeAll=(...fns)=>(...values)=>fns.reduceRight((a,b)=>b(a),values)

const task=composeAll(add,square);
const result=task(2,3);
console.log(result);