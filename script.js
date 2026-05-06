function clic() {
    alert("Merci pour votre soutien !");
}

/* ACCORDION */
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        document.querySelectorAll(".accordion-content").forEach(item => {
            if (item !== content) item.style.display = "none";
        });

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});
/* FORMULAIRE */
const form = document.getElementById("formulaire");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    message.textContent = "Merci pour votre engagement ! 💚";

    // compteur +1
    compteur++;
    document.getElementById("compteur").textContent = compteur;
});


/* COMPTEUR DE SOUTIEN */
let compteur = 1287; // nombre de départ

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("compteur").textContent = compteur;
});
