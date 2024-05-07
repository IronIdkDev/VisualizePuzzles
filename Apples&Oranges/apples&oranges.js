// Define fruits
const fruits = ["Apple", "Orange"];

// Define containers
const containers = [
    { label: "Apples", content: fruits[Math.floor(Math.random() * fruits.length)] },
    { label: "Oranges", content: fruits[Math.floor(Math.random() * fruits.length)] },
    { label: "Both", content: fruits[Math.floor(Math.random() * fruits.length)] }
];

// Function to update containers
function updateContainers(clickedIndex) {
    const pickedFruit = containers[clickedIndex].content;
    containers.forEach(container => {
        if (container.label === "Both") {
            container.content = pickedFruit; // Just set it to the picked fruit
        } else if (container.label === pickedFruit) {
            container.content = pickedFruit === "Apple" ? "Orange" : "Apple";
        }
    });
}

// Function to render containers
function renderContainers() {
    const containersDiv = document.getElementById("container-wrapper");
    containersDiv.innerHTML = "";
    containers.forEach((container, index) => {
        const div = document.createElement("div");
        div.className = "container";
        div.innerText = container.label;
        containersDiv.appendChild(div);
    });

    // Attach event listeners after re-rendering
    containersDiv.querySelectorAll('.container').forEach((container, index) => {
        container.addEventListener("click", () => {
            updateContainers(index);
            renderContainers(); // Re-render containers after click
            checkWin();
        });
    });
}

// Function to check win condition
function checkWin() {
    const win = containers.every(container => container.label === container.content);
    const resultDiv = document.getElementById("result");
    if (win) {
        resultDiv.innerText = "You Win!";
    } else {
        resultDiv.innerText = "";
    }
}

// Initial rendering
renderContainers();
