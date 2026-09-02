// Koordinat konversiyasi funksiyalari
function convertCoordinates() {
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const elevation = parseFloat(document.getElementById('elevation').value) || 64;

    if (isNaN(latitude) || isNaN(longitude)) {
        document.getElementById('result-x').textContent = 'Xato: Koordinatlarni kiriting';
        document.getElementById('result-z').textContent = 'Xato: Koordinatlarni kiriting';
        document.getElementById('result-y').textContent = 'Xato: Koordinatlarni kiriting';
        return;
    }

    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        document.getElementById('result-x').textContent = 'Xato: Koordinatlar noto\'g\'ri!';
        document.getElementById('result-z').textContent = 'Xato: Koordinatlar noto\'g\'ri!';
        document.getElementById('result-y').textContent = 'Xato: Koordinatlar noto\'g\'ri!';
        return;
    }

    try {
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
        document.getElementById('result-y').textContent = y.toLocaleString();

        // Joylashuvning nomini ko'rsatish
        const locationName = getLocationName(latitude, longitude);
        document.getElementById('location-name').textContent = 
            `📍 ${locationName} | ${latitude.toFixed(4)}, ${longitude.toFixed(4)} | ${elevation.toFixed(0)}m`;
    } catch (error) {
        console.error('Xato:', error);
        document.getElementById('result-x').textContent = 'Xato: ' + error.message;
    }
}

// Joylashuvning nomini aniqlash
function getLocationName(lat, lon) {
    const locations = {
        '41.3175|69.2401': 'Tashkent',
        '40.7128|-74.0060': 'New York',
        '51.5074|-0.1278': 'London',
        '48.8566|2.3522': 'Paris',
        '35.6762|139.6503': 'Tokyo',
        '-33.8688|151.2093': 'Sydney'
    };
    
    const key = `${lat.toFixed(4)}|${lon.toFixed(4)}`;
    return locations[key] || 'Noma\'lum joylashuv';
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
            // Boshqa faqlarni yopish
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== this.parentElement) {
                    item.classList.remove('active');
                }
            });
            // Hozirgi faqni o'zgartirish
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

    // Real-time konvertasiya
    inputs.forEach(input => {
        input.addEventListener('change', convertCoordinates);
        input.addEventListener('input', function() {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(convertCoordinates, 500);
        });
    });

    // Boshlangich konversiya (Tashkent)
    document.getElementById('latitude').value = '41.3175';
    document.getElementById('longitude').value = '69.2401';
    document.getElementById('elevation').value = '455';
    convertCoordinates();
});

// Tosiqdan qo'l bo'shash - Minecraft koordinatalarini real koordinatalariga aylantirish
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
    reverse: getReverseCoordinates,
    version: '1.0.0'
};

console.log('%c🎮 Minecraft Map Converter Loaded!', 'color: #00ff00; font-size: 16px; font-weight: bold;');
console.log('Available commands:');
console.log('  - window.MapConverter.convert() - Koordinatlarni konvertasiya qil');
console.log('  - window.MapConverter.setLocation(lat, lon, elevation) - Joyni o\'rnat');
console.log('  - window.MapConverter.reverse(x, z) - Reverse konversiya');