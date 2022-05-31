import React from "react"
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



 /* Components for Input and Output parts separated by applying Bootstrap*/
export default function Nextnumber() {
    return (
        <div className="frame">
            <Container>
                <Row>
                    <Col sm="6" className="title"><span id="">INPUT</span></Col>
                    <Col sm="6" className="title">
                        <span id="">OUTPUT</span>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm="6" ><span id="numberentered">Please enter the field required above</span></Col>
                    <Col sm="6">
                        <span id="numberandfrequency">The system has not started</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}