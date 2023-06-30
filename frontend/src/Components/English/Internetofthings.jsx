import { Col, Container, Row } from "react-bootstrap"
import Header_en from "./Header_en"
import { GetInTouch } from "./HomeContainer_En"
import {  NewsLetters } from "./ServicesContainer_en"
import iot from "../../Assets/images/iot.jpg"

export const ApplicationService = [
    {
        url: "M30.7 2.9c-.7 4.8-1.5 9.6-2.2 14.4-.5 3.6-1.1 7.1-1.6 10.7-.6 4-1.2 8.1-1.8 12.1-.2 1.2-1.1 1.9-2.2 1.7-1-.1-1.7-1-1.7-2.3.2-1.6.5-3.5.8-5.4.5-3 .9-6.1 1.4-9.1l2.1-13.8c.5-2.9.9-5.9 1.4-8.8.2-1.2 1.1-1.9 2.2-1.7 1.1.1 1.8 1.1 1.6 2.2zM9.8 26.7c-1.7-1.8-3.4-3.6-5.2-5.5 1.4-1.5 2.8-2.9 4.1-4.4 2.1-2.3 4.3-4.6 6.5-6.8.5-.5.8-1 .6-1.8-.1-.8-.6-1.3-1.4-1.6-.8-.3-1.5.1-2.1.7-3.8 4-7.6 8.1-11.4 12.1-1.2 1.3-1.2 2.2 0 3.4 3.2 3.4 6.5 6.9 9.7 10.3.6.7 1.2 1.3 1.9 2 1 1 2.3.8 3.1-.2.5-.8.4-1.7-.3-2.5-1.9-1.9-3.7-3.8-5.5-5.7zm41.4-6.9-4.8-5.1c-2.3-2.4-4.6-4.9-6.9-7.3-.7-.8-1.6-1-2.4-.6-1.3.6-1.5 2.1-.5 3.2l5.7 6c1.6 1.7 3.2 3.4 4.9 5.2-.6.6-1.1 1.2-1.7 1.8-3 3.1-5.9 6.3-8.9 9.4-.7.7-.9 1.6-.5 2.3.7 1.3 2.2 1.4 3.3.3 3.9-4.1 7.8-8.3 11.7-12.4 1-.9 1-1.9.1-2.8z",
        middle: "IoT Products",
        dis: "Smart connectivity extends the functionality of consumer, medical and industrial devices, creating new revenue streams while streamlining processes and delivering better experiences."
    },
    {
        url: "M47.7 23.5h-10V5.2c0-1.6-.5-2-2-2H29V1.9C29 1 28.4.4 27.6.4c-.9 0-1.4.6-1.4 1.5v1.3h-5.8V1.9c0-.9-.6-1.5-1.5-1.5-.8 0-1.4.7-1.4 1.5v1.3h-5.8V1.9c0-.9-.6-1.6-1.4-1.6-.9 0-1.4.6-1.5 1.5v1.3H1.9C.5 3.1 0 3.6 0 4.9v42.9c0 1.4.5 1.9 1.9 1.9h40.4c4-.1 7.2-3.3 7.2-7.3V25.3c-.1-1.3-.7-1.8-1.8-1.8zm-24.5 5.7h-4.3c-2.4 0-4.4 1.8-4.4 4.2 0 1.6-.2 3.2.2 4.8.8 3.1 3.6 5.4 6.9 5.5h1.6c.4 1 .8 1.9 1.3 2.8H2.9V5.9h5.9v1.3c0 .9.6 1.6 1.4 1.6.9 0 1.5-.6 1.5-1.6V6h5.8v1.3c0 .8.6 1.5 1.4 1.5.8 0 1.5-.6 1.5-1.4V6h5.8v1.4c0 .9.6 1.5 1.4 1.5.8 0 1.4-.6 1.4-1.5V6h5.8v17.4H25c-1.1 0-1.7.6-1.7 1.7-.1 1.4-.1 2.7-.1 4.1zm0 2.9v8.7c-2.6.4-4.7-.7-5.5-2.9-.2-.6-.2-1.2-.3-1.8v-2.5c0-.8.6-1.4 1.3-1.5h4.5zM46.5 27v15.1c0 2.8-1.9 4.6-4.6 4.6H30.7c-2.7 0-4.5-1.8-4.5-4.5V26.4h20.3v.6zM13.1 11.9c-4 0-7.2 3.2-7.2 7.3 0 3.9 3.3 7.2 7.2 7.2 4 0 7.2-3.2 7.2-7.2.1-4.1-3.2-7.3-7.2-7.3zm0 11.5c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.3 2.4 0 4.3 2 4.3 4.3.1 2.5-1.9 4.4-4.3 4.4zm10.1-10.1c0-.8.6-1.4 1.5-1.5h5.6c.9 0 1.5.6 1.5 1.4 0 .8-.6 1.4-1.5 1.4h-5.6c-.8.1-1.4-.5-1.5-1.3zm8.7 5.8c0 .8-.7 1.4-1.6 1.4h-5.5c-1 0-1.6-.6-1.6-1.4 0-.8.7-1.4 1.6-1.4h5.5c1 0 1.6.6 1.6 1.4zm4.4 24.7c3.9 0 7.2-3.3 7.2-7.3s-3.3-7.3-7.2-7.3c-4 0-7.3 3.3-7.3 7.3s3.4 7.3 7.3 7.3zm0-11.7c2.4 0 4.3 1.9 4.3 4.4 0 2.4-2 4.4-4.4 4.4-2.3 0-4.3-2-4.3-4.5.1-2.4 2-4.3 4.4-4.3z",
        middle: "IoT Operations",
        dis: "We develop smart solutions that transform industrial and production supply chains and operations, helping to reduce costs and accelerating time to market."
        
    },
    {
        url: "M344.381,143.771C254.765,56.017,102.37,103.776,79.825,227.7c-31.849,4.598-59.138,25.445-72.018,55.076    c-0.016,0.035-0.032,0.07-0.047,0.107c-26.687,61.602,18.784,130.232,85.51,130.232h282.267    c75.246,0,136.463-61.216,136.463-136.462C512,189.241,430.314,123.682,344.381,143.771z M375.537,381.12H93.271    c-69.246,0-84.534-98.263-18.714-119.456c14.753-4.65,43.01-7.348,74.38,21.892c6.464,6.024,16.586,5.667,22.61-0.794    c6.024-6.464,5.668-16.586-0.794-22.61c-17.93-16.712-38.071-27.33-58.484-31.453c22.034-99.077,147.374-131.851,215.247-56.305    c4.189,4.661,10.714,6.451,16.693,4.57c67.272-21.117,135.795,29.374,135.795,99.69    C480.005,334.256,433.141,381.12,375.537,381.12z",
        middle: "IoT Mobility",
        dis: "Intelligent solutions enable connected, shared and autonomous mobility in transportation and logistics, driving better efficiencies across the business ecosystem."
    },
    {
        url: "M344.381,143.771C254.765,56.017,102.37,103.776,79.825,227.7c-31.849,4.598-59.138,25.445-72.018,55.076    c-0.016,0.035-0.032,0.07-0.047,0.107c-26.687,61.602,18.784,130.232,85.51,130.232h282.267    c75.246,0,136.463-61.216,136.463-136.462C512,189.241,430.314,123.682,344.381,143.771z M375.537,381.12H93.271    c-69.246,0-84.534-98.263-18.714-119.456c14.753-4.65,43.01-7.348,74.38,21.892c6.464,6.024,16.586,5.667,22.61-0.794    c6.024-6.464,5.668-16.586-0.794-22.61c-17.93-16.712-38.071-27.33-58.484-31.453c22.034-99.077,147.374-131.851,215.247-56.305    c4.189,4.661,10.714,6.451,16.693,4.57c67.272-21.117,135.795,29.374,135.795,99.69    C480.005,334.256,433.141,381.12,375.537,381.12z",
        middle: "IoT Spaces",
        dis: "Connected solutions create intelligence across public and private buildings, factories and other related infrastructure, elevating experiences and driving sustainability. "
        
    },
    {
        url: "M47.7 23.5h-10V5.2c0-1.6-.5-2-2-2H29V1.9C29 1 28.4.4 27.6.4c-.9 0-1.4.6-1.4 1.5v1.3h-5.8V1.9c0-.9-.6-1.5-1.5-1.5-.8 0-1.4.7-1.4 1.5v1.3h-5.8V1.9c0-.9-.6-1.6-1.4-1.6-.9 0-1.4.6-1.5 1.5v1.3H1.9C.5 3.1 0 3.6 0 4.9v42.9c0 1.4.5 1.9 1.9 1.9h40.4c4-.1 7.2-3.3 7.2-7.3V25.3c-.1-1.3-.7-1.8-1.8-1.8zm-24.5 5.7h-4.3c-2.4 0-4.4 1.8-4.4 4.2 0 1.6-.2 3.2.2 4.8.8 3.1 3.6 5.4 6.9 5.5h1.6c.4 1 .8 1.9 1.3 2.8H2.9V5.9h5.9v1.3c0 .9.6 1.6 1.4 1.6.9 0 1.5-.6 1.5-1.6V6h5.8v1.3c0 .8.6 1.5 1.4 1.5.8 0 1.5-.6 1.5-1.4V6h5.8v1.4c0 .9.6 1.5 1.4 1.5.8 0 1.4-.6 1.4-1.5V6h5.8v17.4H25c-1.1 0-1.7.6-1.7 1.7-.1 1.4-.1 2.7-.1 4.1zm0 2.9v8.7c-2.6.4-4.7-.7-5.5-2.9-.2-.6-.2-1.2-.3-1.8v-2.5c0-.8.6-1.4 1.3-1.5h4.5zM46.5 27v15.1c0 2.8-1.9 4.6-4.6 4.6H30.7c-2.7 0-4.5-1.8-4.5-4.5V26.4h20.3v.6zM13.1 11.9c-4 0-7.2 3.2-7.2 7.3 0 3.9 3.3 7.2 7.2 7.2 4 0 7.2-3.2 7.2-7.2.1-4.1-3.2-7.3-7.2-7.3zm0 11.5c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.3 2.4 0 4.3 2 4.3 4.3.1 2.5-1.9 4.4-4.3 4.4zm10.1-10.1c0-.8.6-1.4 1.5-1.5h5.6c.9 0 1.5.6 1.5 1.4 0 .8-.6 1.4-1.5 1.4h-5.6c-.8.1-1.4-.5-1.5-1.3zm8.7 5.8c0 .8-.7 1.4-1.6 1.4h-5.5c-1 0-1.6-.6-1.6-1.4 0-.8.7-1.4 1.6-1.4h5.5c1 0 1.6.6 1.6 1.4zm4.4 24.7c3.9 0 7.2-3.3 7.2-7.3s-3.3-7.3-7.2-7.3c-4 0-7.3 3.3-7.3 7.3s3.4 7.3 7.3 7.3zm0-11.7c2.4 0 4.3 1.9 4.3 4.4 0 2.4-2 4.4-4.4 4.4-2.3 0-4.3-2-4.3-4.5.1-2.4 2-4.3 4.4-4.3z",
        middle: "Expert Digital Web Sustainability Services ",
        
        dis: "Expert Digital Web is committed to helping companies get to net-zero and meet sustainability goals. Our solutions enable you to take action on core business-related changes involving products, supply chain, operations and real estate functions."
    },
   
]

export const Internetofthings = () => {
    return (
        <>
        <Header_en/>
        <Container fluid style={{ marginBottom: '130px' }}>
                <div className="e-conn-full" style={{backgroundImage:`url(${iot})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                    <Container>
                        <div className="listul">

                            <ul className="d-flex">
                                <li>Home  </li>
                                <li>  Services</li>
                            </ul>

                            <h1>
                            Simplifying IoT at scale                            </h1>
                        </div>
                    </Container>
                </div>
            </Container>

            <Container style={{ marginBottom: '130px'}}>
                <Row className="align-items-center">
                    <Col md={12}>
                       <h2 style={{fontWeight:"bold", fontSize:"3em"}}>Fusing physical and digital

</h2><br></br>

<div style={{fontSize:"1.4em"}}>
    <p>IoT technologies fuse the physical and digital worlds, connecting enterprises, extracting intelligence and propelling autonomy. Then you can focus on driving revenue and improving sustainability and market leadership.</p>
  <p>The convergence of digital and physical is creating new market opportunities. But it’s also presenting new business challenges. At Expert Digital Web, we help businesses modernize quickly to anticipate customer and market demands and act instantaneously. </p><br></br>
<p>By connecting spaces, products, industrial manufacturing and modern mobility, our engineers provide IoT platforms to help you re-invent your operations, build innovative experiences and create your next-generation products. The results: sustainable revenue growth, optimized margins and improved valuations.</p><br></br>
</div>

                    </Col>
                </Row>
            </Container>
            <Container style={{ marginBottom: '130px' }}>
                <Row>
                    <Col md={7} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <p>OUR OFFERINGS</p>
                            <p>
                            We use a human-centric approach to solve your biggest challenges and improve everyday life. Across information and operational technology, we combine software, hardware and edge IoT technologies with engineering and security capabilities to help your business take advantage of the almost unlimited synergies between the physical and digital worlds.                            </p>
                        </div>
                    </Col>

                </Row>
                <div className="elementor-elementSecond">
                    <Row>
                        {
                            ApplicationService.map((item, key) => (
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
                                            <button>Learn More</button>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </div>

            </Container>

           
            <GetInTouch />
            <NewsLetters/>
        </>
    )
}

