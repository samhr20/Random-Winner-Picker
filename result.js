/* Result page */
let EnteredName ;
let names = [];

function input(){
    EnteredName = document.getElementById("Entered-Name").value;

    let outputData = document.getElementById("outputData");
    let newData = document.createElement("div");
    newData.innerHTML += "<p><strong>" + EnteredName + "</strong></p>";

    
    outputData.appendChild(newData);
    document.getElementById("Entered-Name").value = "";
}



function showWinners(){

    names.push(EnteredName);

    let randomIndex = Math.floor(Math.random() * names.length);
    let winningName = names[randomIndex];
    
    let winnerContainer = document.querySelector(".winneroutput")
    winnerContainer.innerHTML = "Winner: " + winningName;

    winnerContainer.appendChild(winner);

    }

