document.addEventListener('DOMContentLoaded', function () {
	// Retrieve donor details from local storage
	const donorDetails = JSON.parse(localStorage.getItem('donorDetails')) || {};
	console.log(donorDetails);

	// Set donor name and address in the input fields
	const nameInput = document.getElementById('name');
	console.log(nameInput);
	const addressInput = document.getElementById('map');
	console.log(addressInput);
	const contactNumber = document.getElementById('contact');
	console.log(addressInput);

	nameInput.innerText = donorDetails.name || '';
	addressInput.innerText = donorDetails.address
	|| '';
	contactNumber.innerHTML=donorDetails.contactNumber || ' ';

	const urlParams = new URLSearchParams(window.location.search);
	const urlVolunteerName = urlParams.get('volunteerName');
	console.log(urlVolunteerName);

	let btn=document.getElementById("doneBtn");
	btn.addEventListener("click",function(){
		let otpValue = document.getElementById('OTP').value;
		let Qcheck = document.getElementById('check').checked;

        if (otpValue.trim() === '' || !Qcheck) {
					alert("Please enter OTP and check Quality");
        } else {
					const volunteerArray = JSON.parse(localStorage.getItem('volunteerData')) || [];
					console.log(volunteerArray);
					const currentVolunteer = volunteerArray.find(volunteer => volunteer.name === urlVolunteerName);
					console.log(currentVolunteer);
					if (currentVolunteer) {
						// Set the counter to zero for the current volunteer
						currentVolunteer.counter = 0;
						volunteerName=currentVolunteer.name;
						// Save the updated volunteerData back to local storage
						localStorage.setItem('volunteerData', JSON.stringify(volunteerArray));
						window.location.href=`../donationReq/DonationRequest.html?volunteerName=${encodeURIComponent(volunteerName)}`;
				}
		    
		}
	})
});