function displaypositive (numbers: number[])  {
    for (let i in numbers){
        if(numbers[i] < 0){
             
            console.log(numbers[i]);
        }
    }
    
}
displaypositive([1,-4,6,-3,9,4]);