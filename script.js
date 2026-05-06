let compteur = 0;

function clic() {
    compteur++;
    document.getElementById("compteur").textContent = compteur;
}

/* ACCORDION */
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let content = btn.nextElementSibling;

        document.querySelectorAll(".accordion-content").forEach(el => {
            if (el !== content) el.style.display = "none";
        });

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});

/* FORMULAIRE */
document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("message").textContent =
        "Merci pour votre engagement 💚";

    compteur++;
    document.getElementById("compteur").textContent = compteur;
});
