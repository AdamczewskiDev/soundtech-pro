import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Imię i nazwisko jest wymagane";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email jest nieprawidłowy";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon jest wymagany";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Wiadomość jest wymagana";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - simulate submission
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          message: "",
        });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Kontakt</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Skontaktuj się z nami, aby omówić szczegóły Twojego wydarzenia
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Informacje kontaktowe</h3>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>kontakt@soundtechpro.pl</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Telefon</h4>
                <p>+48 22 123 45 67</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Adres</h4>
                <p>
                  ul. Marszałkowska 100
                  <br />
                  00-026 Warszawa
                </p>
              </div>
            </div>

            <div className="business-hours">
              <h4>Godziny pracy</h4>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Poniedziałek - Piątek:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="hours-item">
                  <span>Sobota:</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="hours-item">
                  <span>Niedziela:</span>
                  <span>Na umówione spotkanie</span>
                </div>
              </div>
              <div className="availability-note">
                <p>
                  <strong>Dostępność techniczna 24/7 podczas eventów</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Napisz do nas</h3>

            {isSubmitted && (
              <div className="success-message">
                <p>
                  ✅ Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
                </p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Imię i nazwisko *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="eventType">Typ wydarzenia</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="">Wybierz typ wydarzenia</option>
                  <option value="koncert">Koncert/Festiwal</option>
                  <option value="konferencja">Konferencja</option>
                  <option value="teatr">Wydarzenie teatralne</option>
                  <option value="wesele">Wesele</option>
                  <option value="firmowy">Event firmowy</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Wiadomość *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Opisz szczegóły swojego wydarzenia..."
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
