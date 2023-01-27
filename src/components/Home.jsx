import React from "react";
import {
  Header,
  Section,
  H1,
  Paragraph,
  StyledButton,
  Button,
  BigImgContainer,
  SectionP,
} from "./Container.styled";

const Home = () => {
  return (
    <div>
      <Header>
        <img
          src={require("../assets/noBgBlack.png")}
          width={200}
          height={155.81}
          alt="Love and Service 1rst Logo"
        />
      </Header>
      <Section>
        <div>
          <H1>Love in action</H1>
          <Paragraph>
            Transforming lives by providing homeless individuals with the
            resources and support they need to achieve self-sufficiency and
            break the cycle of poverty.
          </Paragraph>

          <StyledButton>
            <a href="https://www.paypal.com/donate/?hosted_button_id=6FBHEGJ7DVXVU">
              DONATE TODAY
            </a>
          </StyledButton>
        </div>
      </Section>
      <BigImgContainer>
        <img
          src={require("../assets/heartimg.jpg")}
          width={"100%"}
          alt="Big Heart"
        />
      </BigImgContainer>
      <SectionP>
        <div style={{ margin: "0rem 10rem" }}>
          <div>
            "Pay it Forward" is an initiative started in Las Vegas to help the
            homeless population get back on their feet.
            <div style={{ fontSize: "17px", fontFamily: "Noto Serif" }}>
              - LAS1 team
            </div>
          </div>
        </div>
      </SectionP>
      <footer>
        {/* <img src="" alt="" srcset="" /> */}
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
      </footer>
    </div>
  );
};

export default Home;
