# 👨‍💻 Fullstack Kullanıcı Yönetimi Projesi

Bu proje, kullanıcı bilgilerini yönetmek için yapılmış bir fullstack web uygulamasıdır.  
Backend kısmı **express.js**, **cors**, **mongoose**(**mongoose.Schema**, **mongoose.connect**,) ve **MongoDB**, frontend kısmı ise **react.js** kullanılarak yapılmıştır.

---

## 🚀 Özellikler

- Kullanıcı ekleme, silme, güncelleme.
- MongoDB veritabanı ile bağlantı.
- Ortam değişkenleri `.env` ile gizlendi.
- React frontend ile etkileşimli kullanıcı arayüzü.

---

## 📁 Proje Yapısı

fullstack-user-app/
│
├── src/
│ ├── client/ # React frontend
│ ├── server/ # Express backend
│ │ ├── config/ # MongoDB bağlantı dosyası
│ │ ├── models/ # Mongoose schema (User.js)
│ │ └── server.js # Ana backend sunucusu
│
├── src/env/ # Örnek .env dosyaları
│ ├── .env-backend.example
│ └── .env-frontend.example
│
├── .env-backend # Gerçek backend ortam değişkeni (gitignore'da)
├── .env-frontend # Gerçek frontend ortam değişkeni (gitignore'da)
├── .gitignore
└── README.md
---

## 🛠️ Kurulum ve Çalıştırma

### 1. Depoyu Klonla

```bash
git clone https://github.com/kullanici-adin/fullstack-user-app.git
cd fullstack-user-app

### 2. Ortam Değişkenlerini Ayarla

cp src/env/.env-backend.example .env-backend
cp src/env/.env-frontend.example .env-frontend

### 3. Bağımlılıkları Kur

npm install

### 4. Uygulamayı Başlat

npm start("Bu komut hem Express backend’i hem de React frontend’i aynı anda çalıştırır. package.json dosyasına ayarlandı.")

--------------

🔒 Güvenlik
.env-backend ve .env-frontend gibi özel bilgiler .gitignore dosyasına eklendiği için GitHub’a yüklenmez.
Paylaşılabilir örnek dosyalar src/env/ klasörü içinde .env-backend.example ve .env-frontend.example olarak sunulmuştur.

--------------

http://localhost:3000 → React frontend arayüzü
http://localhost:3001/api/users → API endpoint (GET, POST, PUT, DELETE)

--------------

🧠 Notlar
MongoDB bağlantısı için Mongoose kullanıldı.
React uygulaması, fetch veya axios ile backend’e istek gönderir.
Geliştirici: Burak Gündoğan

