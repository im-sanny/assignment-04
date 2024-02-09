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