const menuIconElement = document.querySelector('#menu-icon');
const linksListElement = document.querySelector('.links');

menuIconElement.onclick = () => {
    linksListElement.classList.toggle('active');
}