function add(num1, num2){
    console.log(num1,num2);
    var sum = num1 + num2;
    // return sum;
    console.log(sum);
}

add(34,67);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var taka = 230;
var sigaras = bringSingara(taka);
console.log('eating singaras', sigaras);