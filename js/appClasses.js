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
                // Clear rthe previous quotes
                const prevResult = document.querySelector('#result div');
                if(prevResult != null) {
                    prevResult.remove();
                }

                const insurance = new Insurance(make, year, level);
                const price = insurance.calculateQuotation(insurance);

                // Prtint result into HTMLUI
                html.showResults(price, insurance);
            }
        });

}

