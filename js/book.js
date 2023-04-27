// initialize start date picker
const startDatePicker = flatpickr("#takeoff-date", {
    minDate: "today",
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
      // set minimum date of end date picker to be the day after the selected date on the start date picker
      const minDate = selectedDates[0] ? selectedDates[0].fp_incr(1) : "today";
      endDatePicker.set("minDate", minDate);
      // clear end date picker if its value is less than the new minimum date
      if (endDatePicker.selectedDates[0] < minDate) {
        endDatePicker.clear();
      }
    }
  });

  // initialize end date picker
  const endDatePicker = flatpickr("#return-date", {
    minDate: "today",
    dateFormat: "Y-m-d"
  });


const form = document.getElementById('booking-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Show the success message
    form.style.display = 'none';
    successMessage.style.display = 'block';
});

$(function(){
    $("#header").load("/html/header.html"); 
});