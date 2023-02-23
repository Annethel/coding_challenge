let f0 = 0;
let f1 = 1;
console.log(f0);
console.log(f1);
for(let i=1; i<=10; i++){
    const fib = f0 +f1;
     f0 = f1;
     f1 = fib;
   console.log(fib)
}