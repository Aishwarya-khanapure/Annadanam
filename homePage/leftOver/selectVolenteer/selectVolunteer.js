document.addEventListener('DOMContentLoaded', function () {
    const volunteerListContainer = document.getElementById('volunteerBox');

    function createVolunteerHTML(volunteer, index) {
        return `
            <div class="volunteer-list">
                <div class="profile-picture">
                    <img src="${volunteer.imageSrc}" id="volunteerImage">
                </div>
                <div class="details">
                <p class="volunteer-name">${volunteer.name}</p>
                    <button>Call <i class="fa-solid fa-phone"></i></button>
                    <button>Chat <i class="fa-brands fa-rocketchat"></i></button>
                    <button class="details-button" data-index="${index}">Request</button>
                </div>
            </div>
    
        `;
    }
    
    function renderVolunteerList() {
        const volunteerArray = JSON.parse(localStorage.getItem('volunteerData')) || [];
        console.log(volunteerArray);

        volunteerArray.forEach((volunteer, index) => {
            const volunteerHTML = createVolunteerHTML(volunteer, index);
            volunteerListContainer.innerHTML += volunteerHTML;

        });
    }

    renderVolunteerList();
    


const detailsButtons = document.querySelectorAll('.details-button');
console.log(detailsButtons);


    detailsButtons.forEach(button => {
    button.addEventListener('click', function () {
            console.log("button click");
            const index = this.dataset.index;
            console.log(index);

            const volunteerArray = JSON.parse(localStorage.getItem('volunteerData')) || [];
            console.log(volunteerArray);

            if (index !== undefined && volunteerArray[index] !== undefined) {
                const clickedVolunteer = volunteerArray[index];
                const volunteerName = clickedVolunteer.name;
                console.log(volunteerName);

                // Increment the counter for the clicked volunteer
                clickedVolunteer.counter = (clickedVolunteer.counter || 0) + 1;

                // Save the updated volunteerData back to local storage
                localStorage.setItem('volunteerData', JSON.stringify(volunteerArray));
                window.location.href = `../loading/loading.html?vName=${encodeURIComponent(volunteerName)}`;
            } else {
                console.error('Invalid index or undefined volunteerArray[index]');
            }
        });
    });
});
