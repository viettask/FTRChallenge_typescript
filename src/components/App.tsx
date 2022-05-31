import Secondtimer from './Secondtimer';
import Nextnumber from './Nextnumber';
import Menu from './Menu';
import Output from './Output';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

   /* App is the place for all components intergrated
 1. Components of entering time (in seconds)
 2. Components of entering all numbers 
 3. Components of 4 functional buttons
 4. Components of Input and Output parts required to show off on the screen*/
  return (
    <div className="content">
      <Container>
        <Row>
          <Col sm="2" className='navBar'>
            <Secondtimer />
            <hr/>
            <Nextnumber />
            <hr/>
            <Menu />
          </Col>
          <Col sm="10">
            <Output />
          </Col>
        </Row>
      </Container>
    </div>
  );
}


