import React, { useState } from 'react';
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--white);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg) brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const MapSection = styled.div`
  margin-bottom: 30px;
  margin-top: 50px;
  color: #ffffff;
`;

const TitleSection = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  color: #ffffff;
`;

const Paragraph = styled.p`
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #ffffff;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  &:hover {
    background-color: #0056b3;
  }
`;

const EmailForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer l'e-mail avec les données du formulaire
    console.log(formData);
    // Réinitialiser le formulaire après l'envoi si nécessaire
    setFormData({
      email: '',
      message: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="contact-info">
        <Paragraph>Feel free to reach out to us. You can call us at <strong>565686985</strong> <br></br>
         or<br></br>
         send us an email.</Paragraph><br></br>
      </div>
      <div className="form-group">
        <Label htmlFor="email">Your Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email address"
        />
      </div>
      <div className="form-group">
        <Label htmlFor="message">Your Message</Label>
        <Input
          as="textarea"
          rows="4"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
        />
      </div>
      <Button type="submit">Send Email</Button>
    </Form>
  );
};

const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <Title>Get in touch</Title>
        <Icons>
          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com//">
            <img src={LinkedId} alt="LinkedId" />
          </a>
          <a href="https://twitter.com/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" />
          </a>
        </Icons>
        <TitleSection className="contact">
          <h2>Notre société</h2>
        </TitleSection>
        <EmailForm />
        <MapSection className="map-section">
          <div className="gmap-frame">
            <iframe
              width="456"
              height="333"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%C2%B7%20Avenue%20du%20Commandant%20Bejaoui,%204000%20Sousse.+(yooreed)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </MapSection>
      </ContactSection>
    </>
  );
};

export default Contact;
