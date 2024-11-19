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

