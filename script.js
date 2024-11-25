function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Elemente für die Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.lightbox .close');

document.querySelectorAll('.info-box').forEach((box) => {
    const today = new Date();
    const closeDates = ['2024-12-24', '2024-12-31']; // Beispiel-Daten
    const isOutdated = closeDates.some((date) => new Date(date) < today);

    if (isOutdated) {
        box.style.display = 'none'; // Entfernt abgelaufene Infos
    }
});

// Alle Bilder in der Galerie
const galleryImages = document.querySelectorAll('.gallery-item img');

// Bild in der Lightbox anzeigen
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
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

// Modal-Elemente
const impressumModal = document.getElementById('impressum-modal');
const datenschutzModal = document.getElementById('datenschutz-modal');

// Buttons und Links
const openImpressum = document.getElementById('open-impressum');
const openDatenschutz = document.getElementById('open-datenschutz');
const closeImpressum = document.getElementById('close-impressum');
const closeDatenschutz = document.getElementById('close-datenschutz');

// Schließen der Modals bei Klick außerhalb des Inhalts
window.addEventListener('click', (e) => {
    if (e.target === impressumModal) {
        impressumModal.style.display = 'none';
    }
    if (e.target === datenschutzModal) {
        datenschutzModal.style.display = 'none';
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