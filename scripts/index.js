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
                    <label for="meal-price">Base Meal Price: $</label>
                    <input type="text" id="meal-price" class="meal-price-entry" 
                    name="meal-price" placeholder="9.99" required>
                    <p class="hidden-warning" id="price-warning"></p>
                </div>
                <div>
                    <label for="tax-rate">Tax Rate: %</label>
                    <input type="text" id="tax-rate" class="tax-rate-entry" 
                    name="tax-rate" required>
                    <p class="hidden-warning" id="tax-warning"></p>
                </div>
                <div>
                    <label for="tip-percentage">Tip Percentage: %</label>
                    <input type="text" id="tip-percentage" class="tip-percentage-entry" 
                    name="tip-percentage" required>
                    <p class="hidden-warning" id="tip-warning"></p>
                </div>
            </form>
            <div class="buttons">
                <button class="submit-button" id="submit-button">Submit</button>
                <button class="cancel-button" id="cancel-button">Cancel</button>
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

        <button class="reset-button" id="reset-button">Reset</button>
    </section>`;
    $('.js-main').html(htmlText);
}

//listens for form submission and sets variables based on input data
function handleSubmit() {
    $('#js-main').on('click','#submit-button', function(event){
        event.preventDefault();
        $('#price-warning').removeClass('showing-warning').addClass('hidden-warning');
        $('#tax-warning').removeClass('showing-warning').addClass('hidden-warning');
        $('#tip-warning').removeClass('showing-warning').addClass('hidden-warning');
        const basePrice = $('#meal-price').val();
        const taxRate = $('#tax-rate').val();
        const tipPercentage = $('#tip-percentage').val();
        if (isNaN(basePrice) || basePrice < 0 || basePrice === '') {
            let text = 'Please enter a valid base meal price';
            document.getElementById('price-warning').innerHTML = text;
            $('#price-warning').removeClass('hidden-warning').addClass('showing-warning');
        } else if (isNaN(taxRate) || taxRate < 0 || taxRate === '') {
            let text = 'Please enter a valid tax rate';
            document.getElementById('tax-warning').innerHTML = text;
            $('#tax-warning').removeClass('hidden-warning').addClass('showing-warning');
        } else if (isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage === '') {
            let text = 'Please enter a valid tip percentage';
            document.getElementById('tip-warning').innerHTML = text;
            $('#tip-warning').removeClass('hidden-warning').addClass('showing-warning');
        } else {
        meal.setTaxRate(parseFloat(taxRate));
        meal.setPrice(parseFloat(basePrice));
        meal.setTipPercentage(parseFloat(tipPercentage));
        meal.calculate();
        earnings.calculate();
        render();  
        }
        
    });
}

function handleCancel() {
    $('#js-main').on('click', '#cancel-button', function(event){
        event.preventDefault();
        let priceInput = document.getElementById('meal-price');
        priceInput.value = '';
        let taxInput = document.getElementById('tax-rate');
        taxInput.value = '';
        let tipInput = document.getElementById('tip-percentage');
        tipInput.value = '';
        $('#price-warning').removeClass('showing-warning').addClass('hidden-warning');
        $('#tax-warning').removeClass('showing-warning').addClass('hidden-warning');
        $('#tip-warning').removeClass('showing-warning').addClass('hidden-warning');
    });
}

function handleReset() {
    $('#js-main').on('click','#reset-button', function(event){
        event.preventDefault();
        earnings.reset();
        charges.reset();
        render();
    });
}

//handles all main functions
function main() {
    handleSubmit();
    handleCancel();
    handleReset();
    initialize();
}

//resets all values to 0 and renders the DOM
function initialize () {
    render();
}

main();