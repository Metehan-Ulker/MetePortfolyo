import "./About.css";

export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-image fade-left">
                    {/* Profil resmi eklenecek yer */}
                    <img src="/profil.jpg" alt="Benim Fotoğrafım" />
                </div>
                <div className="about-text fade-right">
                    <h2>Ben Kimim?</h2>
                    <p>
                        Merhaba! Ben Metehan. 25 Haziran 2003 tarihinde Aydında doğdum. Balıkesir Bilgisayar Mühendisliği
                        2.Sınıf Öğrencisiyim. Bilgisayarlara Teknolojiye ve Oyunlara ilgiliyim. Amacım Tecrübe edindiğim
                        ve edineceğim bilgileri günlük hayatta karşılaşabileceğim sorunlara karşı çözümler üretebilmek ve bu yolda kendimi
                        hep geliştirmek istiyorum.
                    </p>

                </div>
            </div>
        </section>
    );
}
