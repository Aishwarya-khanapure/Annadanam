function updateProgress(newValue) {
  progressBar.value = newValue;
  progressBar.innerHTML = newValue + "%";
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get(param);
  console.log(`QueryParam(${param}):`, value);
  return value;
}
const selectedNgoName = getQueryParam('ngo');
  console.log("Selected NGO Name:", selectedNgoName);
  document.getElementById('ngoNameDisplay').innerText=selectedNgoName;

var progressBar = document.getElementById("myProgress");

function completeProgress() {
  updateProgress(100);
  // Make sure the URL is constructed correctly without encoding issues
  const redirectURL = `../accepted/donationAccepted.html?ngo=${encodeURIComponent(selectedNgoName)}`;
  console.log("Redirect URL:", redirectURL);

  window.location.href = redirectURL;
}

setTimeout(function () {
  updateProgress(25);
  setTimeout(function () {
      updateProgress(50);
      setTimeout(function () {
          updateProgress(75);
          setTimeout(function () {
              updateProgress(100);
              completeProgress();
          }, 2000);
      }, 2000);
  }, 2000);
}, 2000);