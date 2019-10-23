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
    store.taxRate = taxRate;
}

function setTipPercentage (tipPercentage) {
    store.tipPercentage = tipPercentage;
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

