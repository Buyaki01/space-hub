import {
  Card,
  Col,
  Row,
  Button,
} from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { toggleDragonReservation } from '../../redux/dragons/dragonReducer';

const DragonsPage = () => {
  const dispatch = useDispatch();
  const dragons = useSelector(({ dragonsReducer }) => dragonsReducer.dragons);

  const handleClick = (id) => {
    console.log(id);
    dispatch(toggleDragonReservation(id));
  };

  const dragonsList = dragons.map((dragon) => {
    const readMoreLink = <a href={dragon.wikipedia} target="_blank" rel="noreferrer noopener">Read More</a>;
    return (
      <Col key={dragon.id}>
        <Card style={{ height: '550px' }}>
          <Card.Img variant="top" src={dragon.flickr_images[0]} style={{ height: '300px' }} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title>{dragon.name}</Card.Title>
              <Card.Text>
                {`${dragon.description.split('').slice(0, 100).join('')}... `}
                {readMoreLink}
              </Card.Text>
            </div>
            {!dragon.reserved && (<Button variant="primary" onClick={() => handleClick(dragon.id)}>Reserve</Button>)}
            {dragon.reserved && (<Button variant="outline-danger" onClick={() => handleClick(dragon.id)}>Cancel</Button>)}
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
