let loginMainBtn = document.getElementById('loginMainBtn');
loginMainBtn.addEventListener('click', () => {
    window.location.href="../welcome/index.html"
})
const volunteerDataString = localStorage.getItem('volunteerData');
console.log(volunteerDataString);
// Check if volunteer data exists
if (volunteerDataString) {
    // Parse the JSON string to get an object
    const volunteerData = JSON.parse(volunteerDataString);

    // Access the volunteer name
    const volunteerName = volunteerData.name;

    // Log the volunteer name
    console.log(volunteerName);
} else {
    console.error('No volunteer data found in LocalStorage.');
}