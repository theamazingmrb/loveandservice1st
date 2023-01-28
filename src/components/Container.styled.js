import styled from "styled-components";

export const Header = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 0;
  // width: auto;
`;
export const Section = styled.div`
  padding: 30px 15px 30px 15px;
  margin-top: 0;
  margin-bottom: 0;
  // max-width: 100%;
  position: relative;
  margin: 0 auto;
  // min-width: 550px;
`;
export const H1 = styled.h1`
  color: #000000;
  font-size: 70px;
  font-family: "Alice";
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const Paragraph = styled.div`
  font-size: 22px;
  font-family: "Alice";
  // max-width: 570px;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  padding-top: 0.5rem;
  font-family: Lato;
`;
export const StyledButton = styled.button`
  width: 170px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 0;
  padding: 0;
  display: block;
  float: none;
  top: 0;
  left: 0;
  position: relative;
  // min-width: 0;
  // max-width: 100%;
  text-align: center;
  background-color: #302939;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
export const Button = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.125 rem;
  line-height: normal;
  white-space: normal;
  padding: 10px 7px;
  max-width: 98%;
`;
export const BigImgContainer = styled.div`
  padding: 30px 15px;
  width: 100%;
  // min-width: 720px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
export const SectionP = styled.div`
  padding: 105px 15px;
  background: #ffd8d8;
  font-size: 40px;
  font-family: "Alice";
  // min-width: 720px;
  text-align: center;
`;

export const Footer = styled.div`
  padding: 65px 0px;
  // width: 100%;
  background: #ffd8d8;
  font-size: 16px;
  font-family: "Helvetica";
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ImgDiv = styled.div`
  padding: 0px 15px;
  padding-left: 10%;

  @media (max-width: 400px) {
    
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
  }
`;

export const Links = styled.div`
  margin: 0px 0px 7px;
  font-size: 16px;
  font-family: Helvetica;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  width: 10rem;
  align-items: start;
  text-style: none;
`;

export const ContactDiv = styled.div`
  padding: 0px;
  margin: 0px;
  align-items: start;
  text-align: start;
`;

export const StyledDonate = styled.a`
  color: "white";
  text-decorations: none;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  width: 100vw;
`;
