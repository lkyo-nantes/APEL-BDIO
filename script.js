document.addEventListener('DOMContentLoaded', () => {
    const appointmentsList = document.getElementById('appointments-list');

    // Charger les rendez-vous depuis le fichier JSON
    fetch('appointments.json')
        .then(response => response.json())
        .then(appointments => {
            appointments.forEach(appointment => {
                const appointmentDiv = document.createElement('div');
                appointmentDiv.classList.add('appointment');
                appointmentDiv.innerHTML = `
                    <strong>Date :</strong> ${appointment.date}<br>
                    <strong>Heure :</strong> ${appointment.time}<br>
                    <strong>Description :</strong> ${appointment.description}
                `;
                appointmentsList.appendChild(appointmentDiv);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des rendez-vous:', error));
});
