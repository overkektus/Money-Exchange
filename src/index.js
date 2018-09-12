// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    if(currency <= 0) {
        return {}
    } else if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        const obj = {};
        if(currency / H >= 1) {
            let coinsCount = Math.floor(currency / H);
            let coinsAmount = coinsCount * H;
            obj["H"] = coinsCount;
            currency-=coinsAmount;
        }
        if(currency / Q >= 1) {
            let coinsCount = Math.floor(currency / Q);
            let coinsAmount = coinsCount * Q;
            obj["Q"] = coinsCount;
            currency-=coinsAmount;
        }
        if(currency / D >= 1) {
            let coinsCount = Math.floor(currency / D);
            let coinsAmount = coinsCount * D;
            obj["D"] = coinsCount;
            currency-=coinsAmount;
        }
        if(currency / N >= 1) {
            let coinsCount = Math.floor(currency / N);
            let coinsAmount = coinsCount * N;
            obj["N"] = coinsCount;
            currency-=coinsAmount;
        }
        if(currency > 0) {
            obj["P"] = currency;
        }
        return obj;
    }
}