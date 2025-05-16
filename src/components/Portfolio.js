import "./Portfolio.css";

const projects = [
    {
        id: 1,
        title: "Yemek Sipariş Uygulaması",
        description: "Python ve SQLite veri tabanı kullanarak tasarladığım yemek sipariş uygulaması.",
        imageUrl: "/yemeksipariş.jpg", // public klasörüne koy
        link: "https://github.com/Metehan-Ulker/YemekSiparisUygulamasi" // <- Örnek link
    },
    {
        id: 2,
        title: "Word Benzeri Uygulama",
        description: "Python kullanarak tasarladığım Word benzeri uygulama.",
        imageUrl: "/foto3.jpg",
        link: "https://github.com/Metehan-Ulker/WordUygulamasi"
    },
    {
        id: 3,
        title: "Soru Bankası",
        description: "Python kullanarak tasarladığım soru bankası uygulaması.",
        imageUrl: "/foto2.jpg",
        link: "https://github.com/Metehan-Ulker/SoruBankasi"
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio-section" id="portfolio">
            <h2>Portfolyo</h2>
            <div className="portfolio-grid">
                {projects.map(({ id, title, description, imageUrl, link }) => (
                    <div key={id} className="portfolio-card fade-up">
                        <img src={imageUrl} alt={title} />
                        <div className="portfolio-info">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-portfolio"
                            >
                                Projeye Git
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
