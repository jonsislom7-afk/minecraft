// Koordinat konversiyasi funksiyalari
function convertCoordinates() {
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const elevation = parseFloat(document.getElementById('elevation').value) || 64;

    if (isNaN(latitude) || isNaN(longitude)) {
        alert('Iltimos, to\'g\'ri koordinatalarni kiriting!');
        return;
    }

    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        alert('Koordinatalar noto\'g\'ri! Latitude: -90 to 90, Longitude: -180 to 180');
        return;
    }

    // Koordinat konversiya algoritmi
    const MINECRAFT_WORLD_SIZE = 60000000;
    const SCALE_FACTOR = 0.1; // 1 block = 100 meters

    // Normalize koordinatalarni
    const normalizedLat = (latitude + 90) / 180;
    const normalizedLon = (longitude + 180) / 360;

    // Minecraft koordinatalarini hisoblash
    let x = Math.floor(normalizedLon * MINECRAFT_WORLD_SIZE);
    let z = Math.floor(normalizedLat * MINECRAFT_WORLD_SIZE);

    // Markazga nisbatan o'zgartirish
    x -= Math.floor(MINECRAFT_WORLD_SIZE / 2);
    z -= Math.floor(MINECRAFT_WORLD_SIZE / 2);

    // Balandlikni Y koordinatasiga aylantirish (10 meter = 1 block)
    const y = Math.floor(elevation / 10) + 64; // Sea level = 64

    // Natijalarni ko'rsatish
    document.getElementById('result-x').textContent = x.toLocaleString();
    document.getElementById('result-z').textContent = z.toLocaleString();
    document.getElementById('result-y').textContent = y;

    // Joylashuvning nomini ko'rsatish
    document.getElementById('location-name').textContent = 
        `📍 ${latitude.toFixed(4)}, ${longitude.toFixed(4)} | Balandlik: ${elevation.toFixed(0)}m`;
}

// Mashhur joylarni tanlash
function setLocation(lat, lon, elevation) {
    document.getElementById('latitude').value = lat;
    document.getElementById('longitude').value = lon;
    document.getElementById('elevation').value = elevation;
    convertCoordinates();
    document.querySelector('.demo').scrollIntoView({ behavior: 'smooth' });
}

// Sahifaga skayl qilish
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// FAQ tog'irlash
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });

    // Enter tugmasi bilan konvertasiya qilish
    const inputs = document.querySelectorAll('#latitude, #longitude, #elevation');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                convertCoordinates();
            }
        });
    });
});

// Real-time konvertasiya
document.addEventListener('DOMContentLoaded', function() {
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');
    const elevation = document.getElementById('elevation');

    if (latitude && longitude && elevation) {
        [latitude, longitude, elevation].forEach(input => {
            input.addEventListener('change', convertCoordinates);
        });
    }
});

// Tosiqdan qo'l bo'shash
function getReverseCoordinates(minecraftX, minecraftZ) {
    const MINECRAFT_WORLD_SIZE = 60000000;
    
    const normalizedX = (minecraftX + Math.floor(MINECRAFT_WORLD_SIZE / 2)) / MINECRAFT_WORLD_SIZE;
    const normalizedZ = (minecraftZ + Math.floor(MINECRAFT_WORLD_SIZE / 2)) / MINECRAFT_WORLD_SIZE;

    const longitude = normalizedX * 360 - 180;
    const latitude = normalizedZ * 180 - 90;

    return { latitude, longitude };
}

// Konsol API uchun export (developer uchun)
window.MapConverter = {
    convert: convertCoordinates,
    setLocation: setLocation,
    reverse: getReverseCoordinates
};

console.log('Minecraft Map Converter yuklandi! window.MapConverter.convert() ni ishlating.');
