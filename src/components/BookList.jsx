import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Container>
      <Row className="">
        {props.books.map((book) => (
          <SingleBook key={book.asin} img={book.img} title={book.title} price={book.price} />
        ))}
        ;
      </Row>
    </Container>
  );
};
export default BookList;
