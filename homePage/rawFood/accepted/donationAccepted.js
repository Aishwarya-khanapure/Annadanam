document.addEventListener('DOMContentLoaded', function () {
  let Otp = document.getElementById("otpField");
  let otpGenerate = Math.floor(Math.random() * 10000);
  Otp.innerHTML = otpGenerate;
});

let okayButton=document.getElementById('okBtn');
okayButton.addEventListener("click",function(){
  window.location.href="thankyou.html";
})

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get(param);
  return value;
}
const selectedNgoName = getQueryParam('ngo');
  console.log("Selected NGO Name:", selectedNgoName);
  document.getElementById('ngoNamePlaceholder').innerText=selectedNgoName;
