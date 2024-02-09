

function monthlySavings(allPayments , livingCost) {
if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
    return 'invalid input'
    }
    let sum = 0;
    totalTax = 0;
for (const payment of allPayments) {
    sum+=payment
    if (payment >= 3000) {
        totalTax += payment * 0.2;
    }
}
total = sum - totalTax - livingCost;
     if (total > 0) {
       return "savings" 
    }else{
        return "earn more"
    }
}
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
