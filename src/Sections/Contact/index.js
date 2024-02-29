import React from 'react';
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
    border-bottom: 2px solid var(--pink);
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
  position: relative;
  left: 450px;
  top: -200px;
`;

const TitleSection = styled.div`
transform:translatex(-530px) translatey(-130px);
color: #f5f4f4;
  font-size:22px;
  position:relative;
  top:2px;
  word-spacing:3.4px;
  text-decoration:none;
`;
const ParagraphSection1 = styled.div`
 
  left: -548px;
  position:relative;
  top:104px;
  font-size: 15px;
  color: #ffffff;

 top:-91px;
`;

const ParagraphSection2 = styled.div`
 
  left: -500px;
  top:-60px;
  color: #ffffff;
  position:relative;
 
`;

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
          <h2>notre société </h2>
          </TitleSection>
          < ParagraphSection1>
          <span className="primaryText"  >Call us : </span>
          <span className="secondaryText">021 123 145 14</span>
          </ParagraphSection1>
          <ParagraphSection2>
          <span className="primaryText"  >Send email to us :  </span>
          <span className="secondaryText">socité@gmail.com</span>
          </ParagraphSection2>
          
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