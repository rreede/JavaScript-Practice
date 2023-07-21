
const userName = document.getElementById('username');


function checkUsername(e) {
    console.log(this.value);
}

userName.addEventListener('change',checkUsername);

const checkBoxAgeConsent = document.getElementById('consentAge');

checkBoxAgeConsent.addEventListener('change', (e) => {

    console.log(checkBoxAgeConsent.value);
    console.log(checkBoxAgeConsent.checked);
});






function init() {
    const messageContainer = document
    .getElementById('selection'); // Container for messages
    const order = document.getElementById('order'); // <select> element
    order.addEventListener('change', updateOrder); // Register listener
    function updateOrder(event) { // this is of the ...
    // ... HTMLSelectElement type
    const value = this.value; // The currently selected value
    const index = this.selectedIndex; // Index of the selected option
    const option = this.item(index); // Selected <option> element
    const text = this.item(index).text; // Text of the <option> element
    const message = text + ' (' + value + ')'; // Generate message
    messageContainer.innerText = message; // Display message

    }


    function scrolling(e) {
        console.log(window.scrollY);
    }

let scroll_location = window.scrollY;

scroll_location.addEventListener('scroll', scrolling);


}

window.setTimeout(function () {
console.log('Hello');
}, 5000);

document.addEventListener('DOMContentLoaded', init);


XMLHttpRequest();