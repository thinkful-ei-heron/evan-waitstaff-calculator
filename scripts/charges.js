/* eslint-disable indent */
import meal from './meal.js';

const charges = {
    subTotal: 0,
    tip: 0,
    total: 0
};

//function to set new subtotal
function setSubTotal (subTotal) {
    charges.subTotal = subTotal;
}

//function to set new tip amount
function setTip (tip) {
    charges.tip = tip;
}

//function to set new total
function setTotal (total) {
    charges.total = total;
}

//function that does the math for the functions above
function calculateNewCharges() {
    setSubTotal (meal.store.basePrice + (meal.store.taxRate * meal.store.basePrice));
    setTip (meal.store.tipPercentage * charges.subTotal);
    setTotal (charges.subTotal + charges.tip);
}

function reset () {
    charges.subTotal=0;
    charges.tip=0;
    charges.total=0;
}

export default {
    reset,
    charges,
    calculateNewCharges
};