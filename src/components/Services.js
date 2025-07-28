import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🎤",
      title: "Nagłośnienie koncertów i festiwali",
      description:
        "Oferujemy systemy nagłośnieniowe typu line array dla dużych wydarzeń plenerowych oraz tradycyjne systemy konwencjonalne dla mniejszych przestrzeni.",
      features: [
        "Systemy line array",
        "Równomierne pokrycie dźwiękiem",
        "Minimalizacja strat jakości",
      ],
    },
    {
      icon: "🏢",
      title: "Konferencje i eventy biznesowe",
      description:
        "Specjalizujemy się w nagłośnieniu konferencji z systemami do tłumaczeń symultanicznych.",
      features: [
        "Systemy tłumaczeń symultanicznych",
        "Bezprzewodowe mikrofony",
        "Obsługa multimedialna",
        "Projektory i ekrany LED",
      ],
    },
    {
      icon: "🎭",
      title: "Imprezy teatralne i kulturalne",
      description:
        "Realizujemy nagłośnienie spektakli teatralnych, musicali oraz koncertów muzyki klasycznej.",
      features: [
        "Spektakle teatralne",
        "Musicale",
        "Koncerty muzyki klasycznej",
        "Doskonała zrozumiałość mowy",
      ],
    },
    {
      icon: "🎉",
      title: "Eventy firmowe i prywatne",
      description:
        "Obsługujemy wesela, jubileusze, imprezy firmowe oraz eventy hotelowe.",
      features: [
        "Wesela",
        "Jubileusze",
        "Imprezy firmowe",
        "Kompleksowa obsługa techniczna",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: "🎧",
      title: "Systemy monitorowe dla artystów",
      description: "Zapewniamy profesjonalne odsłuchy sceniczne",
    },
    {
      icon: "📟",
      title: "Rental sprzętu audio",
      description: "Wynajem wysokiej klasy urządzeń nagłośnieniowych",
    },
    {
      icon: "💡",
      title: "Doradztwo akustyczne",
      description: "Pomoc w doborze optymalnych rozwiązań dźwiękowych",
    },
    {
      icon: "🔧",
      title: "Obsługa techniczna 24/7",
      description: "Wsparcie techniczne podczas całego wydarzenia",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nasze Usługi</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Kompleksowe rozwiązania akustyczne dla każdego typu wydarzenia
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="additional-services">
          <h3>Dodatkowe usługi</h3>
          <div className="additional-services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-service-item">
                <div className="additional-service-icon">{service.icon}</div>
                <div className="additional-service-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Potrzebujesz profesjonalnego nagłośnienia?</h3>
            <p>
              Skontaktuj się z nami, aby omówić szczegóły Twojego wydarzenia
            </p>
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
