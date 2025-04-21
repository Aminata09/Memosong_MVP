// Fonction pour générer une chanson simple à partir du texte
function genererChanson() {
  const cours = document.getElementById("cours").value.trim();
  const style = document.getElementById("style").value;
  const voix = document.getElementById("voix").value;

  if (!cours) {
    alert("Merci de coller un cours avant de continuer !");
    return;
  }

  const lignes = cours.split(".");
  const extrait = lignes.slice(0, 2).join(". ");
  const paroles = `🎵 Style : ${style}\n🗣️ Voix : ${voix}\n\n${extrait}\nEt maintenant c'est mémorisé !`;

  // Sauvegarde dans le localStorage
  localStorage.setItem("memo_paroles", paroles);
  window.location.href = "resultats.html";
}

// Fonction pour lire la chanson avec la voix du navigateur
function lireChanson() {
  const paroles = localStorage.getItem("memo_paroles");
  if (!paroles) return;

  const speech = new SpeechSynthesisUtterance(paroles);
  speech.lang = "fr-FR";
  speech.rate = 1;
  speechSynthesis.speak(speech);
}

// Si sur la page résultats, on affiche les paroles
document.addEventListener("DOMContentLoaded", () => {
  const affichage = document.getElementById("paroles");
  if (affichage) {
    const paroles = localStorage.getItem("memo_paroles");
    affichage.innerText = paroles || "Aucune chanson trouvée.";
  }
});
