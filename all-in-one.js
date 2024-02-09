function calculateMoney(ticketSale){
    if (typeof ticketSale !== 'number' ||  ticketSale < 0 ) {
        return 'Invalid Number';
    }
    let guard = 500;
    let lunch = 8*50
    let profit = 0;
    let ticketPrice = 120;
   
    profit =(ticketPrice*ticketSale) - (guard+lunch);
       
    return profit;
}
console.log(calculateMoney(93));


function checkName(name) {
    if (typeof name !== 'string' ||  name.trim() === '') {
        return "invalid";
    }
    let words ='a, y, i , e , o , u, w';
     words.split(' ')
    name = name.toLowerCase();
    name = name.charAt(name.length -1)
        if (words.includes(name)) {
            return 'Good Name'
        } else {
            return 'Bad Name'
        }
}
console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('anoy'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array'
    }
    let addArray=[] 
   for (const arr of array) {
    if (typeof arr === 'number' && !isNaN(arr)) {
        addArray.push(arr)
    }
   }
   return addArray;
}
console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]))
console.log(deleteInvalids(["1" , {num:2} , NaN ]))
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
console.log(deleteInvalids([ 1 , 2 , -3 ]))



function password({name, birthYear, siteName}) {
    if (birthYear.toString().length < 4) {
        return 'invalid'
    }
    let site =siteName.toUpperCase().charAt(0) + siteName.slice(1)

    let fullPassword = site+'#'+ name +'@'+ birthYear;

    return fullPassword;
}
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))





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
    