import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../images/red.avif"
import style from "../css/navbar.module.css"

const Demo = () => {
  return (
    <div>

 
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className={style.mainBody}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Price
        </Card.Text>

        <Card.Footer>
        <Button onClick={()=>{console.log("hiii");}} variant="primary">Buy</Button>
        <Button variant="success">Add to cart</Button>
        </Card.Footer>
        
      </Card.Body>
    </Card>




    </div>
  )
}

export default Demo