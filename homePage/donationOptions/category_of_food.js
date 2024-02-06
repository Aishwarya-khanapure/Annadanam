let sumbtButton=document.getElementById('submitBtn');
sumbtButton.addEventListener('click',function(){
  var radioButtons = document.getElementsByName('category');

  for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          var selectedRadioButtonId = radioButtons[i].id;
          console.log("Selected radio button ID: " + selectedRadioButtonId);
          break
      }
    }
    if (selectedRadioButtonId == 'radio1') {
      window.location.href = "../rawFood/listofNGO's.html";  
  } else if (selectedRadioButtonId == 'radio2') {
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
    console.log(donorDetailsJson);
      window.location.href = '../leftOver/leftOverFood.html?donorDetails=' + encodeURIComponent(donorDetailsJson);
  } else if (selectedRadioButtonId == 'radio3') {
      window.location.href = '../rottenFood/listOfFactory.html'; 
      
  } else {
      alert('Please select a category.');
  }
  
})
