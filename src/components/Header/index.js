import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import LoginPopup from "../../Sections/LoginPopup"; // Importez votre composant LoginPopup
import "./hed.css";
import AccountRequestPopup from "../../Sections/AccountRequestPopup";

const Headers = styled.header`
  display: flex;
  height: 85px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #799aa23d; /* Nouvelle couleur */
  color: var(--black); /*couleur de nom logo*/
  position: relative;
  z-index: 500;
  backdrop-filter: blur(40px); /* Appliquer l'effet de flou */
  -webkit-backdrop-filter: blur(40px);
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;

  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--black);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--black);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
    effet: "blur(20)";
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--black);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // État pour contrôler l'affichage du popup de connexion
  const [showAccountRequestPopup, setShowAccountRequestPopup] = useState(false); // État pour contrôler l'affichage du popup de demande de compte

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Vérifiez si l'élément existe avant d'appeler scrollIntoView
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  const handleClick = (id, e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    setClick(!click);
    if (id === "se connecter") {
      console.log("Bouton 'Se connecter' cliqué");
      setShowLoginPopup(true);
    } else if (id === "Demander un compte") {
      console.log("Bouton 'Demander un compte' cliqué");
      setShowAccountRequestPopup(true);
    } else {
      scrollUp(id, e);
    }
  };
  const handleClosePopup = () => {
    setShowLoginPopup(false);
    setShowAccountRequestPopup(false);
  };
  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Headers ref={ref}>
      <Logo>
        <img src={logo} alt="logo" />
        <div className="text-container">
          <span className="text-item">Gestion</span>
          <span className="text-item">Des Matériaux</span>
        </div>
      </Logo>
      <Nav>
        <div className="a1">
          <a className="home" href="#home" onClick={(e) => scrollUp("home", e)}>
            Accueil
          </a>
        </div>
        <a
          className="about"
          href="#about"
          onClick={(e) => scrollUp("about", e)}
        >
          À-propos
        </a>
        <a
          className="services"
          href="#services"
          onClick={(e) => scrollUp("services", e)}
        >
          Services
        </a>
        <a
          className="contact"
          href="#contact"
          onClick={(e) => handleClick("contact", e)}
        >
          Contact
        </a>
        <a
          className="se connecter"
          href="#se connecter"
          onClick={(e) => handleClick("se connecter", e)}
        >
          <Button>Se connecter</Button>
        </a>
        <a
          className="Demander un compte "
          href="#Demander un compte "
          onClick={(e) => handleClick("Demander un compte", e)}
        >
          <Button>Demander de compte</Button>
        </a>
      </Nav>
      {showLoginPopup && (
        <LoginPopup handleClose={() => setShowLoginPopup(false)} />
      )}{" "}
      {/* Afficher le popup de connexion si showLoginPopup est vrai */}
      {showAccountRequestPopup && (
        <AccountRequestPopup handleClose={handleClosePopup} />
      )}{" "}
      {/* Afficher le popup de demande de compte si showAccountRequestPopup est vrai */}
      <HamburgerBtn clicked={+click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={+click}>
        <a
          className="home"
          href="#home"
          onClick={(e) => handleClick("home", e)}
        >
          accueil
        </a>
        <a
          className="about"
          href="#about"
          onClick={(e) => handleClick("about", e)}
        >
          À-propos
        </a>
        <a
          className="services"
          href="#services"
          onClick={(e) => handleClick("services", e)}
        >
          Services
        </a>
        <a
          className="contact"
          href="#contact"
          onClick={(e) => handleClick("contact", e)}
        >
          Contact
        </a>
        <button
          className="se connecter"
          onClick={(e) => handleClick("se connecter", e)}
        >
          <Button>Se connecter</Button>
        </button>
        <a
          className="Demander un compte "
          href="#Demander un compte "
          onClick={(e) => handleClick("Demander un compte", e)}
        >
          <Button>Demander de compte</Button>
        </a>
      </MobileMenu>
      {showLoginPopup && (
        <LoginPopup handleClose={() => setShowLoginPopup(false)} />
      )}{" "}
      {/* Afficher le popup de connexion si showLoginPopup est vrai */}
      {showAccountRequestPopup && (
        <AccountRequestPopup handleClose={handleClosePopup} />
      )}{" "}
      {/* Afficher le popup de demande de compte si showAccountRequestPopup est vrai */}
    </Headers>
  );
};

export default Header;
