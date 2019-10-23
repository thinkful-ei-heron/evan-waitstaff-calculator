/* eslint-disable indent */
import meal from './meal.js';
import earnings from './earnings.js';
import charges from './charges.js';

//DOM
function render() {
    const htmlText = `
    <section class="grid">
        <fieldset class="meal" id="meal-form">
            <h2>Enter the Meal Details</h2>
            <form>
                <div>
                    <label for="meal-price">Base Meal Price:   $</label>
                    <input type="text" id="meal-price" class="meal-price-entry" 
                    name="meal-price" placeholder="9.99" required>
                </div>
                <div>
                    <label for="tax-rate">Tax Rate:   %</label>
                    <input type="text" id="tax-rate" class="tax-rate-entry" 
                    name="tax-rate" required>
                </div>
                <div>
                    <label for="tip-percentage">Tip Percentage:   %</label>
                    <input type="text" id="tip-percentage" class="tip-percentage-entry" 
                    name="tip-percentage" required>
                </div>
            </form>
            <div class="buttons">
                <h3 class="submit-button" id="submit-button">Submit</h3>
                <h3 class="cancel-button" id="cancel-button">Cancel</h3>
            </div>
        </fieldset>

        <fieldset class="charges">
            <h2>Customer Charges</h3>
            <section class="math">
                <div class="math-input">
                    <p>Subtotal ${charges.charges.subTotal}</p>
                    <p>Tip ${charges.charges.tip}</p>
                </div>
                <div class="total">
                    <p>Total ${charges.charges.total}</p>
                </div>
            </section>
        </fieldset>

        <fieldset class="earnings">
            <h2>My Earnings Info</h2>
            <section class="final-earnings">
                <p>Tip Total: ${earnings.store.tipTotal}</p>
                <p>Meal Count: ${earnings.store.mealCount}</p>
                <p>Average Tip Per Meal: ${earnings.store.tipPerMeal}</p>    
            </section>
        </fieldset>
    </section>`;
    $('.js-main').html(htmlText);
}

//listens for form submission and sets variables based on input data
function handleSubmit() {
    $('#js-main').on('click','#submit-button', function(event){
        event.preventDefault();
        const basePrice = $('#meal-price').val();
        meal.setPrice(parseFloat(basePrice));
        const taxRate = $('#tax-rate').val();
        const editedTaxRate = taxRate/100;
        meal.setTaxRate(parseFloat(editedTaxRate));
        const tipPercentage = $('#tip-percentage').val();
        const editedTipPercentage = tipPercentage/100;
        meal.setTipPercentage(parseFloat(editedTipPercentage));
        meal.calculate();
        earnings.calculate();
        render();
    });
}

//handles all main functions
function main() {
    handleSubmit();
    initialize();
}

//resets all values to 0 and renders the DOM
function initialize () {
    render();
}

main();