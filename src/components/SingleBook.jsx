import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: "primary",
  };

  render() {
    return (
      <Col key={this.props.asin} sm="12" md="6" lg="4" xxl="3" className="my-3">
        <Card classNaneme="my-3 shadow" onClick={() => this.setState({ selected: "secondary" })}>
          <Card.Img variant="top" style={{ aspectRatio: 3 / 4 }} src={this.props.img} />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.title}</Card.Title>
            <Card.Text>{this.props.price} €</Card.Text>
            <Button variant={this.state.selected}>Compra ora</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
