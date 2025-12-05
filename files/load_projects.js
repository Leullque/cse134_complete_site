function displayProjects(data) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    Object.keys(data).forEach(key => {
        const project = data[key];
        const card = document.createElement("project-card");
        card.setAttribute("title", project.title);
        card.setAttribute("tags", project.tags.join(", "));
        card.setAttribute("description", project.description);
        card.setAttribute("time", project.time);
        card.setAttribute("webp", project.demo.webp);
        card.setAttribute("png", project.demo.png);
        card.setAttribute("alt", project.demo.alt);
        card.setAttribute("link", project.link);
        gallery.appendChild(card);
    });
}
async function loadLocal() {
    // store to localStorage
    try {
    const stored = localStorage.getItem("projectData");
    if (!stored) {
        // initial loading from .json file
        const response = await fetch('./files/project.json');
        const jsonData = await response.json();
        localStorage.setItem("projectData", JSON.stringify(jsonData));
    }
    } catch (err) {
    console.error("Error loading local JSON:", err);
    }

    const data = JSON.parse(localStorage.getItem("projectData"));
    displayProjects(data);
}

async function loadRemote() {
    const url = "https://api.jsonbin.io/v3/b/6931284143b1c97be9d6d390";
    try {
    const response = await fetch(url);
    const bin = await response.json();
    const jsonData = bin.record;
    localStorage.setItem("projectData", JSON.stringify(jsonData));
    } catch (err) {
    console.error("Error loading remote JSON:", err);
    }

    const data = JSON.parse(localStorage.getItem("projectData"));
    displayProjects(data);
}

document.getElementById("load-local").addEventListener("click", loadLocal);
document.getElementById("load-remote").addEventListener("click", loadRemote);