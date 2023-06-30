import { Col, Container, Row } from "react-bootstrap"
import Header_en from "./Header_en"
import { LeatestBlog } from "./HomeContainer_En"
import { NewsLetters } from "./ServicesContainer_en"
import cosnumer from "../../Assets/images/consumergoods.jpg"

export const Automotives = [
    {

        plantype: "Apparel & footwear",
       
        short:'Take advantage of solutions to improve sourcing, elevate label management, optimize pricing and boost business effectiveness'        
    },
    {
        plantype: "Consumer durables",
      
        short: 'Use digital technologies and strategies to drive innovation, revitalize product lines, and improve efficiencies and ROI.',
       
    },
    {
        plantype: "Consumer electronics"

        ,
    short:'Implement digital solutions to bring innovative products to market faster, more efficiently and at lower cost.'
       
    },
    {
        plantype: "Food & beverage",
        short:'Take advantage of fresh thinking to solve tough customer, supply chain and technology challenges.'
       
        
    }
    
]

export const Automotivestype = [
    {

        plantype: "Home & personal care",
       
 short: 'Leverage the latest cloud and software as a service (SaaS) solutions to capitalize on emerging new markets and changing customer expectations. '      
    },
    
]


export const Consumergoods = () => {
    return (
        <>
        <Header_en/>
            <Container fluid style={{ marginBottom: '130px' }}>
                <div className="e-conn-full" style={{backgroundImage:`url(${cosnumer})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                    <Container>
                        <div className="listul">

                            <ul className="d-flex">
                                <li>Home  </li>
                                <li>  about us</li>
                            </ul>
                            <h3>A NEW CONSUMER AGENDA</h3>
                            <div className="d-md-flex justify-content-between align-items-end">

                                

                                <h1>Transforming consumer goods for the digital age</h1>

                                

                            </div>
                        </div>
                      
                  
                        
                    </Container>

                    

                </div>
            </Container>

            

            <Container style={{ marginBottom: '150px', marginTop:"5%" }}>
                <Row>

                    

                            <Col md={12}>
                                <div className="elementor-widget-containerheading" style={{fontSize:"3em"}}>
<p>There is no question that digital technologies are reshaping the consumer goods industry. It’s an ever-changing marketplace, where digital-first players are seizing competitive advantage and tradition-bound brands lag behind. We help you build your digital culture with strategies that keep you in the technological forefront and connected to your customers.</p>                                </div>
                            </Col>
                        
                
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
            <Row>
                <Col md={8} className="mx-auto">
                    <div className="smallheading text-center mb-5">
                        <p>DEPTH OF EXPERTISE</p>
                        <h3>The consumer goods segments we serve
                        </h3>
                        
                    
                    </div>
                </Col>
                <div className="grid-boxes">
                    {
                        Automotives.map((items, key) => (

                            <div className="e-con-boxed" key={key}>
                                <div className="e-con-inner">
                                    <div className="elementor-widget-containerheading">
                                        <h5>{items.plantype}</h5>

                                        <p>{items.short}</p>
                                    </div>
                                    

                                    
                                    <div className="mb-4 mt-5">
                                        <button href="/" className="elementor-button">
                                               Learn More
                                        </button>
                                    </div>


                                    {/* <div className="mb-4">
                                        <button href="/" className="elementor-button">
                                               Get Started
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </Row>
        </Container>

        <Container style={{ marginBottom: '130px' }}>
            <Row>
                
                <div className="grid-boxes">
                    {
                        Automotivestype.map((items, key) => (

                            <div className="e-con-boxed" key={key}>
                                <div className="e-con-inner">
                                    <div className="elementor-widget-containerheading">
                                        <h5>{items.plantype}</h5>

                                        <p>{items.short}</p>
                                    </div>
                                    
                                    
                                    <div className="mb-4 mt-5">
                                        <button href="/" className="elementor-button">
                                               Learn More
                                        </button>
                                    </div>


                                    {/* <div className="mb-4">
                                        <button href="/" className="elementor-button">
                                               Get Started
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </Row>
        </Container>
            <NewsLetters />
        <LeatestBlog/>
        </>
    )
}