import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import seeds from '../assets/images/seeds.png';
import choclate from "../assets/images/choclate.png";
import './product.css';

const ProductPage = () => {
  return (
    <div className="container py-5">
      <Row className="g-4">
        <Col lg={4} md={6} sm={12}>
          <div className="image-container">
            <img src={seeds} alt="Product" className="img-fluid rounded" />
            <div className="overlay">
              <p>Since opening our first shop in 2017 AD, Kaffee Codes' goal has been straightforward.</p>
            </div>
          </div>
        </Col>
        
        <Col lg={4} md={6} sm={12}>
          <div className="card-container">
            <Card>
              <Card.Img variant="top" src={choclate} alt="Exclusive Brownie" className="product-img" />
              <Card.Body className="card-body-overlay">
                <Card.Title>Exclusive Brownie</Card.Title>
                <Card.Text className="text-warning">⭐⭐⭐⭐⭐ (23)</Card.Text>
                <Card.Text className="text-success">NPR 999</Card.Text>
                <Card.Text>Chocolate Brownie with Mint Leaves Toppings</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <div className="card-container">
            <Card>
              <Card.Img variant="top" src={choclate} alt="Exclusive Brownie" className="product-img" />
              <Card.Body className="card-body-overlay">
                <Card.Title>Exclusive Brownie</Card.Title>
                <Card.Text className="text-warning">⭐⭐⭐⭐⭐ (23)</Card.Text>
                <Card.Text className="text-success">NPR 999</Card.Text>
                <Card.Text>Chocolate Brownie with Mint Leaves Toppings</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
       

        
      </Row>
    </div>
  );
};

export default ProductPage;
