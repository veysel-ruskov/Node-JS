//7.Fruits shop
//цената на малините е на половина по-ниска от тази на ягодите;
// цената на портокалите е с 40% по-ниска от цената на малините;
// цената на бананите е с 80% по-ниска от цената на малините.
function fruitsShop(inputStrawberryPrice, inputQuantityOfBannans, inputQuantityOfPortocals, inputQuantityOfRaspberries, inputQuantityOfStrawberry) {
    let strawberryPrice = +inputStrawberryPrice;
    let quantityOfBannans = +inputQuantityOfBannans;
    let quantityOfPortocals = +inputQuantityOfPortocals;
    let quantityOfRaspberries = +inputQuantityOfRaspberries;
    let quantityOfStrawberry = +inputQuantityOfStrawberry;
    let raspPrice = strawberryPrice / 2;
    let portPrice = raspPrice - (0.4 * raspPrice);
    let banaPrice = raspPrice - (0.8 * raspPrice);
    let moneyNeeded = (raspPrice * quantityOfRaspberries) + (portPrice * quantityOfPortocals) + (banaPrice * quantityOfBannans) + (strawberryPrice * quantityOfStrawberry);
    console.log(moneyNeeded);
}
fruitsShop("48", "10", "3.3", "6.5", "1.7"); //333.12 expected

//1.Console convertor USD to BGN
function convertorUSDtoBGN(bgnInput) {
    let usd = Number(bgnInput);
    let bgn = usd * 1.79549;
    console.log(bgn)
}
convertorUSDtoBGN("22");

//2.Console convertor RAD to DEG
function convertorRADtoDEG(radInput) {
    let rad = Number(radInput);
    let deg = rad * 180 / Math.PI;
    console.log(deg.toFixed(0));
}
convertorRADtoDEG("3.1416");

//3.Calculator deposit
function calculateDeposit(inputSum, inputTerm, inputIncr) {
    let depositSum = +inputSum;
    let depositTerm = +inputTerm;
    let depositeIncr = +inputIncr;
    let result = depositSum + depositTerm * ((depositSum * depositeIncr / 100) / 12);
    console.log(result);
}
calculateDeposit("2350", "6", "7");

//4.Required literature
function requiredLit(inputPages, inputPagesPerHour, inputNumberOfDays) {
    let pages = +inputPages;
    let pagesPerHour = +inputPagesPerHour;
    let numberOfDays = +inputNumberOfDays;
    let result = (pages / pagesPerHour) / numberOfDays;
    console.log(result);
}
requiredLit("212", "20", "2");

