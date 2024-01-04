const opportunitiesContainer = document.getElementById("opportunitiesContainer");
    
const storedOpportunities = JSON.parse(localStorage.getItem("opportunities")) || [];


function createOpportunityCard(opportunity) {
    const opportunityCard = document.createElement("div");
    opportunityCard.classList.add("opportunity");
    opportunityCard.innerHTML = `
    <h3>${opportunity.title}</h3>
    <p>${opportunity.description}</p>
    <p>Date: ${opportunity.date}</p>
    <p>Time: ${opportunity.time}</p>
    <p>Location: ${opportunity.location}</p>
    <div class="button-container">
        <button class="signup-button" onclick="signUp(event)">Sign Up</button>
        <button class="delete-button" onclick="deleteOpportunity(event)">Delete</button>
    </div>
    `;
const signUpButton = opportunityCard.querySelector(".signup-button");
const deleteButton = opportunityCard.querySelector(".delete-button");

signUpButton.addEventListener("click", signUp);
deleteButton.addEventListener("click", deleteOpportunity);
    
return opportunityCard;
}

for (let i = 0; i < storedOpportunities.length; i++) {
    const opportunityCard = createOpportunityCard(storedOpportunities[i]);
    opportunitiesContainer.appendChild(opportunityCard);
}

function signUp(event) {
    const opportunityCard = event.target.closest(".opportunity");

    const signedUpOpportunities = document.getElementById("signedUpOpportunities");
    signedUpOpportunities.appendChild(opportunityCard);

}

function deleteOpportunity(event) {
    const opportunityCard = event.target.closest(".opportunity");
    opportunityCard.remove();
}

//localStorage.clear();

