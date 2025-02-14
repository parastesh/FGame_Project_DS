let cells = document.querySelectorAll("li");
let clickMatch = [];
let totalClicks = 0;
let matches = 0;
let unmatches = 0;

// Event Listeners
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = game;
}

function updateStats() {
    document.getElementById("total-clicks").innerText = totalClicks;
    document.getElementById("matches").innerText = matches;
    document.getElementById("unmatches").innerText = unmatches;
}

// Game Logic
function game() {
    // Prevent clicking the same cell twice or clicking more than two cells
    if (this.classList.contains("show") || clickMatch.length >= 2) return;

    this.classList.add("show");
    clickMatch.push(this);
    totalClicks++;

    if (clickMatch.length === 2) {
        if (clickMatch[0].innerHTML === clickMatch[1].innerHTML) {
            // Match found
            clickMatch[0].style.backgroundColor = "green";
            clickMatch[1].style.backgroundColor = "green";
            matches++;
            clickMatch = []; // Reset the matched pair
        } else {
            // No match
            clickMatch[0].style.backgroundColor = "red";
            clickMatch[1].style.backgroundColor = "red";
            unmatches++;

            setTimeout(() => {
                // Hide the cells and reset their background color
                clickMatch[0].classList.remove("show");
                clickMatch[1].classList.remove("show");
                clickMatch[0].style.backgroundColor = ""; // Reset background color
                clickMatch[1].style.backgroundColor = ""; // Reset background color
                clickMatch = []; // Reset the unmatched pair
            }, 1000); // Delay for 1 second
        }
    }

    updateStats();
}