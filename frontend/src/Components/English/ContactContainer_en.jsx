import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Header_en from "./Header_en"

export const Contact_us = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [message, setMessage] = useState("")
    const [data, setData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: mobile,
                message: message,
            }),
        })
            .then((res) => res.json())
            .then(() => {
                setData('');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <Container style={{ marginBottom: '100px' }}>
            {/* <Col md={10} className="mx-auto"> */}

                <Row className="align-items-center p-5 border">
                    <Col md={5}>
                        <div className="e-con-inner flex-column justify-content-between">
                            <div className="elementor-widget-container">
                                <span >
                                    80% </span>
                                <h5 className="fw-bold"> SEO</h5>

                            </div>
                            <div className="elementor-widget-container">
                                <span >
                                    90% </span>
                                <h5 className="fw-bold"> Design</h5>

                            </div>
                            <div className="elementor-widget-container">
                                <span >
                                    87% </span>
                                <h5 className="fw-bold"> Development</h5>

                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="Containerfeilds">
                            <div className="smallheading">
                                <p>contact us</p>
                                <h3>Get in Touch with us  </h3>

                            </div>

                            <div className="contactContainer">
                                <Form onSubmit={handleSubmit}>
                                    <fieldset>
                                        <Form.Group className="mb-3">
                                            <Form.Control placeholder="Enter Your  Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control placeholder="Enter Your  Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control placeholder="Enter Your  Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
                                        </Form.Group>

                                        <Button type="submit" className="fw-bold border-0" style={{ background: '#ffd800', color: 'black' }}>Submit My Data</Button>
                                    </fieldset>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            {/* </Col> */}
        </Container>
    )
}

export const ContactContainer_en = () => {
    return (
        <>
        <Header_en/>
            <Container fluid style={{ marginBottom: '100px' }}>
                <div className="e-conn-full">
                    <Container>
                        <div className="listul">

                            <ul className="d-flex">
                                <li>Home  </li>
                                <li>  Contact us</li>
                            </ul>
                            <div className="d-md-flex justify-content-between align-items-end">

                                <h3>For general inquiries, please use the form below and we’ll get back to you soon
                                </h3>



                            </div>
                        </div>
                    </Container>

                </div>
            </Container>
            <Contact_us />

        </>
    )
}