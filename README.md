# fardaTutor - GitHub Pages + Namecheap Kurulum Rehberi (TR)

Bu proje statik bir site (HTML/CSS/JS). Aşağıdaki adımlarla GitHub Pages'e yayınlayıp Namecheap'ten aldığınız alan adını bağlayabilirsiniz.

## 1) Depoyu GitHub'a gönderin
1. GitHub'da yeni bir repo oluşturun (ör: `fardaTutor`).
2. Yerelde bu klasörde aşağıdaki komutları çalıştırın:
```bash
git init
git remote add origin https://github.com/<kullanici-adiniz>/fardaTutor.git
git add .
git commit -m "Initial deploy setup"
git branch -M main
git push -u origin main
```

## 2) GitHub Pages'i açın
1. GitHub repo sayfasında: Settings → Pages.
2. Source: `Deploy from a branch` seçin.
3. Branch: `main` ve `/ (root)` klasörünü seçin → Save.
4. Birkaç dakika sonra `https://<kullanici-adiniz>.github.io/fardaTutor/` adresi çalışır.

## 3) Özel alan adını (Namecheap) bağlayın
- `CNAME` dosyasında alan adınızı yazın: `yourdomain.com`. Kendi alan adınızla değiştirin.
- Alt alan adı kullanacaksanız (ör: `www.yourdomain.com`), `CNAME` dosyasına onu yazın.

### Namecheap DNS ayarları
- Eğer KÖK alan adı kullanacaksanız (ör: `yourdomain.com`), Namecheap DNS'te A kayıtlarını şu GitHub Pages IP'lerine yönlendirin:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- `www` gibi bir alt alan adı kullanacaksanız, `www` için CNAME kaydı oluşturun ve `yourusername.github.io` adresine yönlendirin.

Ardından repo → Settings → Pages bölümünde Custom domain kısmına alan adınızı yazın ve **Enforce HTTPS** işaretli olsun.

## 4) Yardımcı dosyalar
- `.nojekyll`: GitHub Pages'in Jekyll işlememesini sağlar (klasör/asset isimleri nokta/alt çizgiyle başlıyorsa önemli).
- `404.html`: Kırık sayfalar için özel hata sayfası.
- `robots.txt`: Arama motorları erişim izni ve sitemap konumu.
- `sitemap.xml`: Basit site haritası (URL'yi kendi alan adınıza göre değiştirin).
- `.gitignore`: Gereksiz dosyaları repoya dahil etmez.

## 5) Alan adını bu projeye yazın
- `CNAME`, `robots.txt` ve `sitemap.xml` içinde `yourdomain.com` geçen yerleri kendi alan adınızla değiştirin.
- Değişiklikleri gönderin:
```bash
git add .
git commit -m "Set custom domain"
git push
```

Hepsi bu! 5-10 dk içinde alan adınız GitHub Pages sitenizi gösterecektir. SSL (HTTPS) aktif olması birkaç dakika sürebilir.
