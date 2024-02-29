import styled, { keyframes } from "styled-components";
import pinkBlob from "../../assets/blobPink.png";
import purpleBlob from "../../assets/blob purple.png";
import whiteBlob from "../../assets/blob white.png";
import Mobile from "../../assets/mobile.svg";

const move = keyframes`
  0% { transform: translateY(-5px) }
  50% { transform: translateY(10px) }
  100% { transform: translateY(-5px) }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--black);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  /* Nouvelle couleur de titre */
  color: #2a1f84;
  font-family: 'Prata', serif;
  width:688px;
 position:relative;
 left:-60px;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  transform:translatex(-56px) translatey(3px);
  color:#000000;
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #0000;
  display: flex;
  justify-content: center;
  position: relative;
  
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <Blobs>
        <PinkBlob>
          <img src={pinkBlob} alt="" width="400" height="400" />{" "}
        </PinkBlob>
        <WhiteBlob>
          <img src={whiteBlob} alt="" width="400" height="400" />
        </WhiteBlob>
        <PurpleBlob>
          <img src={purpleBlob} alt="" width="400" height="400" />
        </PurpleBlob>
      </Blobs>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Title>Révolutionnez votre avancement avec une gestion des matériaux adaptée à notre ère d'innovation et de technologie</Title>
          <SubText>
            La gestion des matériaux de téléport assure une avancée fulgurante dans notre société, car le progrès ne se limite plus au papier et au stylo, mais évolue avec l'innovation et la technologie de notre ère
          </SubText>
        </Lb>
        <MobileSvg
          src={Mobile}
          alt="Mobile Svg"
          srcSet=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;