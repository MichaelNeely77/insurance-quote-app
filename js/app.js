// Variables
const form = document.getElementById('request-quote'); 
const html = new HTMLUI;



// Event Listeners
eventListeners();
function eventListeners() {
        document.addEventListener('DOMContentLoaded', function() {
        // Create the <options? fo the years
        
        html.displayYears();

    });

        // When form is submitted.
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const make = document.getElementById('make').value;
            const year = document.getElementById('year').value;

            const level = document.querySelector('input[name="level"]:checked').value;

            // Check that all the fields have something
            if(make === '' || year === '' || level ===- '') {
                html.displayError('All the fields are mandatory')
            } else {
                const insurance = new Insurance(make, year, level);
                const price = insurance.calculateQuotation(insurance);
            }
        });

}

// Everything related to the calculation
function Insurance(make, year, level) {
    this.make = make;
    this.year= year;
    this.level = level;

}

// Calculate the price for the current quotation
Insurance.prototype.calculateQuotation = function(insurance) {
    let price;
    const base = 2000;

    const make = insurance.make;

    switch(make) {
        case '1':
            price = base * 1.15;
            break;
        case '2':
            price = base * 1.05;
            break;
        case '3':
            price = base * 1.35;
            break;
    }
    
    const year = insurance.year;
    const difference = this.getYearDifference(year);

    console.log(difference);
    // Each year the cost of insurance is going to be 3% cheaper
    price = price - ((difference * 3) * price) /100;

    console.log(price);


}

Insurance.prototype.getYearDifference = function(year) {
    return new Date().getFullYear() - this.year;
}

// Objects
function HTMLUI() {

}

// Displays the last twenty years on the UI
HTMLUI.prototype.displayYears = function() {
    // Max and minumium years
    const max = new Date().getFullYear(), 
            min = max - 20;

    console.log(max);
    console.log(min);

    // Generate the list with the last 20 years
    const selectYears = document.getElementById('year');

    // Prnit the values
    for(let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
}

HTMLUI.prototype.displayError = function(message) {

    const div = document.createElement('div');

    div.classList = 'error';

    div.innerHTML = `
        <p>${message}</p>
    `;
    form.insertBefore(div, document.querySelector('.form-group'));

    // REmove error
    setTimeout(function() {
        document.querySelector('.error').remove();
    }, 3000);
}