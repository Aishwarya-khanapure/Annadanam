const ngoArray = [
  {
    name: "Swadhar IDWC",
    distance: "2 Km",
    people: 60,
    logoImage: "swadhar-icon.png",
    ngoImage: "ngo3.jpg",
    founderInfo: "Meenakshi Apte was a Professor and HOD of Family and Child Welfare in TISS. She witnessed many cases of domestic violence against women.",
    additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
},
{
  name: "Jeevadayani NGO",
  distance: "2 Km",
  people: 60,
  logoImage: "jeevdayani ngo.jpg",
  ngoImage: "ngo1.jpg",
  founderInfo: "Meenakshi Apte was a Professor and HOD of Family and Child Welfare in TISS. She witnessed many cases of domestic violence against women.",
  additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
},
{
  name: "Birla NGO Foundation",
  distance: "2 Km",
  people: 60,
  logoImage: "birla-ngo.jpg",
  ngoImage: "ngo2.jpg",
  founderInfo: "Meenakshi Apte was a Professor and HOD of Family and Child Welfare in TISS. She witnessed many cases of domestic violence against women.",
  additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
},
{
  name: "Seva Sadan NGO",
  distance: "2 Km",
  people: 60,
  logoImage: "seva sadan-ngo.jpg",
  ngoImage: "ngo4.jpg",
  founderInfo: "Meenakshi Apte was a Professor and HOD of Family and Child Welfare in TISS. She witnessed many cases of domestic violence against women.",
  additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
}
];

function renderNgoDetails(ngo) {
  document.getElementById('ngoName').innerText = ngo.name;
  document.getElementById('distance').innerText = ngo.distance + ' away from you';
  document.getElementById('peopleCount').innerText = ngo.people + ' people in NGO';
  document.getElementById('founderInfo').innerText = ngo.founderInfo;
  document.getElementById('additionalInfo').innerText = ngo.additionalInfo;
  document.getElementById('logoImage').src = ngo.logoImage;
  document.getElementById('ngoImage').src = ngo.ngoImage;
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const selectedNgoName = getQueryParam('ngo');
const selectedNgo = ngoArray.find(ngo => ngo.name === selectedNgoName);

if (selectedNgo) {
  renderNgoDetails(selectedNgo);
} else {
  // Handle the case where the NGO is not found
  alert('NGO not found.');
}

let requestButton=document.getElementById('requestBtn');
requestButton.addEventListener("click",function(){
    window.location.href="../loading/loading.html";
})