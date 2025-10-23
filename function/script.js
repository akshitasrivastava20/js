function sum(a, b){
    let sum=a+b;
    console.log(sum)

}

sum("2","3");

function canvote(age){
    if(age>18)return true
    else return false
}

console.log(canvote(24))

let num=90
if(num%2==0) console.log("even")
    else console.log("odd")

function sumall(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum;
}
 console.log(sumall(9))