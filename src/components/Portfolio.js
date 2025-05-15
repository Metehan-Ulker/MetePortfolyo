import "./Portfolio.css";

const projects = [
    {
        id: 1,
        title: "Yemek Sipariş Uygulaması",
        description: "Python ve SQLİTE Veri Tabanı kullanarak tasarladığım Yemek Sipariş Uygulaması",
        imageUrl: "/yemeksipariş.jpg", // public klasörüne koy

    },
    {
        id: 2,
        title: "Word Benzeri Uygulama",
        description: "Python kullanarak tasarladığım Word benzeri Uygulama",
        imageUrl: "/foto3.jpg",

    },
    {
        id: 3,
        title: "Soru Bankası",
        description: "Python kullanarak tasarladığım Soru Bankası Kitabı.",
        imageUrl: "/foto2.jpg",

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
                            <a href={link} target="_blank" rel="noreferrer" className="btn-portfolio">

                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
