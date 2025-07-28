import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>O nas</h2>
          <div className="divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p className="lead">
                SoundTech Pro to doświadczona firma specjalizująca się w
                profesjonalnej obsłudze akustycznej różnorodnych wydarzeń.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🎵</div>
                <div className="detail-content">
                  <h3>Ponad 15 lat doświadczenia</h3>
                  <p>
                    Zapewniamy najwyższą jakość nagłośnienia dla koncertów,
                    konferencji, eventów firmowych oraz imprez kulturalnych.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🎯</div>
                <div className="detail-content">
                  <h3>Indywidualne podejście</h3>
                  <p>
                    Nasze podejście opiera się na indywidualnym traktowaniu
                    każdego zlecenia, dopasowując rozwiązania techniczne do
                    specyficznych potrzeb klientów.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🏆</div>
                <div className="detail-content">
                  <h3>Renomowane marki</h3>
                  <p>
                    Współpracujemy z renomowanymi markami sprzętu audio:
                    L'Acoustics, Yamaha, Sennheiser, HK Audio - gwarancja
                    niezawodności i doskonałej jakości dźwięku.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">👥</div>
                <div className="detail-content">
                  <h3>Wykwalifikowany zespół</h3>
                  <p>
                    Zespół składa się z wykwalifikowanych realizatorów dźwięku,
                    techników scenicznych oraz specjalistów od akustyki.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-philosophy">
            <div className="philosophy-box">
              <h3>Nasza filozofia</h3>
              <p>
                <strong>
                  Połączenie zaawansowanej technologii z artystyczną
                  wrażliwością.
                </strong>
                Potrafimy stworzyć optymalne warunki dźwiękowe dla każdego typu
                wydarzenia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
