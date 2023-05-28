import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'remixicon/fonts/remixicon.css';
import './cart.css';
import Sweet1 from '../../images/sweet1.png';
import Sweet2 from '../../images/sweet2.png';
import Sweet3 from '../../images/sweet3.png';
import Sweet4 from '../../images/sweet4.png';
import Sweet5 from '../../images/sweet5.png';
import Sweet6 from '../../images/sweet6.png';
import NewdishCard from './newdishCard.jsx';

const arrayArrival = [
  {
    src: Sweet1,
    alt: 'Crème Brûlée',
    name: 'Crème Brûlée',
    price: '$45.95',
  },
  {
    src: Sweet2,
    alt: 'Banoffee Pie',
    name: 'Banoffee Pie',
    price: '$20.95',
  },
  {
    src: Sweet3,
    alt: 'Chocolate Lava Cake',
    name: 'Chocolate Lava Cake',
    price: '$12.50',
  },
  {
    src: Sweet4,
    alt: 'Love Cookies',
    name: 'Love Cookies',
    price: '$12.50',
  },
  {
    src: Sweet5,
    alt: 'Strawberry Cheesecake',
    name: 'Strawberry Cheesecake',
    price: '$12.50',
  },
  {
    src: Sweet6,
    alt: 'Donuts',
    name: 'Donuts',
    price: '$12.50',
  },
];

export default function Newdishs() {
  return (
    <section className="pt_0">
    <Container>
      <Row>
        <Col className="text-center mb-4">
          <h2>Popular Food menu</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg="8">
          <div className="cart-container">
            {arrayArrival.map((item, index) => (
              <div key={index} className="single-product">
                <NewdishCard item={item} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    <h3 ><a className="new-dish-title" herf="#">menu ⥴
</a></h3>

  </section>

  );
}
