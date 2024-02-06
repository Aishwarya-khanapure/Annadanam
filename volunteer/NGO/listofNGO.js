const ngoArray = [
    { name: "Swadhar IDWC", distance: "2 Km", people: 60, image: "swadhar-icon.png" },
    { name: "Jeevadayani NGO", distance: "1.5 Km", people: 40, image: "jeevdayani ngo.jpg" },
    { name: "Birla NGO Foundation", distance: "2.5 Km", people: 70, image: "birla-ngo.jpg" },
    { name: "Seva Sadan NGO", distance: "1 Km", people: 20, image: "seva sadan-ngo.jpg" }
                ];
                document.addEventListener('DOMContentLoaded', function () {
                    const ngoListContainer = document.getElementById('ngoListContainer');

                    function createNgoHTML(ngo,index) {
                        return `
                            <div class="ngo-list">
                                <div class="logo">
                                    <img src="${ngo.image}">
                                </div>
                                <div class="details">
                                    <p class="Ngo-name">${ngo.name}</p>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>${ngo.distance} away from you</p>
                                    <i class="fa-solid fa-user-plus"></i>
                                    <p>${ngo.people} people in NGO</p>
                                    <button class="details-button" data-index="${index}">Details</button>
                                </div>
                            </div>
                        `;
                    }
    
                    function renderNgoList(ngoArray) {
                        ngoArray.forEach((ngo,index) => {
                            const ngoHTML = createNgoHTML(ngo,index);
                            console.log(ngo);
                            console.log(index);
                            ngoListContainer.innerHTML += ngoHTML;
                        });
                    }
                    renderNgoList(ngoArray);
    
                    const detailsButtons = document.querySelectorAll('.details-button');
                    
                    
                    detailsButtons.forEach(button => {
                        button.addEventListener('click', function (event) {
                            console.log("button click");
                            const btn=event.target.dataset.index;
                            console.log(btn);
                            const index = this.dataset.index;
                            console.log(index)
                            if (index !== undefined && ngoArray[index] !== undefined) {
                                const ngoName = ngoArray[index].name;
                                console.log(ngoName);
                                window.location.href = `../NGO/NgoDetails/NgoDetails.html?ngo=${encodeURIComponent(ngoName)}`;
                            } else {
                                console.error('Invalid index or undefined ngoArray[index]');
                            }
                        });
                    });


                });
                

