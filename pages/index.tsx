import PageNavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div>
      <PageNavBar />
      <Container fluid className={styles.titleContainer}>
        <Row>
          <Col md={6} sm={12}>
            <PageTitle />
          </Col>
          <Col md={6} sm={0} />
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
