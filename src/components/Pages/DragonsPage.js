import {
  Card,
  Col,
  Row,
  Button,
} from 'react-bootstrap';

import { useSelector } from 'react-redux';

const DragonsPage = () => {
  const dragons = useSelector(({ dragonsReducer }) => dragonsReducer.dragons);
  const dragonsList = dragons.map((dragon) => {
    const readMoreLink = <a href={dragon.wikipedia} target="_blank" rel="noreferrer noopener">Read More</a>;
    return (
      <Col key={dragon.id}>
        <Card style={{ height: '520px' }}>
          <Card.Img variant="top" src={dragon.flickr_images[0]} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title>{dragon.name}</Card.Title>
              <Card.Text>
                {`${dragon.description.split('').slice(0, 100).join('')}... `}
                {readMoreLink}
              </Card.Text>
            </div>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Row xs={1} md={3} className="g-4 m-0">
      {dragonsList}
    </Row>
  );
};

export default DragonsPage;
