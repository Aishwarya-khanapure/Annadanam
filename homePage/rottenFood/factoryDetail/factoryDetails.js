const factoryArray = [
  {
    name: "Ak Factory",
    distance: "2 Km",
    employees: 60,
    logoImage: "factoryLogo1.jpg",
    factoryImage: "factory1.jpg",
    founderInfo: "John Doe founded Factory A with a vision to revolutionize the manufacturing industry.",
    additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
  },
  {
    name: "Agro production",
    distance: "2 Km",
    employees: 60,
    logoImage: "factoryLogo2.jpg",
    factoryImage: "factory2.jpg",
    founderInfo: "John Doe founded Factory A with a vision to revolutionize the manufacturing industry.",
    additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
  },
  {
    name: "Aminal Food Factory",
    distance: "2 Km",
    employees: 60,
    logoImage: "factoryLogo3.png",
    factoryImage: "factory3.jpg",
    founderInfo: "John Doe founded Factory A with a vision to revolutionize the manufacturing industry.",
    additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
  },
  {
    name: "Food Waste Management",
    distance: "2 Km",
    employees: 60,
    logoImage: "factoryLogo4.jpg",
    factoryImage: "factory4.jpg",
    founderInfo: "John Doe founded Factory A with a vision to revolutionize the manufacturing industry.",
    additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt non corporis repellat consectetur! Soluta, obcaecati. Dolores, blanditiis doloribus quam laborum dolorem voluptatum, magnam unde culpa porro beatae quibusdam voluptates?"
  },
];

function renderFactoryDetails(factory) {
  document.getElementById('factoryName').innerText = factory.name;
  console.log(factory.name);
  document.getElementById('distance').innerText = factory.distance + ' away from you';
  document.getElementById('peopleCount').innerText = factory.employees + ' employees in factory';
  document.getElementById('founderInfo').innerText = factory.founderInfo;
  document.getElementById('additionalInfo').innerText = factory.additionalInfo;
  document.getElementById('logoImage').src = factory.logoImage;
  document.getElementById('factoryImage').src = factory.factoryImage;
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const selectedFactoryName = getQueryParam('factory');
console.log(selectedFactoryName);
const selectedFactory = factoryArray.find(factory => factory.name === selectedFactoryName);

if (selectedFactory) {
  renderFactoryDetails(selectedFactory);
} else {
  // Handle the case where the factory is not found
  alert('Factory not found.');
}

let requestButton=document.getElementById('requestBtn');
requestButton.addEventListener("click",function(){
    window.location.href=`../loading/loading.html?ngo=${encodeURIComponent(selectedFactoryName)}`;
    console.log(ngo);
})
