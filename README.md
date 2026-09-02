# Minecraft Real World Map Importer 🎮🗺️

> Google Maps orqali real dunyo joylarini Minecraft dunyosiga o'zgartiring!

## 🌐 Web Saytni Ochish

**Live Demo:** [Minecraft Map Importer](https://jonsislom7-afk.github.io/minecraft/docs/)

## ✨ Xususiyatlari

- 🗺️ **Google Maps Integration** - Real joylarni xaritadan tanlash
- ☕ **Java Edition Support** - Minecraft Java Edition uchun
- 🎮 **Bedrock Edition Support** - Minecraft Bedrock Edition uchun
- 📍 **Koordinat Konversiya** - Real koordinatalarni Minecraft formatiga aylantirish
- 🏔️ **Terrain Generation** - Balandlik ma'lumotlarini yaratish
- 🌍 **Global Masshtab** - Butun dunya uchun qo'llab-quvvatlash
- ⚡ **Oson Ishlatish** - Web interfeys orqali tez va oson

## 🚀 Tez Boshlash

### Web Interfeys orqali (PINIGIGA OSON!)
1. [Web saytini](https://jonsislom7-afk.github.io/minecraft/docs/) oching
2. Real koordinatalarni kiriting yoki mashhur joylarni tanlang
3. Minecraft koordinatalarini avtomatik olarsiz

### Java Edition orqali
```java
MapImporter importer = new MapImporter("YOUR_GOOGLE_MAPS_API_KEY");
int[] minecraftCoords = importer.getMinecraftCoordinates(41.3175, 69.2401);
System.out.println("X: " + minecraftCoords[0] + ", Z: " + minecraftCoords[1]);
```

### Bedrock Edition orqali
```javascript
const MapImporter = require('./src/MapImporterBedrock');
const importer = new MapImporter('YOUR_GOOGLE_MAPS_API_KEY');

const result = await importer.fetchLocationData(41.3175, 69.2401);
console.log(`X: ${result.minecraftX}, Z: ${result.minecraftZ}`);
```

## 📁 Loyiha Tuzilmasi

```
minecraft/
├── docs/
│   ├── index.html          # Web sayt (HTML)
│   ├── styles.css          # Stil (CSS)
│   ├── script.js           # JavaScript funksiyalari
│   ├── .nojekyll           # Jekyll o'chirgich
│   └── DEPLOYMENT.md       # Deploy qo'llanmasi
├── java-edition/
│   ├── src/
│   │   ├── MapImporter.java
│   │   ├── CoordinateConverter.java
│   │   └── TerrainData.java
│   └── pom.xml
├── bedrock-edition/
│   ├── src/
│   │   ├── MapImporterBedrock.js
│   │   └── CoordinateConverterBedrock.js
│   └── package.json
├── .github/workflows/deploy.yml  # GitHub Actions
├── package.json
└── README.md
```

## 🔧 O'rnatish

### Talablar
- Java 11+ (Java Edition uchun)
- Node.js 14+ (Bedrock Edition uchun)
- Google Maps API Key

### Qadamlar

#### 1. Repository klonlash
```bash
git clone https://github.com/jonsislom7-afk/minecraft.git
cd minecraft
```

#### 2. Google Maps API Kaliti olish
- [Google Cloud Console](https://console.cloud.google.com) ga o'tin
- Yangi loyiha yarating
- Maps API, Elevation API, Static Maps API-larni yoqing
- API key yarating

#### 3. Java Edition o'rnatishi
```bash
cd java-edition
mvn install
```

#### 4. Bedrock Edition o'rnatishi
```bash
cd bedrock-edition
npm install
```

## 💡 Ishlatilishi Misollari

### Tashkent koordinatalarini konvertasiya qilish
```
Real: Latitude 41.3175, Longitude 69.2401
Minecraft: X -1234567, Z 4567890
```

### Mashhur joylar
- 🇺🇿 Tashkent: 41.3175, 69.2401
- 🗽 New York: 40.7128, -74.0060
- 🕌 London: 51.5074, -0.1278
- 🗼 Paris: 48.8566, 2.3522
- 🗾 Tokyo: 35.6762, 139.6503
- 🦘 Sydney: -33.8688, 151.2093

## 📚 Dokumentasiya

### Koordinat Sistemi
- **Real Dunyo:** Latitude (-90 to 90), Longitude (-180 to 180)
- **Minecraft:** X, Z (horizontal), Y (balandlik/vertical)
- **Masshtab:** 1 Minecraft block = 100 meter
- **Balandlik:** 10 meter = 1 block

### API Reference

#### MapImporter (Java)
```java
int[] getMinecraftCoordinates(double latitude, double longitude)
TerrainData fetchTerrainData(double latitude, double longitude, int zoom)
```

#### MapImporterBedrock (JavaScript)
```javascript
async fetchLocationData(latitude, longitude)
async fetchElevationData(latitude, longitude)
async importToBedrock(latitude, longitude, worldPath)
```

## ❓ Savol-Javob

**S: Google Maps API kaliti qanday oladim?**
A: [Google Cloud Console](https://console.cloud.google.com)-da yangi loyiha yarating va Maps API ключи yarating.

**S: Qaysi Minecraft versiyasi qo'llab-quviladi?**
A: Java Edition 1.18+ va barcha Bedrock Edition versiyalari.

**S: Konversiya qanchasi aniq?**
A: 100 meter aniqlikda (0.1 km = 1 Minecraft block).

**S: Offline ishlatishim mumkinmi?**
A: Koordinat konversiyasi offline ishlatilishi mumkin, lekin Google Maps ma'lumotlarini olish uchun internet kerak.

**S: Qanday xatolik bo'lsa nima qilam?**
A: [GitHub Issues](https://github.com/jonsislom7-afk/minecraft/issues)-da muammo ochib qo'ying.

## 🛠️ Texnologiyalar

- **Backend:** Java 11, Maven
- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **API:** Google Maps API, Google Elevation API
- **Runtime:** Node.js, JVM
- **CI/CD:** GitHub Actions

## 📄 Litsenziya

MIT License

## 👨‍💻 Mualliflik

**jonsislom7-afk** - [GitHub](https://github.com/jonsislom7-afk)

## 🌟 Hissangizni Qo'shing

Agar loyiha sizga yoqqan bo'lsa ⭐ berish xohlasangiz!

## 📞 Bog'lanish

- 🐙 GitHub: [@jonsislom7-afk](https://github.com/jonsislom7-afk)
- 📧 Issues: [GitHub Issues](https://github.com/jonsislom7-afk/minecraft/issues)

## 🗺️ Roadmap

- [ ] Web GUI qo'shish
- [ ] 3D preview funksiyasi
- [ ] Export/Import xususiyatlari
- [ ] Mobile app versiyasi
- [ ] Offline harita ma'lumotlari
- [ ] Community maps repository

---

**Minecraft Real World Map Importer** - Real dunyodan Minecraft o'rnatish! 🎮🌍
