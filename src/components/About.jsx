import React, { useState, useEffect } from "react";
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
  HendersonText,
} from "./Container.styled";
import { db } from "../utils/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (email != "" && email != null && amount != "" && amount != null) {
    //   const docRef = await addDoc(collection(db, "donations"), {
    //     name,
    //     email,
    //     amount,
    //     comments,
    //   });

    // console.log("Document written with ID: ", docRef.id);

    // if (docRef.id) {
    window.location.href = "https://form.jotform.com/230269407863057";
    //   }
    // } else {
    //   setError("Please enter your email address and an amount");
    //   setTimeout(() => {
    //     setError(null);

    //     return clearInterval();
    //   }, 5000);
    // }
    // Push the data to the Firebase database
    // db.collection("donations").add({
    //   name,
    //   email,
    //   amount,
    //   time: new Date(),
    // });
  };

  const getDonations = async () => {
    const querySnapshot = await getDocs(collection(db, "donations"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
          <Paragraph>
            Love and Service First is a "pay it forward" initiative started in
            Las Vegas to help the homeless population get back on their feet. We
            understand that homelessness is a complex issue and that it requires
            a multi-faceted approach to truly make a difference. That's why we
            offer a variety of services to those in need, including supplying
            basic necessities such as food, clothing, and hygiene products, as
            well as providing them with haircuts and grooming services to help
            them look and feel their best as they search for jobs and housing.
            We also connect those interested in counseling and support services
            to help individuals address any underlying issues that may have
            contributed to their homelessness. Love and Service First is not
            just about providing practical assistance; we also offer a sense of
            community and support to the homeless individuals we serve. The
            organization is made up of volunteers who are passionate about
            making a positive change in the lives of those who are struggling.
            We not only provide resources, but also offer a listening ear and a
            helping hand, showing the homeless population that they are valued
            and cared for. In addition to these practical services, Love and
            Service First understands that homelessness can be an isolating
            experience, and strives to create a supportive and welcoming
            environment where individuals can feel seen and valued. We believe
            that by providing both practical resources and emotional support, we
            can empower individuals to take the steps necessary to build safer,
            happier lives for themselves. The ultimate goal of "Pay it Forward"
            is to empower homeless individuals to take control of their lives
            and build safer, happier futures for themselves. By providing tools
            to succeed, the initiative aims to break the cycle of homelessness
            and promote self-sufficiency. We work closely with local shelters
            and organizations to ensure that their services are reaching those
            who need it most. Through our efforts and with the help of community
            donations and fundraising events, we hope to create a brighter
            future for the homeless population in Las Vegas and pave the way for
            a more truly compassionate and equitable society.
          </Paragraph>

          <StyledDonate onClick={handleSubmit} href="#">
            {/* {
              <script
                type="text/javascript"
                src="https://form.jotform.com/jsform/230269407863057"
              ></script>
            } */}
            <StyledButton>DONATE </StyledButton>
          </StyledDonate>
        </div>
      </Section>
      <div>
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
                href="https://www.facebook.com/loveandservicefirst/"
                style={{
                  margin: "0px 0px 5px 0px",
                  color: "#000000",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Facebook
              </a>
              {/* <a
              href="https://www.twitter.com/loveandservice1st/"
              style={{
                margin: "5px 0px",
                color: "#000000",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Twitter
            </a> */}
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
                href="https://www.linkedin.com/in/loveandservice1st"
                style={{
                  margin: "5px 0px",
                  color: "#000000",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Linkedin
              </a>
              <a
                href="https://www.tiktok.com/@love_and_service_1st"
                style={{
                  margin: "5px 0px",
                  color: "#000000",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Tiktok
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
        <HendersonText>
          Pay it Forward is a component fund of the Henderson Community
          Foundation, a recognized 501(c)3 corporation in the State of Nevada
        </HendersonText>
      </div>
    </div>
  );
};

export default About;
