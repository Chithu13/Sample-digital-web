import { Col, Container, Row } from "react-bootstrap"
import Header_en from "./Header_en"
import { GetInTouch } from "./HomeContainer_En"
import {  NewsLetters } from "./ServicesContainer_en"
import software from "../../Assets/images/software.jpg"


export const Softwareproduct = () => {
    return (
        <>
        <Header_en/>
        <Container fluid style={{ marginBottom: '130px' }}>
                <div className="e-conn-full" style={{backgroundImage:`url(${software})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                    <Container>
                        <div className="listul">

                            <ul className="d-flex">
                                <li>Home  </li>
                                <li>  Services</li>
                            </ul>

                            <h1>
                            Engineering software that delivers outcomes
                            </h1>
                        </div>
                    </Container>
                </div>
            </Container>

            <Container style={{ marginBottom: '130px'}}>
                <Row className="align-items-center">
                    <Col md={12}>
                       <h2 style={{fontWeight:"bold", fontSize:"3em"}}>Jump the s-curve

</h2><br></br>

<div style={{fontSize:"1.4em"}}>
<p>Software engineering is at the frontier of digital business. When business outcomes become the common language of design and engineering teams, organizations get ahead and stay ahead.</p><br></br>
<p>Software engineering is more than software development. It goes beyond features and backlogs and emphasizes a broader look at exceptional user experiences and outcomes.

</p><br></br>
<p>At Expert Digital Web, we bring together top digital engineering, design and product development talent to build software that powers and engineers modern business.
</p>
</div>

                    </Col>
                </Row>
            </Container>
          

           
            <GetInTouch />
            <NewsLetters/>
        </>
    )
}

