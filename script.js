function updateDateTime() {
    const now = new Date();
    const options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const formattedDateTime = now.toLocaleString('en-US', options).replace(',', ', ');
    document.getElementById('current-datetime').textContent = formattedDateTime;
}

// Update the time immediately on page load
updateDateTime();

// Then, update the time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);