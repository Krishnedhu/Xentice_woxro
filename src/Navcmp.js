import React from "react";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import logo from "./images/woxlandlogo.2adca2c7.png";
import img1 from "./images/download (2).png";
import img2 from "./images/download (3).png";
import img3 from "./images/download (4).png";
import img4 from "./images/download (5).png";
import img5 from "./images/download (6).png";
import img6 from "./images/download (7).png";
import img7 from "./images/download (8).png";
import img8 from "./images/download (9).png";
import img9 from "./images/download (10).png";
import img10 from "./images/location-kuala-lumpur-1000x565.jpg";
import img11 from "./images/engineer.877f1aa6.png";
import img12 from "./images/download.png";
import img13 from "./images/finance.15ca8db9.png";
import img14 from "./images/admin.e6b7a902.png";
import img15 from "./images/worker.ab3bc8e0.png";
import img16 from "./images/mentor.46f9b157.png";
import img17 from "./images/lawyer.f762a229.png";
import img18 from "./images/wall.f25d47c0.png";
import img19 from "./images/woman.4c9f4456.png";
import img20 from "./images/download (1).png";
import img21 from "./images/forest.102fd61a.png";
import img22 from "./images/T8KFRAQZrEa0ptImqcxSlURKmEMp2rzggcARfhoD.png";
import img23 from "./images/M2dhebuxJ100xVTDB0sKwbvlQYyG9POXRyEYz9rk.png";
import SearchCard from "./SearchCard";

function Navcmp() {
  return (
    <>
      <div>
        <img src={logo} width={150} height={64} />
        <Nav
          className="justify-content-end"
          activeKey="/home"
          style={{ flex: "100%" }}
        >
          <Nav.Item>
            <Nav.Link href="/home">Post Ad</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Near Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Login/Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <Navbar
          style={{
            backgroundColor: "#012b72",
            width: "100%",
            height: "100px",
            border: "white",
            justifyContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img1} width={40} height={40} />
            <p style={{ color: "white" }}>Commercial Shop</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img2} width={40} height={40} />
            <p style={{ color: "white" }}>Commercial Office</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img3} width={40} height={40} />
            <p style={{ color: "white" }}>Commercial Land</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img4} width={40} height={40} />
            <p style={{ color: "white" }}>Commercial Building</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img5} width={40} height={40} />
            <p style={{ color: "white" }}>Industrial Building</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img6} width={40} height={40} />
            <p style={{ color: "white" }}>Industrial Land</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img7} width={40} height={40} />
            <p style={{ color: "white" }}>Co-working Space</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img8} width={40} height={40} />
            <p style={{ color: "white" }}>Private Office</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={img9} width={40} height={40} />
            <p style={{ color: "white" }}>Meeting Room</p>
          </div>
          <br />
        </Navbar>
      </div>
      
      <div style={{position:"relative"}}>
        <img src={img10} width={"100%"} />
        <div style={{position:"absolute",top:"150px",left:"160px"}}><SearchCard/></div>
      </div>
      

      <Navbar
        style={{
          backgroundColor: "white",
          margin: "20px",
          border: "white",
          justifyContent: "center",
          justifyContent: "space-between",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img11} width={40} height={40} />
          <p>Builders</p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img12} width={40} height={40} />
          <p>Architects </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img13} width={40} height={40} />
          <p>Banking </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img14} width={40} height={40} />
          <p>IT Support </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img15} width={40} height={40} />
          <p> Labourers </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img16} width={40} height={40} />
          <p>Mentors </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img17} width={40} height={40} />
          <p>Advocates </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img18} width={40} height={40} />
          <p> Insurance</p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img19} width={40} height={40} />
          <p>Lifestyle</p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img20} width={40} height={40} />
          <p>Xentice Mart</p>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img21} width={40} height={40} />
          <p> Eco Living</p>
        </div>
      </Navbar>
      <Row>
        <Col>
          <img
            style={{ margin: "50px", paddingLeft: "150px" }}
            src={img22}
            width={"130%"}
          />
        </Col>
        <Col>
          <img
            style={{ margin: "50px", paddingLeft: "220px" }}
            src={img23}
            width={"80%"}
            height={"80%"}
          />
        </Col>
      </Row>
    </>
  );
}

export default Navcmp;
