// Classes

// Everything related to the calculation
class Insurance {
    

    constructor(make, year, level) {
        this.make = make;
        this.year= year;
        this.level = level;
    }

    // Calculate the price for the current quotation
        calculateQuotation(insurance) {
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

            // Chck the level of protection

            const level = insurance.level;

            price = this.calculateLevel(price, level)

            return price;
        }

        getYearDifference(year) {
            return new Date().getFullYear() - this.year;
        }

        // Adds the price based  on the level
        calculateLevel(price, level) {

            /*
            Bacis insurance is going to increasethe value by 30%
            Complete Insurance is going to increase the value by 50%
            */

            if(level === 'basic') {
                price = price * 1.30;
            } else {
                price = price * 1.50;
            }
            return price;
        }
}


// Objects
class HTMLUI {
    
        // Displays the last twenty years on the UI
        displayYears() {
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

        displayError(message) {

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

        //Prints the result into the HTMLUI
        showResults(price, insurance) {
            const result = document.getElementById('result');

            const div = document.createElement('div');

            let make = insurance.make;

            // Get make form the object and assign a readable name

            switch(make) {
                case '1':
                    make = 'American';
                    break;
                case '2':
                    make = 'Asian';
                    break;
                    case '3':
                    make = 'European';
                    break;
            }

            

            div.innerHTML = `
                <p class="header">Summary</p>
                <p>Make: ${make}</p>
                <p>Year: ${insurance.year}</p>
                <p>Level: ${insurance.level}</p>
                <p class="total">Total: $ ${price}</p>
            `;

            const spinner = document.querySelector('#loading img');
            spinner.style.display = 'block';

            setTimeout(function() {
                spinner.style.display = 'none';
                result.appendChild(div);
            }, 3000)

        }
}
