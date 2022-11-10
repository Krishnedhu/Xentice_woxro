import React from "react";
import { Button, Card } from "react-bootstrap";

function SearchCard() {
  return (
    <div>
      <Card style={{ width: "25rem", height: "25rem" }}>
        <Card.Body>
          <Card.Title>
            <strong style={{fontSize:"35px"}}>Choose from 25,00+ Spaces for your Business</strong>
           
          </Card.Title>
          <Card.Text>
          <p>Get inspired and find your perfect place</p>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="">Looking for</option>
              <option value="Commercial Shop">Commercial Shop</option>
              <option value="Commercial Office">Commercial Office</option>
              <option value="Commercial Land">Commercial Land</option>
              <option value="Commercial Building">Commercial Building</option>
              <option value="Industrial Building">Industrial Building</option>
              <option value="Industrial Land">Industrial Land</option>
              <option value="Co-working Space">Co-working Space</option>
              <option value="Private Office">Private Office</option>
              <option value="Meeting Room">Meeting Room</option>
            </select><br/>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Cochin">Cochin</option>
              <option value="Chennai">Chennai</option>
            </select>
          </Card.Text>
          <button style={{width:"100%",backgroundColor:"#012b72",borderColor:"#012b72"}} type="button" class="btn btn-primary mb-5">Search</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SearchCard;
