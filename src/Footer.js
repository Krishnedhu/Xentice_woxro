
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>ABOUT US</Heading>
            <FooterLink href="#">How Xentice works</FooterLink>
            <FooterLink href="#">Founders Letter</FooterLink>
            <FooterLink href="#">Newsroom</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Xentice Gold</FooterLink>
            <FooterLink href="#">Xentice Platinum</FooterLink>
            <FooterLink href="#">Startup Support</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </Column>
          <Column>
            <Heading>EXPLORE</Heading>
            <FooterLink href="#">Diversity & Discrimination</FooterLink>
            <FooterLink href="#">Accessibility</FooterLink>
            <FooterLink href="#">Xentice Associates</FooterLink>
            <FooterLink href="#">Xentice Team</FooterLink>
            <FooterLink href="#">Xentice Mall</FooterLink>
            <FooterLink href="#">Xstudio</FooterLink>
            <FooterLink href="#">Xmoney</FooterLink>
            <FooterLink href="#">Entice Spaces</FooterLink>
          </Column>
          <Column>
          <Heading>SERVICES</Heading>
            <FooterLink href="#">Buttons & Badges</FooterLink>
            <FooterLink href="#">Mobile Apps</FooterLink>
            <FooterLink href="#">For Companies</FooterLink>
            <FooterLink href="#">Mobile Apps</FooterLink>
            <FooterLink href="#">Review Professionals</FooterLink>
            <FooterLink href="#">Suggested Professionals</FooterLink>
            <FooterLink href="#">Resource Centre</FooterLink>
            <FooterLink href="#">Community Centre</FooterLink>
          </Column>
          <Column>
          <Heading>SUPPORT</Heading>
            <FooterLink href="#">Our COVID-19 Response</FooterLink>
            <FooterLink href="#">Help Centre</FooterLink>
            <FooterLink href="#">Cancellation options</FooterLink>
            <FooterLink href="#">Neighbourhood Support</FooterLink>
            <FooterLink href="#">Corporate contact</FooterLink>
            <FooterLink href="#">Trust & Safety</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Payment gateway</FooterLink>
          </Column>
          
          
        </Row>
      </Container>
      <p style={{color:"white",margin:"20px"}}>
     <h4> <strong>DISCLAIMER</strong></h4>

    Please do not share your xentice password, Credit/Debit card pin, other confidential information with <br/>
    anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such<br/>
     communications & report to us at support@xentice.com.<br/>
     <hr style={{borderWidth:"3px",color:"white"}}></hr>
      </p>
      <p style={{color:"white"}}>© Xentice Group of Companies 2022 . All Rights Reserved
      <div>
        <p
          
          
          style={{ flex: "100%",marginLeft:"80%",justifyContent:"space-between",justifyContent:"space-evenly",display: "flex"}}
        >
           <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
        </p>
      </div>
        </p>
    </Box>
  );
};
export default Footer;