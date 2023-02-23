function fibonacci (n:number){
    let f0 = 0;
    let f1 = 1;

    if (n=0){
        return f0;
    }
    else if (n=1){
        return f1;
    }
    else if(n > 1){
        
    return fibonacci(n-1) + fibonacci(n-2)
    
    }
}
for (let n = 0; n < 10; ++n) {
    const value = fibonacci(n);
    console.log('f(' + n + ')=' + value);}