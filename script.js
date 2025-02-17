document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    const appointmentsList = document.getElementById('appointments-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const description = document.getElementById('description').value;

        const appointmentDiv = document.createElement('div');
        appointmentDiv.classList.add('appointment');
        appointmentDiv.innerHTML = `
            <strong>Date :</strong> ${date}<br>
            <strong>Heure :</strong> ${time}<br>
            <strong>Description :</strong> ${description}
        `;

        appointmentsList.appendChild(appointmentDiv);

        form.reset();
    });
});
