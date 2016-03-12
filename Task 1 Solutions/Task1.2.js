function range(start, end){
    var ar=[];
    for (var i = 0; i < (end - start + 1); i++){
        ar[i] = start+i;
    }
    return ar;
}

function sum(ar){
    var sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

console.log(sum(range(1, 10)));
