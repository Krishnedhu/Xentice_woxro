import React from "react";
import { Card } from "react-bootstrap";

function UserCard({ item }) {
  console.log("items", item && JSON.parse(item?.images)[0]);
// console.log("items", {
//     "image":item && JSON.parse(item?.images)[0],
//     "propertyType":item && JSON.parse(item?.propertyType).name,
//     "location":item && JSON.parse(item?.location).city,
//     "priceRange" :item && JSON.parse(item?.priceRange),
//     "details":item && JSON.parse(item?.details),
//     "price":item && JSON.parse(item?.details).price,
//     "rate":item && JSON.parse(item?.details).price.rate,
//     "type":item && JSON.parse(item?.details).price.type,
// })
  return (
    <div>
      <Card style={{ width: "18rem",height:"18rem",marginBottom:"20px",marginLeft:"60px"}}>
        <Card.Img style={{margin: "0",
    height: "200px",
    width: "100%",
    objectFit: "cover",
    overflow: "hidden"}} variant="top" src={item && JSON.parse(item?.images)[0]} />

        <Card.Body style={{flex: "1 1 auto",
    padding: "1rem 1rem"}}>
          
          <Card.Text>
            <div>
           { item && JSON.parse(item?.location).city}
            </div>
            <div>
           {/* { item && JSON.parse(item?.details).rate} */}
            </div>
            <div>
           {/* { item && JSON.parse(item?.details).price.type} */}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
