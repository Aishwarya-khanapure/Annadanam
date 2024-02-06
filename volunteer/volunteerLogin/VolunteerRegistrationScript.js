const photoUpload = document.getElementById('photoUpload');
    const previewImage = document.getElementById('previewImage');

    // Handle the change event of the file input
    photoUpload.addEventListener('change', function (event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        // Set up the reader to read the file as a data URL
        reader.readAsDataURL(file);

        // Set the preview image source when the reader has loaded the file
        reader.onload = function (e) {
          previewImage.src = e.target.result;
          previewImage.style.display = 'block';
        };
      }
    });

    
// See leter start and end time logic NOTCOMPLETED------------------------------------------------------
function validateTime() {
  var startTimeInput = document.getElementById("startTime");
  var endTimeInput = document.getElementById("endTime");

  // Get the entered start and end times
  var startTime = startTimeInput.valueAsDate;
  var endTime = endTimeInput.valueAsDate;

  // Check if the end time is less than the start time
  if (startTime && endTime && endTime < startTime) {
    alert("End time cannot be less than the start time.");
    endTimeInput.value = ""; // Reset the end time input
  }
}
// See leter start and end time logic NOTCOMPLETED---------------------------------------------------


    const form = document.getElementById('volunteerForm');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const volunteerData = {
                name: document.getElementById('Name').value,
                contact: document.getElementById('ContactNo').value,
                address: document.getElementById('Address').value,
                Email: document.getElementById('Email').value,
                imageSrc: document.getElementById('previewImage').src,
                startTime: document.getElementById('startTime').value,
                endTime: document.getElementById('endTime').value,
                counter:0
            };


           console.log(volunteerData);
            // Here you can save the data to local storage or perform other action

            const existingData = JSON.parse(localStorage.getItem('volunteerData')) || [];
            console.log(existingData);
            
            const isAlreadyRegistered = existingData.some(data => data.contact === volunteerData.contact);

            if (!isAlreadyRegistered) {
                // Add the new volunteerData to the existing array
                existingData.push(volunteerData);
        
                // Save the updated array back to local storage
                localStorage.setItem('volunteerData', JSON.stringify(existingData));
        
                console.log("Volunteer Data saved successfully:", volunteerData);
                window.location.href=`../donationReq/DonationRequest.html?volunteerName=${encodeURIComponent(volunteerData.name)}`;
            } else {
                console.log("User is already registered.");
                // You can optionally show a message to the user indicating that they are already registered
                window.location.href=`../donationReq/DonationRequest.html?volunteerName=${encodeURIComponent(volunteerData.name)}`;
            }
        });
        