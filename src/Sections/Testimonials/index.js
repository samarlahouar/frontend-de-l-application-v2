import React, { lazy } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

import avatar1 from "../../assets/avatar-1.jpg";
import avatar2 from "../../assets/avatar-2.jpg";
import avatar3 from "../../assets/avatar-3.jpg";
import avatar4 from "../../assets/avatar-4.jpg";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid ;
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Nous services </Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            id="1"
            text="Visualisez, organisez, réussissez : la gestion des tableaux, 
             votre clé pour un travail efficace et structuré"
            name="Gestion des taches "
            image="avatar-1"
           
           
          >
            <Link to="/employer">Gestion des taches</Link>
          </Card>
          <Card
            id="2"
            text="Libérez le potentiel de vos équipes : 
            une gestion des employés innovante pour des résultats exceptionnels."
            name="Gestion des employés"
            image="avatar-2"
           
           
          />

          <Card
            id="3"
            text="Transformez vos idées en succès :
            une gestion de projet efficace pour des réalisations remarquables "
            name="Gestion des projets "
            image="avatar-3"
            
            
          />

          <Card
            id="4"
            text="Un leadership stratégique : 
            optimisez vos départements pour une performance d'exception"
            name="Gestion des départements "
            image="avatar-4"
            
           
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
