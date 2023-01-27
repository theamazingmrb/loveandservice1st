import React from "react";
import { Header, Section, H1, Paragraph, StyledButton, BigImgContainer, SectionP, Footer, Links, ImgDiv, ContactDiv} from "./Container.styled";

const Home = () => {
  return (
    <div style={{width: "100%"}}>
      <Header><img src={require('../assets/noBgBlack.png')} width={200} height={155.81}  alt="Love and Service 1rst Logo" /></Header>
      <Section>
          <div>  
              <H1>Love in action</H1>
              <Paragraph>
              Transforming lives by providing homeless individuals with the
              resources and support they need to achieve self-sufficiency and break
              the cycle of poverty.
              </Paragraph>
              
              <StyledButton>
                DONATE TODAY
              </StyledButton>
              
            </div>
        </Section>
      <BigImgContainer>
        <img src={require('../assets/heartimg.jpg')} width={"100%"} alt="Big Heart" />
      </BigImgContainer>
      <SectionP>
        <div style={{margin: "0rem 10rem"}}>
          <div>"Pay it Forward" is an initiative started in Las Vegas to help the
           homeless population get back on their feet. 
           <div style={{fontSize: "17px", fontFamily: "Noto Serif" }}>- LAS1 team</div>
          </div>
        </div>
      </SectionP>
      <Footer>
      
        <ImgDiv>
          <img src={require('../assets/noBgBlack.png')} width={200} height={155.81} alt="Love and Service 1rst Logo" />
        </ImgDiv>
      <div style={{display: "flex"}}>
        
        <Links>  
          <a href="#" style={{ margin: "0px 0px 5px 0px", color: "#000000", fontWeight: "bold", textDecoration: "none"}}>Facebook</a>
          <a href="#" style={{ margin: "5px 0px", color: "#000000", fontWeight: "bold", textDecoration: "none"}}>Twitter</a>
          <a href="#" style={{ margin: "5px 0px", color: "#000000", fontWeight: "bold", textDecoration: "none"}}>Instagram</a>
          <a href="#" style={{ margin: "5px 0px", color: "#000000", fontWeight: "bold", textDecoration: "none"}}>Linkedin</a>
        </Links>
        <ContactDiv>
            <p style={{ margin: "0px"}}>416 887 5555</p>
            <p style={{ margin: "5px 0px"}}>123 address st.</p>
            <p style={{ margin: "5px 0px"}}>email@example.com</p>
            <p style={{ margin: "5px 0px"}}>yourwebsite.com</p>
            <p style={{ margin: "24px 0px 0px 0px"}}>Made with </p>           
        </ContactDiv>

        </div>
        <div></div>
      </Footer>
    </div>
  );
};

export default Home;
