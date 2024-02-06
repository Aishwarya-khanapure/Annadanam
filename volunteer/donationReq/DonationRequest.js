const urlParams = new URLSearchParams(window.location.search);
    const volunteerName = urlParams.get('volunteerName');
    const volunteerArray = JSON.parse(localStorage.getItem('volunteerData')) || [];

    // Check if the volunteerName parameter is present
    if (volunteerName) {
        // Set the text of the element with ID 'volunteerNameDisplay'
        const volunteerNameDisplay = document.getElementById('volunteerNameDisplay');
        volunteerNameDisplay.textContent = `${decodeURIComponent(volunteerName)}`;
    }

    // Find the volunteer with the matching username
    const currentVolunteer = volunteerArray.find(volunteer => volunteer.name === volunteerName);
    console.log(currentVolunteer);

    if (currentVolunteer) {
        // Check and display the counter value in the bell icon
        const bellIconCounter = document.getElementById('bellIconCounter');
        console.log(bellIconCounter);
        const counterValue = currentVolunteer.counter || 0;
        if (counterValue > 0) {
            bellIconCounter.textContent = counterValue;
    
            const bellIcon = document.getElementById('bell');
            console.log(bellIcon);
            bellIcon.addEventListener('click', () => {
                console.log("hiii");
                window.location.href=`../donationDetail/DonationDetail.html?volunteerName=${encodeURIComponent(volunteerName)}`;
            })
            
    }

}

    let loginMainBtn = document.getElementById('loginMainBtn');
    loginMainBtn.addEventListener('click', () => {
        if(volunteerArray.counter > 0){
            alert("You have donor request please complete that")
        }
        else{
                    window.location.href="../../welcome/index.html"
        }
})



    