function showAppointment() {
    document.getElementById('appointment').style.display = 'block';
}

function closeAppointment() {
    document.getElementById('appointment').style.display = 'none';
}

function submitAppointment(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    alert("Appointment Request:\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nDate: " + date);
    closeAppointment();
}

const reviewBoxes = document.querySelectorAll('.review-box');
reviewBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        box.style.transition = 'transform 0.3s';
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});



