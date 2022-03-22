import React, { useState } from "react";
import {
  Navbar,
  Form,
  Button,
  Col,
  Row,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const Header = (props) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [showError, setShowError] = useState(false);

  const handleClick = () => {
    const parsedLat = parseFloat(latitude);
    const parsedLong = parseFloat(longitude);
    setShowError(isNaN(parsedLat) || isNaN(parsedLong));
    if (!isNaN(parsedLat) && !isNaN(parsedLong)) {
      props.setMarker({
        latitude: parsedLat,
        longitude: parsedLong,
      });
    }
  };

  return (
    <Navbar className="bg-light justify-content-between">
      <Container className="justify-content-md-center">
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Latitude"
              value={latitude}
              className="mb-3"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Longitude"
              value={longitude}
              className="mb-3"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit" onClick={handleClick} className="mb-3">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
      {showError && (
        <ToastContainer
          position={"middle-center"}
          className={"mt-2"}
          style={{ width: "170px" }}
        >
          <Toast onClose={() => setShowError(false)} delay={3000} autohide>
            <Toast.Header>Invalid Location !!</Toast.Header>
          </Toast>
        </ToastContainer>
      )}
    </Navbar>
  );
};

export default Header;
