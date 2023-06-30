import { Col, Container, Row } from "react-bootstrap"
import { about } from "./Data/CardDiscrption"
import Header_en from "./Header_en"
import { LeatestBlog } from "./HomeContainer_En"
import { NewsLetters } from "./ServicesContainer_en"
import mission from "../../Assets/images/mission.jpg"
import aboutimg from "../../Assets/images/about.jpg"

export const AboutContainer_en = () => {
    return (
        <>
        <Header_en/>
            <Container fluid style={{ marginBottom: '130px' }}>
                <div className="e-conn-full" style={{backgroundImage:`url(${aboutimg})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}
>
                    <Container>
                        <div className="listul">

                            <ul className="d-flex">
                                <li>Home  </li>
                                <li>  about us</li>
                            </ul>
                            <div className="d-md-flex justify-content-between align-items-end">

                                <h1>Engineering modern business to improve everyday lives</h1>

                                <a href="/" className=" elementor-button bg-white d-flex gap-2 align-items-center" role="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" /></svg>

                                    <span>
                                        We are hiring</span>

                                </a>

                            </div>
                        </div>
                      
                  
                        
                    </Container>

                    

                </div>
            </Container>

            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10%", marginLeft:"5%"}}>

<p>We partner with the world’s most valuable brands to build digital solutions that transform businesses. As a digital native, we bring a 27-year track record of accelerating business impact through complete and scalable digital solutions. With a global presence of 6,900+ professionals in strategy, research, data science, design and engineering, we unlock top-line growth, improve customer experience and drive operational efficiency.</p>

                        </div> 

            <Container style={{ marginBottom: '150px', marginTop:"5%" }}>
                <Row>

                    {
                        about.map((items, key) => (

                            <Col md={4} key={key}>
                                <div className="elementor-widget-containerheading">
                                    <h4 className="fs-4 fw-bold mb-3">{items.title}</h4>
                                    <p>{items.dis}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

            <Container style={{ marginBottom: '130px' }}>
                <div className="e-con-full" >
                    <div >
                        <h3 className="fs-1 mb-3 fw-bold">Join our Awesome Team</h3>
                        <p className="mb-4">We’re always looking for strong candidates to join our growing team in Mountain View and around the world and We’re looking for strong, passionate candidates to join our team</p>
                        <button className=" elementor-button bg-white w-auto">

                            <span> Send us your CV</span>

                        </button>
                      
                    </div>

                    <div className="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="224px" viewBox="0 0 24 24" width="224px" fill="#fff"><rect fill="none" height={24} width={24} /><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" /></g></svg>
                    </div>

                </div>
            </Container>

            <Container style={{ marginBottom: '130px' }}>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img width={650} height={501} src= {mission}alt="Image not found" />
                    </Col>
                    <Col md={6}>
                        <div className="Containerfeilds ps-md-5 ps-sm-0">
                            <div className="smallheading mb-4">
                               
                            <p>Our PROMISE</p>
                                <h3>Turn Ideas into Reality  </h3>
                              
                              
                          <p style={{fontSize:"400", fontWeight:"normal", textTransform:"none"}}>We pledge to challenge conventions, create experiences beyond expectation, and deliver outcomes unimagined, for our clients, their customers and staff. This promise is driven by four key ideas that help us back our words with action, and promote actual positive change for our people and planet</p>
                          
                          <h3>Technology for Good</h3>
                          <p>
                          No people-vs.-robots battle here. We believe the best experiences use technology to empower humans to do what they do best. With this approach, our people are free to follow their passions, focusing on quality, efficiency, and helping others—without wasting time on things that can be automated.

                          </p>
                                
                            </div>
                            <a href="/" className=" elementor-button " role="button">

                                <span>  More Details</span>

                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <LeatestBlog />
            <NewsLetters />
        </>
    )
}