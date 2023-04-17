// Wait for the DOM to load before running any JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Get references to the form and confirmation message elements
    const form = document.querySelector('form');
    const confirmationMessage = document.querySelector('#confirmation-message');

    // Define the available lunch options
    const lunchOptions = ['vegetarian', 'chicken', 'beef'];

    // Define the time frame during which lunch can be ordered
    const orderStartTime = new Date('2023-04-04T09:00:00Z');
    const orderEndTime = new Date('2023-04-04T12:00:00Z');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Check if the order is being placed within the designated time frame
        const now = new Date();
        if (now < orderStartTime || now > orderEndTime) {
            alert('Orders can only be placed between 9:00am and 12:00pm.');
            return; // Exit the function early if the order is outside the time frame
        }

        // Get the user input from the form
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const lunchOption = form.elements['lunch-options'].value;

        // Submit the order to the server (replace this with your own code)
        submitOrder(name, email, lunchOption);

        // Show the confirmation message
        confirmationMessage.style.display = 'block';
    });

    // Set a reminder for occasional users to order lunch
    const reminderInterval = setInterval(function() {
        const now = new Date();
        if (now > orderStartTime && now < orderEndTime) {
            alert('Reminder: Don\'t forget to order lunch today!');
        }
    }, 1000 * 60 * 60 * 4); // Show the reminder every 4 hours (adjust as needed)

    // Define a function to submit the order to the server
    function submitOrder(name, email, lunchOption) {
        // Replace this with your own code to submit the order to the server
        console.log(`Submitting order: Name: ${name}, Email: ${email}, Lunch option: ${lunchOption}`);
    }

});