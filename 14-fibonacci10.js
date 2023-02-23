var f0 = 0;
var f1 = 1;
console.log(f0);
console.log(f1);
for (var i = 1; i <= 10; i++) {
    var fib = f0 + f1;
    f0 = f1;
    f1 = fib;
    console.log(fib);
}
