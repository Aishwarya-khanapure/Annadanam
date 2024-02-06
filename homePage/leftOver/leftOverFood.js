 let incrementButton=document.getElementsByClassName('incrementButton');
   let decrementButton=document.getElementsByClassName('decrementButton');
   for(let i=0;i<incrementButton.length;i++){
    let button=incrementButton[i];
    button.addEventListener('click',function(event){
      let buttonClicked=event.target;
      let input=buttonClicked.parentElement.children[1];
      let inputValue=input.value;
      let newValue=parseInt(inputValue)+1;
      input.value=newValue;
    });
  }
    for(let i=0;i<decrementButton.length;i++){
      let button2=decrementButton[i];
      button2.addEventListener('click',function(event){
        let buttonClicked2=event.target;
        let input2=buttonClicked2.parentElement.children[1];
        let inputValue2=input2.value;
        if (inputValue2 >=1) {
          let newValue2=parseInt(inputValue2)-1;
          input2.value=newValue2;
        }  
      });
   }

   

// Time Calculation logic
function validateTime() {
  var startTimeInput = document.getElementById("startTime");
  var currentTime = new Date();
  var selectedTime = new Date(currentTime.toDateString() + " " + startTimeInput.value);

  // Check if the selected time is greater than the current time
  if (selectedTime <= currentTime) {
    // Calculate the time passed in hours and minutes
    var timeDifference = currentTime - selectedTime;
    var hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutesPassed = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    // Display the time passed
    var displayText = "";
    if (hoursPassed > 0) {
      displayText += hoursPassed + " hour" + (hoursPassed > 1 ? "s" : "") + " ";
    }
    if (minutesPassed > 0) {
      displayText += minutesPassed + " minute" + (minutesPassed > 1 ? "s" : "");
    }
    document.getElementById("timeCal").value = displayText.trim() || "0 minutes ago";
  } else {
    // Invalid time
    alert("Please select a time that is not in the future.");
    startTimeInput.value = ""; // Reset the start time input
    document.getElementById("timeCal").value = ""; // Reset the timeCal input
  }
}

// localstorage
function getQueryParameters() {
  var queryParams = {};
  var queryString = window.location.search.substring(1);
  var pairs = queryString.split('&');

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);

    queryParams[key] = value;
  }

  return queryParams;
}
var donorDetailsJson = getQueryParameters().donorDetails || '';
var donorDetailsObject = JSON.parse(decodeURIComponent(donorDetailsJson));
localStorage.setItem('donorDetails', JSON.stringify(donorDetailsObject)); 



let submintButton = document.getElementById("submitButton");
submintButton.addEventListener("click", function (event) {
  console.log("hiii");
  var timeCalValue = document.getElementById("timeCal").value.trim();
  var timeCalMinutes = parseInt(timeCalValue);
  if (timeCalMinutes >= 20) {
    alert("Food is expired because time passed since cooking is 20 hours. You can only donate to the Factory.");
    window.location.href = "../RottenFood/listOfFactory.html";
  } else {
    var vegChecked = document.getElementById("checkbox1").checked;
    var nonVegChecked = document.getElementById("checkbox2").checked;

    if (!vegChecked && !nonVegChecked) {
      alert("Please select Veg or Non-Veg");
      return false;
    }

    if (timeCalValue === "") {
      alert("Please enter food prepared time");
      return false;
    }

    // Redirect based on conditions
    if (vegChecked || nonVegChecked) {
      window.location.href = "selectVolenteer/SelectVolenteer.html";
    } else {
      alert("Please select Veg or Non-Veg");
    }
  }
});