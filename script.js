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

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérification simple des informations d'identification
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('authenticated-content').style.display = 'block';
        document.getElementById('public-content').style.display = 'none';
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
}
