/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click on each link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has  a value
    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Write all the input fields';
    }
    else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_i15kdwk', 'template_df9onpo', '#contact-form', '49Xx_z6GYZ5lEuTvj'
        )
        .then(() => {
            // show message and add color, window + dot to open emoji
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent ✔';

            // remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        },
        (error) => {
            alert('OOPs! SOMETHING WENT WRONG...', error);
        }
        );
        // clear input fields
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);

/*=============== Style Switcher =============== */
// Function to set the checkbox state in localStorage
function saveCheckboxState() {
    const checkbox = document.getElementById('day-night');
    localStorage.setItem('checkboxState', checkbox.checked);
}

// Function to load the checkbox state from localStorage
function loadCheckboxState() {
    const checkbox = document.getElementById('day-night');
    const savedState = localStorage.getItem('checkboxState');

    if (savedState === 'true') {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}

// Add an event listener to the checkbox to save its state when it changes
const checkbox = document.getElementById('day-night');
checkbox.addEventListener('change', saveCheckboxState);

// Run the code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', loadCheckboxState);

