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

const InKindItems = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState();

  const handleInkindSubmit = async (event) => {
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
    window.location.href = " https://form.jotform.com/230325373171044";
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
            <Paragraph>Here is a list of our needs:</Paragraph>
            <Paragraph>
              Book Cases (logistics and implantation working on) minimum of 2
              can use others in the future if more are donated.
            </Paragraph>
            <Paragraph>
              Contact us if you have leads Books, gently used is okay, need to
              be newer books and all genres.
            </Paragraph>
            <Paragraph>100 minimum Games, gently used, are okay.</Paragraph>
            <Paragraph>
              100 minimum Art Supplies (nothing that needs cutting) groups of 5
              items. For example, a minimum of 5 art/sketch pads; 5 paint
              brushes Easel 4 maximum
            </Paragraph>
            <Paragraph>
              Traveling cart, to take books and games to those who can’t get out
              of their beds and for those in isolation (Covid Rooms)
            </Paragraph>
            <Paragraph>
              Medical equipment (to be determined) Any medical Items Walkers to
              bandages For our knapsacks: Minimum of 200 each (any and all
              extras are needed daily so the more the better!) Sack (backpack,
              knapsack, etc.)
            </Paragraph>
            <Paragraph>
              Body Wash (travel size) Shampoo (travel size) Conditioner (travel
              size) Lotion (travel size) Toothbrush Toothpaste (travel size) Bar
              Soap (travel size) Chap Stick Sunglasses Bath Towel Hand Towel
              Cool Towel
            </Paragraph>
          </Paragraph>

          <StyledDonate onClick={handleInkindSubmit} href="#">
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

export default InKindItems;
