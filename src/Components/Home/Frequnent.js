import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap";
import ss1 from "../Images/ss1.jpg"
import "./Frequnent.css"
import {Col,Row} from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

export default class Frequnent extends Component{
    render(){
        return(
        <div style={{margin:"10px"}}> 
        <h3 className="heads">Top Seller</h3>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={ss1} />
        <Card.Body>
          <h1>Onion</h1>
            <h6>Price: Rs:100</h6>
        <Button>Add To Cart</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ss1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ss1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ss1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
        )
    }
}