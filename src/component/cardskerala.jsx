import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k  from  './images/kochi.jpg'
import alap from './images/Alapuzha.jpg';
import  mn from './images/munnar.jpg';
import svp from './images/SilentVally.jpg'
import { Container, Row,Col } from 'react-bootstrap';
function Cardskerala(){
    return(
        <>
       <Container>
        <Row>
        <Col lg={3} className='mb-2'>
            <Card>
                <Card.Img variant="top" src={k}  style={{height:'120px'}}/>
                <Card.Body>
                <Card.Title>Kochi</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </Col>
        <Col lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={alap}  style={{height:'120px'}}/>
                <Card.Body>
                <Card.Title>Alappuzha</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </Col>
        <Col lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={mn}  style={{height:'120px'}}/>
                <Card.Body>
                <Card.Title>Munnar</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </Col>
        <Col lg={3} className=''>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={svp}  style={{height:'120px'}}/>
                <Card.Body>
                <Card.Title>Slient Valley Park</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </Col>
        </Row>
       </Container>
     
        </>
    )
}

export default Cardskerala;
