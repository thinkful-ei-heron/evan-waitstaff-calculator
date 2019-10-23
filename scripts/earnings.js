/* eslint-disable indent */
import charges from './charges.js';

const store = {
    tipTotal: 0,
    mealCount: 0,
    tipPerMeal: 0
};

function calculate() {
    store.tipTotal += charges.charges.tip;
    store.mealCount += 1;
    store.tipPerMeal = store.tipTotal / store.mealCount;
}

export default {
    store,
    calculate
};