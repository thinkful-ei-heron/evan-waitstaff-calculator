/* eslint-disable indent */
import charges from './charges.js';

const store = {
    basePrice: 0,
    taxRate: 0,
    tipPercentage: 0
};

function setPrice (basePrice) {
    store.basePrice = basePrice;
}

function setTaxRate (taxRate) {
    if (taxRate >= 1) {
        return store.taxRate = taxRate/100;
    }
    else return store.taxRate = taxRate;
}

function setTipPercentage (tipPercentage) {
    if (tipPercentage >= 1) {
        return store.tipPercentage = tipPercentage/100;
    }
    else return store.tipPercentage = tipPercentage;
}

function calculate() {
    charges.calculateNewCharges();
}

export default{
    store,
    calculate,
    setPrice,
    setTaxRate,
    setTipPercentage
};

