// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import 'cally';

document.addEventListener('turbo:load', () => {
  const datePicker = document.getElementById('date_picker');
  const timePicker = document.getElementById('time_picker');
  const targetField = document.getElementById('prediction_target_date');

  let selectedDate = datePicker.value ? new Date(datePicker.value) : null;

  datePicker.addEventListener('change', (event) => {
    selectedDate = new Date(event.target.value);
    updateHidden();
  });

  timePicker.addEventListener('change', updateHidden);

  function updateHidden() {
    if (!selectedDate) return;
    const [h, m] = (timePicker.value || '00:00').split(':');
    selectedDate.setHours(Number(h));
    selectedDate.setMinutes(Number(m));
    targetField.value = selectedDate.toISOString();
  }

  updateHidden(); // initialize on load
});