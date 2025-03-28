const menuIconElement = document.querySelector('#menu-icon');
const linksListElement = document.querySelector('.links');
// const emailIconElement = document.querySelector('.email-icon');
// const myEmailElement = document.querySelector('.my-email');

menuIconElement.onclick = () => {
    linksListElement.classList.toggle('active');
}

//on click of body close sidebar
document.onclick = (e) => {
    if(!menuIconElement.contains(e.target) && !linksListElement.contains(e.target)){
        linksListElement.classList.remove('active');
    }
}