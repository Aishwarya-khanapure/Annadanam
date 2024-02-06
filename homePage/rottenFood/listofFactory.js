const factoryArray = [
  { name: "Ak Factory", distance: "2 Km", employees: 60, image: "factoryLogo1.jpg" },
  { name: "Agro production", distance: "1.5 Km", employees: 40, image: "factoryLogo2.jpg" },
  { name: "Aminal Food Factory", distance: "2.5 Km", employees: 70, image: "factoryLogo3.png" },
  { name: "Food Waste Management", distance: "1 Km", employees: 20, image: "factoryLogo4.jpg" }
];

document.addEventListener('DOMContentLoaded', function () {
  const factoryListContainer = document.getElementById('factoryListContainer');

  function createFactoryHTML(factory, index) {
      return `
          <div class="factory-list">
              <div class="logo">
                  <img src="${factory.image}">
              </div>
              <div class="details">
                  <p class="factory-name">${factory.name}</p>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>${factory.distance} away from you</p>
                  <i class="fa-solid fa-user-plus"></i>
                  <p>${factory.employees} employees in factory</p>
                  <button class="details-button" data-index="${index}">Details</button>
              </div>
          </div>
      `;
  }

  function renderFactoryList(factoryArray) {
      factoryArray.forEach((factory, index) => {
          const factoryHTML = createFactoryHTML(factory, index);
          factoryListContainer.innerHTML += factoryHTML;
      });
  }

  renderFactoryList(factoryArray);

  const detailsButtons = document.querySelectorAll('.details-button');

  detailsButtons.forEach(button => {
      button.addEventListener('click', function (event) {
          const index = event.target.dataset.index;
          if (index !== undefined && factoryArray[index] !== undefined) {
              const factoryName = factoryArray[index].name;
              window.location.href = `../rottenFood/factoryDetail/factoryDetails.html?factory=${encodeURIComponent(factoryName)}`;
          } else {
              console.error('Invalid index or undefined factoryArray[index]');
          }
      });
  });
});
