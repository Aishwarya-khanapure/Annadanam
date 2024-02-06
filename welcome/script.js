sessionStorage.setItem('isLoggedIn', true);
const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.loginLink');
const registerLink=document.querySelector('.registerLink');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.iconClose');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
let loggedInUser = null; 

let resButton = document.getElementById('RegisterBtn');

resButton.addEventListener('click', () => {
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];

    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    const userType = document.querySelector('input[name="userType"]:checked').value;

    // Check if the email already exists
    const isEmailExist = existingUserData.some(user => user.email === userEmail);

    if (isEmailExist) {
        alert('You already Resigter. Please use a different email.');
        return;
    }

    console.log('Collected data:', userName, userEmail, userPassword, userType);

    // Append the new user data with user type
    existingUserData.push({
        name: userName,
        email: userEmail,
        password: userPassword,
        userType: userType
    });

    localStorage.setItem('userData', JSON.stringify(existingUserData));
    wrapper.classList.remove('active');
});



// if not login donation ,volunteer & ngo tab not open logic
let donationTab = document.getElementById('dTab'); 
donationTab.addEventListener('click', (event) => {
    event.preventDefault(); 
     console.log(donationTab);
     console.log('hiii');
     if(sessionStorage.getItem('isLoggedIn') === 'true' && loginMainBtn.innerText === 'Log-Out'){
        var targetUrl = 'donateLoginForm/donateWelcome.html';
        window.location.href = targetUrl;
     }
     else{
        alert("Frist You have to Resigster")
        wrapper.classList.add('active-popup');
        wrapper.classList.add('active');
     }
    
});

let volunteerTab = document.getElementById('vTab'); 
volunteerTab.addEventListener('click', (event) => {
    event.preventDefault(); 
     if(loginMainBtn.innerText === 'Log-Out'){
        var targetUrl = '../volunteer/VolunteerRegistration.html';
        window.location.href = targetUrl;
     }
     else{
        alert("Frist You have to Resigster")
        wrapper.classList.add('active-popup');
        wrapper.classList.add('active');
     }
    
});






// login form logic 


        

let loginForm = document.getElementById('loginBtn');
loginForm.addEventListener('click', () => {
    // Collect entered login data
    let enteredEmail = document.getElementById('loginEmail').value;
    let enteredPassword = document.getElementById('loginPassword').value;
    console.log(`${enteredEmail}: ${enteredPassword}`);

    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    console.log(storedUserData);
    
    
    let matchingUser = false;
    for (let i = 0; i < storedUserData.length; i++) {
        const user = storedUserData[i];
        if (
            user.email.toLowerCase() === enteredEmail.toLowerCase() &&
            user.password === enteredPassword
        ) {
            matchingUser = true;
            loggedInUser = {
                email: enteredEmail,
                password: enteredPassword,
                userType: user.userType // Store user type in loggedInUser
            };
            break;
        }
    }

    if (matchingUser) {
        alert(`Login successful`);
        sessionStorage.setItem('isLoggedIn', true);

        // Redirect based on user type
        if (loggedInUser.userType === 'donor') {
            window.location.href = '../homePage/donationHomePage.html';
        } 
        else if (loggedInUser.userType === 'volunteer') {
            let volunteer = JSON.parse(localStorage.getItem('volunteerData'));
            console.log(volunteer);
             if (volunteer && volunteer.length > 0) {
             let foundVolunteer = volunteer.find(vol => vol.Email === enteredEmail);
               if (foundVolunteer) {
                console.log("Volunteer found:", foundVolunteer);
                window.location.href=`../volunteer/donationReq/DonationRequest.html?volunteerName=${encodeURIComponent(foundVolunteer.name)}`;
               }
               else {
                window.location.href = '../volunteer/volHomePage.html';
               } 
           }
           else {
            window.location.href = '../volunteer/volHomePage.html';
           }
    }
           else{
            window.location.href = 'HomePage.html';
        }
    
    } else {
        alert('Please enter correct Email-Id and Password');
    }

    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
});
