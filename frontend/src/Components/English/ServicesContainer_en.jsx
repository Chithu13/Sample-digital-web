import { Col, Container, Row } from "react-bootstrap"
import {  ServiceCard } from "./Data/CardDiscrption"
import Header_en from "./Header_en"
import { GetInTouch, PlansConatiner } from "./HomeContainer_En"

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
                                <p>Here are a few of the questions we get the most. If you don't see what's on your mind, reach out to us anytime
                                </p>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                           How Does Expert Digital Web Work?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body p-4">
                                        Expert Digital Web provide cloud,web and it solutions with essential solutions for your digital business requirements. When you reach out to us, we assist you in the end-to-end management and delivery of your project by connecting you with the best partner for the successful execution of your project.                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How is Expert Digital Web different from others?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body p-4">
                                        Expert Digital Web is a digital web solutions for IT. We have a pool of knowledge and expertise in all web solutions. Furthermore, while an agency may be able to offer you one directional service, our services are largely divided into IT development and cover a holistic range of services under these categories.We provide excellent service to clients                                     </div>
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

export const ServiceContainer_en = () => {
    return (
        <>
            <Header_en />
            <Container fluid style={{ marginBottom: '130px' }}>
                <div className="e-conn-full">
                    <Container>
                        <div className="listul">

                            <ul className="d-flex">
                                <li>Home  </li>
                                <li>  Services</li>
                            </ul>

                            <h1>
                            Intuition engineered. Business, accelerated
                            </h1>
                        </div>
                    </Container>
                </div>
            </Container>
            <Container style={{ marginBottom: '130px' }}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <p>OUR SERVICES</p>
                            <h3>We create innovative solutions that deliver exceptional experiences.  </h3>
                            <p>
                            Bring ideas to market faster with insight-driven digital strategy, customer-centric design, and best-in-class engineering. Generate business results with scalable, transformative solutions.The services we offer are:
                            </p>
                        </div>
                    </Col>

                </Row>
                <div className="elementor-elementSecond">
                    <Row>
                        {
                            ServiceCard.map((item, key) => (
                                <Col md={6}>

                                    <div className="elementor-widget-container p-4" key={key}>
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <span className="elementor-animation">
                                                    <svg viewBox="0 0 70 70" style={{ enableBackground: 'new 0 0 70 70' }} xmlSpace="preserve">
                                                        <circle cx="38.8" cy="37.7" r="31.2" style={{ fill: '#ffd800' }} />
                                                        <path d={item.url} />
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

            <Container style={{ marginBottom: '130px', marginTop:"50px" }}>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img width={650} height={501} src="http://34.102.124.77/wp-content/uploads/2021/07/services-mission-image@2x.jpg" alt="Not Found this image" />
                    </Col>
                    <Col md={6}>
                        <div className="Containerfeilds ps-md-5 ps-sm-0">
                            <div className="smallheading">
                                <p>Our PROMISE</p>
                                <h3>Turn Ideas into Reality  </h3>
                              
                              
                          <p style={{fontSize:"400", fontWeight:"normal", textTransform:"none"}}>We pledge to challenge conventions, create experiences beyond expectation, and deliver outcomes unimagined, for our clients, their customers and staff. This promise is driven by four key ideas that help us back our words with action, and promote actual positive change for our people and planet</p>
                          
                          <h3>Technology for Good</h3>
                          <p>
                          No people-vs.-robots battle here. We believe the best experiences use technology to empower humans to do what they do best. With this approach, our people are free to follow their passions, focusing on quality, efficiency, and helping others—without wasting time on things that can be automated.

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
            {/* <PlansConatiner /> */}
            <GetInTouch />
            <NewsLetters />

        </>
    )
}