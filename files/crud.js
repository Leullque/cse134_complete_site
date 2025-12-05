
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("check").addEventListener("click", checkKey);
    document.getElementById("delete").addEventListener("click", deleteKey);
    document.getElementById("submit").addEventListener("click", submitRequest);
});
var ExistingKeys = false;

function clearFields() {
    const ids = [
        "title", "tags", "time", "link", 
        "description", "webp", "png", "alt"
    ];
    ids.forEach(id => document.getElementById(id).value = "");
}

async function checkKey(event) {
    event.preventDefault();
    const key = document.getElementById("key").value;
    const infoMessage = document.getElementById("info-message");

    try {
        const stored = localStorage.getItem("projectData");
        if (!stored) {
            // initial loading from .json file
            const response = await fetch('./files/project.json');
            const jsonData = await response.json();
            localStorage.setItem("projectData", JSON.stringify(jsonData));
            stored = JSON.stringify(jsonData);
        }
        if (stored) {
            const data = JSON.parse(stored);
            if (data[key]) {
                infoMessage.textContent = `Project with key "${key}" exists. You can update/delete it.`;
                ExistingKeys = true;
                document.getElementById("delete").style.display = "inline-block";
                document.getElementById("submit").textContent = "Update";
                document.getElementById("title").value = data[key].title;
                document.getElementById("tags").value = data[key].tags.join(", ");
                document.getElementById("time").value = data[key].time;
                document.getElementById("link").value = data[key].link;
                document.getElementById("description").value = data[key].description;
                document.getElementById("webp").value = data[key].demo.webp;
                document.getElementById("png").value = data[key].demo.png;
                document.getElementById("alt").value = data[key].demo.alt;
            } else {
                infoMessage.textContent = `Project with key "${key}" does not exist. You can create a new project.`;
                ExistingKeys = false;
                document.getElementById("delete").style.display = "none";
                document.getElementById("submit").textContent = "Create";
                clearFields();
            }
        } else {
            infoMessage.textContent = "Error: Failed to find or initialize project data in local storage.";
        }
    } catch (err) {
        console.error("Error checking key:", err);
    }
    document.getElementById("submit").disabled = false;
}

async function deleteKey(event) {
    event.preventDefault();
    const infoMessage = document.getElementById("info-message");
    const key = document.getElementById("key").value;

    try {
        const stored = localStorage.getItem("projectData");
        if (stored) {
            const data = JSON.parse(stored);
            if (data[key]) {
                delete data[key];
                localStorage.setItem("projectData", JSON.stringify(data));
                infoMessage.textContent = `Project with key "${key}" has been deleted.`;
                ExistingKeys = false;
                document.getElementById("delete").style.display = "none";
            } else {
                infoMessage.textContent = `Error: Project with key "${key}" does not exist.`;
            }
        } else {
            infoMessage.textContent = "Error: No project data found in local storage.";
        }
    } catch (err) {
        console.error("Error deleting key:", err);
    }
    infoMessage.textContent = `${key} deleted.`;
}

async function submitRequest(event) {
    event.preventDefault();
    const form = document.getElementById("crud_request");
    const formData = new FormData(form);
    const key = formData.get("key");
    const title = formData.get("title");
    const tags = formData.get("tags").split(",").map(tag => tag.trim());
    const link = formData.get("link");
    const time = formData.get("time");
    const description = formData.get("description");
    
    const webp = formData.get("webp");
    const png = formData.get("png");
    const alt = formData.get("alt");

    const new_data = {
                    "title":title,
                    "tags":tags,
                    "demo": {
                        "webp":webp,
                        "png":png,
                        "alt":alt
                    },
                    "description":description,
                    "time":time,
                    "link":link
                };
    try {
        const stored = localStorage.getItem("projectData");
        if (stored) {
            const data = JSON.parse(stored);
            if (data[key]) {
                // Update
                data[key] = new_data;
                localStorage.setItem("projectData", JSON.stringify(data));
            } else{
                // Create
                data[key] = new_data;
                localStorage.setItem("projectData", JSON.stringify(data));
            }
        } else {
            infoMessage.textContent = "Error: No project data found in local storage.";
        }
    } catch (err) {
        console.error("Error deleting key:", err);
    }
    document.getElementById("submission-info").textContent = `Project with key: ${key} ${ExistingKeys ? 'updated' : 'created'}.`;
    clearFields();
}
