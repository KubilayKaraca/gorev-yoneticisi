# Görev Yöneticisi (Task Manager) - Frontend Projesi

Bu proje, modern web geliştirme süreçlerini kavramak ve pekiştirmek amacıyla geliştirilmiş, **CRUD (Create, Read, Update, Delete)** işlemlerini barındıran bir Görev Yöneticisi (Todo App) uygulamasıdır. Kullanıcıların verileri tarayıcı hafızasında (LocalStorage) tutularak veri kalıcılığı sağlanmıştır.

## 🚀 Proje Çıktıları ve Özellikler
- **Görev Ekleme:** Kullanıcılar listeye yeni bir görev ekleyebilir.
- **Görev Listeleme:** Eklenen tüm görevler arayüzde anlık olarak görüntülenir.
- **Görev Güncelleme (Düzenleme & Tamamlama):** Mevcut görevlerin metinleri güncellenebilir veya "Tamamlandı" olarak işaretlenerek üstü çizilebilir.
- **Görev Silme:** İstenilen görev listeden tamamen kaldırılabilir.
- **Veri Kalıcılığı:** Tüm veriler `LocalStorage`'a kaydedilir, sayfa yenilendiğinde veri kaybı yaşanmaz.
- **Responsive Tasarım:** Uygulama arayüzü her cihazda düzgün görünecek şekilde tasarlanmıştır.

## 🛠 Kullanılan Teknolojiler
- **ReactJS:** Kullanıcı arayüzü ve state yönetimi (`useState`, `useEffect` hook'ları).
- **Vite:** Hızlı ve modern frontend derleme aracı.
- **Tailwind CSS:** Hızlı, esnek ve modern arayüz stil optimizasyonları.
- **LocalStorage:** Tarayıcı tabanlı veri tabanı simülasyonu.

## 📸 Ekran Görüntüsü
![Görev Yöneticisi Ekran Görüntüsü](./[Ekran Görüntüsü İsmi, örn: screenshot.png])

## 🔗 Canlı Önizleme
Projeyi canlı olarak denemek için tıklayın: **[Netlify Canlı Linki Buraya Gelecek]**

## 💻 Kurulum ve Çalıştırma
Projeyi kendi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Projeyi Klonlayın:**
   ```bash
   git clone https://github.com/<senin-kullanici-adin>/gorev-yoneticisi.git
   ```
2. **Proje Klasörüne Girin:**
   ```bash
   cd gorev-yoneticisi
   ```
3. **Gerekli Paketleri Yükleyin:**
   ```bash
   npm install
   ```
4. **Geliştirici Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```
   *Terminalde beliren `http://localhost:5173/` adresine tıklayarak projeyi tarayıcınızda görüntüleyebilirsiniz.*

---
*Bu proje, TNC Group Web Geliştirme Javascript Proje Yönergesi kapsamında geliştirilmiştir.*