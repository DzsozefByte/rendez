const szamkocka = 20;
let randomszam = Array.from({ length: szamkocka }, () => Math.floor(Math.random() * 100));
const container = document.getElementById("bars");

function drawBars() {
    container.innerHTML = "";
    randomszam.forEach(num => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.innerText = num;
        container.appendChild(bar);
    });
}

async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < randomszam.length - 1; i++) {
        for (let j = 0; j < randomszam.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
            await new Promise(resolve => setTimeout(resolve, 300));

            if (randomszam[j] > randomszam[j + 1]) {
                [randomszam[j], randomszam[j + 1]] = [randomszam[j + 1], randomszam[j]];
                drawBars();
                bars = document.getElementsByClassName("bar");
            }

            bars[j].style.backgroundColor = "lightblue";
            bars[j + 1].style.backgroundColor = "lightblue";
        }
        bars[randomszam.length - i - 1].style.backgroundColor = "green";
    }
    bars[0].style.backgroundColor = "green";
}

function startSorting() {
    drawBars();
    bubbleSort();
}

drawBars();