// Variables





// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Create the <options? fo the years
    const html = new HTMLUI;
    html.displayYears();

});





// Objects
function HTMLUI() {

}

// Displays the last twenty years on the UI
HTMLUI.prototype.displayYears = function() {
    // Max and minumium years
    const max = new Date().getFullYear(), 
            min = max - 20;;

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

