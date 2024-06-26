import { Button, Card, Col, Row } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col key={props.asin} sm="12" md="6" lg="4" xxl="3">
      <Card className="my-3 shadow">
        <Card.Img variant="top" style={{ aspectRatio: 3 / 4 }} src={props.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{props.title}</Card.Title>
          <Card.Text>{props.price} €</Card.Text>
          <Button variant="primary">Compra ora</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
