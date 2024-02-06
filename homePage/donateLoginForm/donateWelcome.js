document.getElementById("donateForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("Name").value;
  var contactNumber = document.getElementById("ContactNo").value;
  var address = document.getElementById("Address").value;

  // Create an object with donor details
  var donorDetails = {
      name: name,
      contactNumber: contactNumber,
      address: address
  };
  console.log(donorDetails);

  // Encode the object as a Base64 string
  var donorDetailsJson = JSON.stringify(donorDetails);
  

  // Redirect to the next page with the Base64-encoded string as a query parameter
  window.location.href = '../donationOptions/categoryOfFood.html?donorDetails=' + encodeURIComponent(donorDetailsJson);
});