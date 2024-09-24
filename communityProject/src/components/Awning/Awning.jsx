import { Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Awning.css"; // Import CSS
import "../Resources/Resources.css";
import pic1 from "../../assets/Picture1.png";
import pic2 from "../../assets/Picture2.png";
import pic3 from "../../assets/Picture3.png";
import pic4 from "../../assets/Picture4.png";
import pic5 from "../../assets/Picture5.png";
import pic6 from "../../assets/Picture6.png";
import pic7 from "../../assets/Picture7.png";
import pic8 from "../../assets/Picture8.png";
import pic9 from "../../assets/Picture9.png";
import pic10 from "../../assets/Picture10.png";

const Awning = () => {
  return (
    <div className="awning-container mx-auto py-5">
      <div className="awning"></div>
      <div className=" mx-auto text-center py-5 resources-section">
        <h1 className="resources-title pb-5">Find the best restaurants</h1>
        <Row>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic1}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Sol Agave
                </Card.Title>
                <Card.Text className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  libero dolore fugiat commodi ipsum hic sed? A officia eveniet
                  dicta voluptate non. Ad sunt odio praesentium. Numquam
                  voluptatem magnam fugit?
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.solagave.com/santa-monica"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic2}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Misfit Restaurant
                </Card.Title>
                <Card.Text className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda non obcaecati possimus doloribus aliquam ratione
                  soluta facere cumque tempore necessitatibus maxime accusantium
                  fugiat, voluptas sunt corporis odio minus modi voluptates.
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.themisfitbar.com/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic3}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Tar and Roses
                </Card.Title>
                <Card.Text className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minus excepturi id cumque quidem aliquid sequi soluta, totam dolorum veniam ipsa iure eligendi eveniet molestias, beatae omnis ratione, quis qui.
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.tarandroses.com/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic4}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
                target="_blank"
                rel="noopener noreferrer"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                 Massilia
                </Card.Title>
                <Card.Text className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias ipsam optio error deleniti voluptates tenetur maiores sint, dolor quos ullam ab neque iste saepe iure pariatur quis, itaque odio.
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.massilia.com/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic5}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Penthouse Restaurant
                </Card.Title>
                <Card.Text className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit voluptatum molestiae deserunt aliquam sapiente quo eveniet totam, eaque ut modi id dolorem facere, cumque quia. Eum autem itaque aliquid!
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.penthouserestaurant.com/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic6}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                 Elephant Restaurant
                </Card.Title>
                <Card.Text className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae, quod aut dolor, nihil facilis eaque delectus, fugit magni alias rem! Voluptate dolore vero praesentium, sed a facilis eaque voluptas.
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.elephanterestaurants.com/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic7}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                  The Surfing Fox
                </Card.Title>
                <Card.Text className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis sunt repudiandae, cupiditate sapiente impedit, praesentium adipisci nemo, nisi facere dicta. Itaque natus sequi nihil provident illum, illo fugit. Laborum.
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.thesurfingfoxsm.com/?utm_source=google-gbp&utm_medium=organic&utm_campaign=gbp"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic8}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Rustic Canyon Restaurant
                </Card.Title>
                <Card.Text className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus vero doloremque autem optio asperiores veritatis aut quas voluptates alias, quisquam saepe deserunt omnis libero at ipsum amet! Repellendus, nostrum. Eligendi?
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://rusticcanyonrestaurant.com/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic9}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                 Water Grill
                </Card.Title>
                <Card.Text className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores officia dolorum ab ut saepe quibusdam exercitationem illo excepturi laboriosam hic vero voluptates sit reiciendis itaque nam voluptas, possimus consectetur.
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.watergrill.com/sm"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 card">
              <Card.Img
                src={pic10}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3 card-img"
              />
              <Card.Body>
                <Card.Title className="text-center card-title">
                  LouLou Restaurant
                </Card.Title>
                <Card.Text className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil reprehenderit quod sequi natus tenetur saepe in iure, blanditiis delectus magni quos placeat quis ut officia ea quo, libero aperiam.
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.loulousantamonica.com/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Awning;
