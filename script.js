function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Elemente für die Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.lightbox .close');

document.querySelectorAll('.info-box').forEach((box) => {
    const closeDate = box.dataset.closeDate; // Datum in HTML-Attribut speichern
    if (closeDate && new Date(closeDate) < new Date()) {
        box.style.display = 'none';
    }
});

// Alle Bilder in der Galerie
const galleryImages = document.querySelectorAll('.gallery-item img');

// Bild in der Lightbox anzeigen
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        if (image.src) { // Sicherstellen, dass die Quelle existiert
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
        } else {
            console.error("Bildquelle nicht gefunden!");
        }
    });
});

// Lightbox schließen
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Schließen der Lightbox durch Klick außerhalb des Bildes
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Elemente selektieren
const impressumModal = document.getElementById('impressum-modal');
const openImpressum = document.getElementById('open-impressum');
const closeImpressum = document.getElementById('close-impressum');

// Öffnen des Impressum-Popups
openImpressum.addEventListener('click', () => {
    impressumModal.style.display = 'block'; // Modal sichtbar machen
});

// Schließen des Impressum-Popups
closeImpressum.addEventListener('click', () => {
    impressumModal.style.display = 'none'; // Modal verstecken
});

// Schließen des Popups bei Klick außerhalb des Modals
window.addEventListener('click', (event) => {
    if (event.target === impressumModal) {
        impressumModal.style.display = 'none';
    }
});

// Schneeflocken erzeugen
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const symbols = ["❄", "✨", "🎄", "⛄"];
    snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    // snowflake.textContent = '❄'; // Du kannst hier andere Symbole verwenden, z.B. ★
    snowflake.style.left = Math.random() * 100 + 'vw'; // Zufällige horizontale Position
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Unterschiedliche Fallgeschwindigkeit
    snowflake.style.opacity = Math.random(); // Unterschiedliche Transparenz
    document.body.appendChild(snowflake);

    // Entferne die Schneeflocke nach der Animation
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Alle 200ms eine neue Schneeflocke hinzufügen
setInterval(createSnowflake, 200);