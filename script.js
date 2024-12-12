function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Prüfen, ob das Gerät mobil ist
function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

// Popup anzeigen, wenn ein mobiles Gerät erkannt wird
function showMobilePopup() {
    if (isMobileDevice()) {
        console.log("Mobilgerät erkannt. Popup wird angezeigt."); // Debugging
        const popup = document.createElement('div');
        popup.id = 'mobile-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.padding = '20px';
        popup.style.background = 'white';
        popup.style.border = '2px solid #004080';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        popup.style.zIndex = '1000';
        popup.style.textAlign = 'center';

        popup.innerHTML = `
            <p style="color: #555;">Die Seite ist nicht für Mobilgeräte optimiert! Es wäre besser, wenn Sie die Seite mit Ihrem Laptop aufrufen.</p>
            <button id="close-popup" style="margin-top: 10px; padding: 10px; background: #004080; color: white; border: none; border-radius: 5px; cursor: pointer;">Weiter</button>
        `;

        document.body.appendChild(popup);

        document.getElementById('close-popup').addEventListener('click', () => {
            popup.style.display = 'none';
        });
    } else {
        console.log("Kein Mobilgerät erkannt. Popup wird nicht angezeigt."); // Debugging
    }
}

document.addEventListener('DOMContentLoaded', showMobilePopup);

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