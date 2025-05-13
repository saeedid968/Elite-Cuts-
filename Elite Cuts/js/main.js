const firebaseConfig = {
    apiKey: "AIzaSyBjXuPiA-QClF83K8zf5RdQCFhPC0SiZX8",
    authDomain: "elitecuts-6f5dc.firebaseapp.com",
    databaseURL: "https://elitecuts-6f5dc-default-rtdb.firebaseio.com",
    projectId: "elitecuts-6f5dc",
    storageBucket: "elitecuts-6f5dc.firebasestorage.app",
    messagingSenderId: "971342540860",
    appId: "1:971342540860:web:fb3fd1a955f78a34a5d339"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const appointmentData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        service: document.getElementById("service").value,
        barber: document.getElementById("barber").value,
        notes: document.getElementById("notes").value,
        timestamp: new Date().toISOString()
    };

    database.ref("appointments").push(appointmentData)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Appointment Booked!',
                html: 'Your booking has been submitted successfully.<br>Make sure to be on time.',
                background: '#f8f9fa',
                color: '#2c3e50',
                iconColor: '#d4af37',
                confirmButtonColor: '#d4af37',
                confirmButtonText: 'Got it!',
                customClass: {
                    popup: 'swal-custom-popup',
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-html'
                }
            });

            document.getElementById("bookingForm").reset();
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Booking Failed',
                text: error.message,
                background: '#1a1a1a',
                color: '#f8f9fa',
                iconColor: '#d4af37',
                confirmButtonColor: '#d4af37',
                confirmButtonText: 'Try Again',
                customClass: {
                    popup: 'swal-custom-popup',
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-html'
                }
            });
        });


});
