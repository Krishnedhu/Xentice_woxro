import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { getData } from "./FetchData";
import UserCard from "./UserCard";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      console.log("data", response.data);
      setData(response.data);
    });
  }, []);
  console.log("Data is", data);
  data.map((item) => {});

  return (
    <Row>
      {data
        ? data.map((item) => (
            <Col sm={12} md={8} lg={6} xl={3}>
              <UserCard item={item} />
            </Col>
          ))
        : "no data"}
    </Row>
  );
}

export default Home;
