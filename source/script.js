import { projectsData } from "../data/projectData"

const menuIconElement = document.querySelector('#menu-icon');
const linksListElement = document.querySelector('.links');
// const emailIconElement = document.querySelector('.email-icon');
// const myEmailElement = document.querySelector('.my-email');

// const projectsSection = document.getElementById('projects')
const projectsGroup = document.getElementsByClassName('projects-group')

const projectsGroupElem = document.createElement('div')
projectsGroupElem.classList.add("app-card")

const projectsTitleElem = document.createElement('p')
projectsTitleElem.classList.add("app-title")

const projectsImgElem = document.createElement('img')
projectsImgElem.classList.add("app-shot")

const projectsButtonsGroupElem = document.createElement('div')
projectsButtonsGroupElem.classList.add("btn-group")



function createProjectsCard() {
    projectsGroupElem.appendChild(projectsTitleElem)
    projectsGroupElem.appendChild(projectsImgElem)
    projectsGroupElem.appendChild(projectsButtonsGroupElem)

    // const projectsCard = `<div class="app-card">
    //                 <p class="app-title">${projectsData.title}</p>
    //                 <img src=${projectsData.imUrl} alt="app-1" class="app-shot">
    //                 <div class="btn-group">
    //                     <a href=${projectsData.live} target="_blank"><button>Live</button></a>
    //                     <a href=${projectsData.live} target="_blank"><button>Github</button></a>
    //                 </div>
    //             </div>`
}


menuIconElement.onclick = () => {
    linksListElement.classList.toggle('active');
}

// const activeClass = linksListElement.classList.toggle('active');

// if(activeClass){
//     window.onclick = () => {
//             linksListElement.classList.remove('active');
//     }
// }