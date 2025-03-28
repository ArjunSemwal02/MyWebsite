import { ProjectsData } from "../data/projectData";


// const projectsData = [
//     {
//         id: 0,
//         title: "Stream-Vids",
//         imgUrl: "../assets/projects-screenshot/Screenshot (59).png",
//         live: "https://arjunsemwal02.github.io/Stream-Vids/",
//         code: "https://arjunsemwal02.github.io/Stream-Vids/"
//     },
//     {
//         id: 1,
//         title: "Stream-Vids",
//         imgUrl: "assets/projects-screenshot/Screenshot (31).png",
//         live: "https://arjunsemwal02.github.io/Stream-Vids/",
//         code: "https://arjunsemwal02.github.io/Stream-Vids/"
//     },
//     {
//         id: 2,
//         title: "Stream-Vids",
//         imgUrl: "assets/projects-screenshot/Screenshot (59).png",
//         live: "https://arjunsemwal02.github.io/Stream-Vids/",
//         code: "https://arjunsemwal02.github.io/Stream-Vids/"
//     },
//     {
//         id: 3,
//         title: "Stream-Vids",
//         imgUrl: "assets/projects-screenshot/Screenshot (59).png",
//         live: "https://arjunsemwal02.github.io/Stream-Vids/",
//         code: "https://arjunsemwal02.github.io/Stream-Vids/"
//     },
//     {
//         id: 4,
//         title: "Stream-Vids",
//         imgUrl: "assets/projects-screenshot/Screenshot (59).png",
//         live: "https://arjunsemwal02.github.io/Stream-Vids/",
//         code: "https://arjunsemwal02.github.io/Stream-Vids/"
//     },
//     {
//         id: 5,
//         title: "Stream-Vids",
//         imgUrl: "assets/projects-screenshot/Screenshot (59).png",
//         live: "https://arjunsemwal02.github.io/Stream-Vids/",
//         code: "https://arjunsemwal02.github.io/Stream-Vids/"
//     }
// ]

// const {id, title, imgUrl, live, code} = projectsData

const menuIconElement = document.querySelector('#menu-icon');
const linksListElement = document.querySelector('.links');

const projectsGroup = document.querySelector('.projects-group')

function createProjectsCard(data) {
    return `<div class="app-card" key=${data.id}>
                    <p class="app-title">${data.title}</p>
                    <img src=${data.imgUrl} alt="app-1" class="app-shot">
                    <div class="btn-group">
                        <a href=${data.live} target="_blank"><button>Live</button></a>
                        <a href=${data.code} target="_blank"><button>Github</button></a>
                    </div>
                </div>`
}

// projectsGroup.appendChild(projectsData.map(data => (createProjectsCard(data))))
projectsGroup.innerHTML = ProjectsData.map(data => (createProjectsCard(data)))


menuIconElement.onclick = () => {
    debugger;
    linksListElement.classList.toggle('active');
}

// const activeClass = linksListElement.classList.toggle('active');

// if(activeClass){
//     window.onclick = () => {
//             linksListElement.classList.remove('active');
//     }
// }