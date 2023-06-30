import { Col, Container, Row } from "react-bootstrap"
import { ServiceCard } from "./Data/CardDiscrption"
import Header_fr from "./Header_fr"
import { GetInTouch, PlansConatiner } from "./HomeContainer_fr"

export const FaqSection = () => {
    return (
        <>


            <Container style={{ marginBottom: '130px' }}>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="Containerfeilds pe-md-5 pe-sm-0">
                            <div className="smallheading">
                                <p> FAQ</p>
                                <h3>Frequently Asked Questions </h3>
                                <p>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.
                                </p>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Pellentesque tincidunt tristique neque?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body p-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Suspendisse sed ultricies nisl, pharetra rutrum mauris?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body p-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img width={650} height={501} src="http://34.102.124.77/wp-content/uploads/2021/07/services-mission-image@2x.jpg" alt="This image is not found" />
                    </Col>
                </Row></Container>
        </>
    )
}

export const NewsLetters = () => {
    return (
        <Container style={{ marginBottom: '130px' }}>

            <div className="e-con-fullwhite" >
                <div className="col-md-7 mx-auto">
                    <div >
                        <h4 >Newsletter Updates</h4>


                        <p>Enter your email address below to subscribe to our tasty newsletter</p>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <input type="text" className="news" placeholder="Your email address" />
                        <a href="/" className=" elementor-button " role="button">

                            <span> Subscribe</span>

                        </a>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export const ServiceContainer = () => {
    return (
        <>
            <Header_fr />
            <Container fluid style={{ marginBottom: '130px' }}>
                <div className="e-conn-full">
                    <Container>
                        <div className="listul">

                            <ul className="d-flex">
                                <li>Home  </li>
                                <li>  Services</li>
                            </ul>

                            <h1>
                                Nos Solutions Web Digital</h1>
                        </div>
                    </Container>
                </div>
            </Container>
            <Container style={{ marginBottom: '130px' }}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <p>OUR SERVICES</p>
                            <h3>We create Best Digital Products  </h3>
                            <p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
                            </p>
                        </div>
                    </Col>

                </Row>
                <div className="elementor-elementSecond">
                    <Row>
                        {
                            ServiceCard.map((item, key) => (
                                <Col md={6}>

                                    <div className="elementor-widget-container p-5" key={key}>
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <span className="elementor-animation">
                                                   
                                                    <svg viewBox="0 0 70 70" style={{ enableBackground: 'new 0 0 70 70' }} xmlSpace="preserve">
                                                        <circle cx="38.8" cy="37.7" r="31.2" style={{ fill: '#ffd800' }} />
                                                        <g>

                                                            <path d={item.url} />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h5 className="elementor-icon-box-title">
                                                    <span>{item.middle}</span>
                                                </h5>
                                                <p className="elementor-icon-box-description">
                                                    {item.dis}
                                                     </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </div>

            </Container>

            <Container style={{ marginBottom: '130px' }}>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img width={650} height={501} src="http://34.102.124.77/wp-content/uploads/2021/07/services-mission-image@2x.jpg" alt="Not Found this image" />
                    </Col>
                    <Col md={6}>
                        <div className="Containerfeilds ps-md-5 ps-sm-0">
                            <div className="smallheading">
                                <p>OUR MISSION</p>
                                <h3>Turn Ideas into Reality  </h3>
                                <p>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.
                                </p>
                            </div>

                            <div className="e-con-inner justify-content-between">
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
                        </div>
                    </Col>
                </Row>
            </Container>

            <FaqSection />
            <PlansConatiner />
            <GetInTouch />
            <NewsLetters />

        </>
    )
}