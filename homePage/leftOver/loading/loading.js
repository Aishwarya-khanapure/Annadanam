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
const selectedVName = getQueryParam('vName');
  console.log("Selected NGO Name:", selectedVName);
  document.getElementById('ngoNameDisplay').innerText=selectedVName;

var progressBar = document.getElementById("myProgress");

function completeProgress() {
  updateProgress(100);
  // Make sure the URL is constructed correctly without encoding issues
  const redirectURL = `../accepted/donationAccepted.html?vName=${encodeURIComponent(selectedVName)}`;
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