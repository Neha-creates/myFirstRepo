const arr = [2, 15, 6, 7, 9, 5, 11];
// For finding even number in the array
for (let i=0; i <= arr.length; i++){
    if (arr[i] % 2 == 0){
        console.log("Even number: ",arr[i]);
    }
}
// For finding odd number in the array
for (let i = 0; i <= arr.length; i++){
    if(arr[i] % 2 !== 0){
        console.log("Odd number: ",arr[i]);
    }
}
// Pattern printing of letter N
function patternPrinting(n){
    for(let i = 1; i <= n; i++){
        let bag = " ";
        for (let j = 1; j <= n; j++){
            if(j==1 || i==j || j==n){
            bag+="* ";
            }else{
            bag+="  ";
            }
        }
        console.log(bag);
    }
}
patternPrinting(7)
