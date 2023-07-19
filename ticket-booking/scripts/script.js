
// Function to display booking details
function displayBookingDetails(details) {
  const detailsContainer = document.getElementById('bookingDetailsContainer');
  detailsContainer.innerHTML = `
    <h2>Booking Details:</h2>
    <p><strong>Name:</strong> ${details.name}</p>
    <p><strong>Email:</strong> ${details.email}</p>
    <p><strong>Quantity:</strong> ${details.quantity}</p>
    <p><strong>Seat:</strong> ${details.seat}</p>
    <p><strong>Date:</strong> ${details.date}</p>
    <p><strong>Time:</strong> ${details.time}</p>
  `;
}

const form = document.getElementById('bookingForm');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const quantityInput = document.getElementById('ticketQuantity');
  const seatInput = document.getElementById('seat');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');

  // Get values from input fields
  const name = nameInput.value;
  const email = emailInput.value;
  const quantity = quantityInput.value;
  const seat = seatInput.value;
  const date = dateInput.value;
  const time = timeInput.value;

  // Check if any field is empty
  if (name === '' || email === '' || quantity === '' || seat === '' || date === '' || time === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create booking details object
  const bookingDetails = {
    name: name,
    email: email,
    quantity: quantity,
    seat: seat,
    date: date,
    time: time
  };

  // Display booking details
  displayBookingDetails(bookingDetails);

  // Reset the form
  form.reset();
});
