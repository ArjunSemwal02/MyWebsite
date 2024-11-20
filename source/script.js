const menuIconElement = document.querySelector('#menu-icon');
const linksListElement = document.querySelector('.links');
const emailIconElement = document.querySelector('.email-icon');
const myEmailElement = document.querySelector('.my-email');
const sectionElement = document.querySelectorAll('section');

menuIconElement.onclick = () => {
    linksListElement.classList.toggle('active');
}

emailIconElement.onclick = () => {
    myEmailElement.classList.toggle('active');
}