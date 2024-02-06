document.getElementById('submit').addEventListener('click', function (event) {
   
    event.preventDefault();

    alert ("Thanks for contacting us we will connect you as soon as possible")

    var targetUrl = '../donationHomePage.html';

    // Redirect to the specified URL
    window.location.href = targetUrl;
});
