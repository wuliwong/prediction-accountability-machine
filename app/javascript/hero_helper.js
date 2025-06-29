// app/javascript/hero_helper.js

import 'cally';

document.addEventListener('turbo:load', () => {
  const datePicker = document.getElementById('date_picker');
  const timePicker = document.getElementById('time_picker');
  const targetField = document.getElementById('prediction_target_date');

  let selectedDate = datePicker.value ? new Date(datePicker.value) : null;

  if (timePicker && !timePicker.value) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timePicker.value = `${hours}:${minutes}`;
  }

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

  updateHidden();
});