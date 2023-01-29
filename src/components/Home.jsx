import React, { useState } from "react";
import {
  Header,
  Section,
  H1,
  Paragraph,
  StyledButton,
  BigImgContainer,
  SectionP,
  Footer,
  Links,
  ImgDiv,
  ContactDiv,
  StyledDonate,
  StyledInput,
  ErrorText,
  SectionPSubDiv,
  PEmailText,
  HendersonText
} from "./Container.styled";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email != "" && email != null && amount != "" && amount != null) {
      const docRef = await addDoc(collection(db, "donations"), {
        name,
        email,
        amount,
        comments,
      });

      // console.log("Document written with ID: ", docRef.id);

      if (docRef.id) {
        window.location.href =
          "https://www.paypal.com/donate/?hosted_button_id=6FBHEGJ7DVXVU";
      }
    } else {
      setError("Please enter your email address and an amount");
      setTimeout(() => {
        setError(null);

        return clearInterval();
      }, 5000);
    }
    // Push the data to the Firebase database
    // db.collection("donations").add({
    //   name,
    //   email,
    //   amount,
    //   time: new Date(),
    // });
  };

  return (
    <div style={{ width: "100%" }}>
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

          <Paragraph>
            Please enter your email and donation amount before hitting donate.
          </Paragraph>

          <StyledInput
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <StyledInput
            placeholder="Note/Comments"
            onChange={(e) => setComments(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <StyledDonate onClick={handleSubmit} href="#">
            {" "}
            <StyledButton>DONATE </StyledButton>
          </StyledDonate>
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
        <SectionPSubDiv>
          "Pay it Forward" is an initiative started in Las Vegas to serve the
          homeless population and empower them to get back on their feet.
          <div style={{ fontSize: "17px", fontFamily: "Noto Serif" }}>
            - LAS1 team
          </div>
        </SectionPSubDiv>
      </SectionP>
      <Footer>
        <ImgDiv>
          <img
            src={require("../assets/noBgBlack.png")}
            width={200}
            height={155.81}
            alt="Love and Service 1rst Logo"
          />
        </ImgDiv>


        <div style={{ display: "flex" }}>
          <Links>
            <a
              href="https://www.facebook.com/loveandservice1st/"
              style={{
                margin: "0px 0px 5px 0px",
                color: "#000000",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/loveandservice1st/"
              style={{
                margin: "5px 0px",
                color: "#000000",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/loveandservice1st/"
              style={{
                margin: "5px 0px",
                color: "#000000",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Instagram
            </a>
            <a
              href="https://www.Linkedin.com/loveandservice1st/"
              style={{
                margin: "5px 0px",
                color: "#000000",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Linkedin
            </a>
          </Links>
          <ContactDiv>
            <p style={{ margin: "5px 0px" }}>6151 S McLeod Dr STE A</p>
            <PEmailText style={{ margin: "5px 0px" }}>
              loveandservice1st@gmail.com
            </PEmailText>
            <p style={{ margin: "24px 0px 0px 0px" }}>Made with &#10084;</p>
          </ContactDiv>
        </div>
        <div></div>
      </Footer>
      <HendersonText >
          Pay it Forward is a component fund of the Henderson Comunity
          Foundation, a recognized 501(c)3 corporation in the State of Nevada
        </HendersonText>
    </div>
  );
};

export default Home;
