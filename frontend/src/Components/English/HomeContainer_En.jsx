import { Row, Container, Col } from "react-bootstrap";
import { Card, Card3, leatestBlog, Plans, ProfileCard } from "./Data/CardDiscrption";
import Header_en from "./Header_en";
import google from "../../Assets/images/google.png"
import slack from "../../Assets/images/slack.png"
import dropbox from "../../Assets/images/dropbox.jpg"
import shopify from "../../Assets/images/shopify.png"
// import profile from "../../Assets/images/smallprofile.png";



// export const PlansConatiner = () => {
//     return (
//         <Container style={{ marginBottom: '130px' }}>
//             <Row>
//                 <Col md={8} className="mx-auto">
//                     <div className="smallheading text-center mb-5">
//                         <p>PRICING PLANS</p>
//                         <h3>Our pricing approach is very simple
//                         </h3>
//                         <p>Choose the right price for you and get started with your flexible plan
//                         </p>
//                     </div>
//                 </Col>
//                 <div className="grid-boxes">
//                     {
//                         Plans.map((items, key) => (

//                             <div className="e-con-boxed" key={key}>
//                                 <div className="e-con-inner">
//                                     <div className="elementor-widget-containerheading">
//                                         <h5>{items.plantype}</h5>

//                                         <h2>{items.price}</h2>
//                                         <p>{items.short}</p>
//                                     </div>
//                                     <div className=" elementor-icon-list">
//                                         <ul>
//                                             {items.list.map((e, key) => (
//                                                 <li key={key}>

//                                                     <span className="material-symbols-outlined" >
//                                                         {
//                                                             e.available
//                                                         }
//                                                     </span>
//                                                     <span  >{e.name}</span>
//                                                 </li>
//                                             ))}

//                                         </ul>

//                                     </div>
//                                     <div className="mb-4">
//                                         <button href="/" className="elementor-button">
//                                                Get Started
//                                         </button>
//                                     </div>


//                                     {/* <div className="mb-4">
//                                         <button href="/" className="elementor-button">
//                                                Get Started
//                                         </button>
//                                     </div> */}
//                                 </div>
//                             </div>
//                         ))
//                     }

//                 </div>
//             </Row>
//         </Container>
//     )
// }
// export const ProfileContainer = () => {
//     return (
//         <>

//             <div className="e-con-inner">

//                 {ProfileCard.map((item, key) => (
//                     <div className=" e-con-boxed" key={key}>
//                         <div className="d-flex">
//                             <div className="img-fluid" >
//                                 <div className="elementor-widget-container">
//                                     <div className="elementor-image-box-wrapper">
//                                         <figure className="elementor-image-box-img">
//                                             <img width={600} height={700} src={item.url} />
//                                         </figure>
//                                         <div className="elementor-widget-containerheading">
//                                             <h5 >{item.name}</h5>
//                                             <p >{item.dis}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 ))}
//             </div>


//         </>
//     )
// }

export const Testimonials = () => {
    return (
        <>
            <Container style={{ marginBottom: '130px' }}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <p>TESTIMONIALS</p>
                            <h3>What Our Client’s Say </h3>
                            <p>Find out what we're like to work with and the results you can expect by reading our reviews and browsing our excellence.
                            </p>
                        </div>
                    </Col>

                    <div className="e-con-inner">
                        <div className="image-box">
                            <div className="elementor-image-box-wrapper">

                                <div className="elementor-widget-containerheading">
                                    <h5>Delivery Manager - Cloud & Infra Services
                                    </h5>
                                    <p >
                                        We would like to commend the superlative efforts of the digital web expert team for their excellent project management, considering the challenges posed by the client and the sites. However, the team followed up with regular updates, highlighting issues in a timely manner and collaborating to provide a customer-centric approach. They are solid pillars and bring great added value to your organization. This project would not have been possible without their contribution.

                                    </p>

                                </div>
                                <div className="text-end">
                                    <span>
                                        Delivery Manager - Cloud & Infra Services

                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="image-box" >
                            <div className="elementor-image-box-wrapper">
                                <div className="elementor-widget-containerheading">
                                    <h5>Delivery Manager - Cloud & Infra Services
                                    </h5>
                                    <p>
                                        Your engineer supported us in our engagement from the start and established an effective working relationship with all stakeholders and end users. He is involved in multiple activities and has done a great job. He is highly regarded for his dedication and attitude.
                                    </p>
                                </div>
                                <div className="text-end">
                                    <span>
                                        Delivery Manager - Cloud & Infra Services

                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </Row>

            </Container>
        </>
    )
}


export const GetInTouch = () => {
    // const [counterState, setCounter] = useState(0)
    // let timer;
    // useEffect(() => {
    //     clearInterval(timer)
    //     timer = setInterval(() => {
    //         if (counterState === 200) {
    //             clearInterval(timer)
    //             return
    //         }
    //         setCounter(prev => prev + 1)
    //         counterState++

    //     }, 10)

    //     return () => clearInterval(timer)
    // }, [counterState])
    return (
        <>
            <Container className="border-top border-bottom p-5" style={{ marginBottom: "100px" }}>

                <div className="e-con-inner justify-content-evenly">
                    <div className="elementor-widget-container">
                        <span >{"80"}</span>
                        <span>+</span>
                        <h5 >Trusted Companies</h5>

                    </div>
                    <div className="elementor-widget-container" style={{width:"20%"}}>
                        <img decoding="async" src={slack} alt="Not found this image" />
                    </div>

                    <div className="elementor-widget-container" style={{width:"20%"}}>
                        <img decoding="async" src={dropbox} alt="Not found this image" />
                    </div>

                    <div className="elementor-widget-container" style={{width:"20%"}}>
                        <img decoding="async"
                            src={shopify} alt="Not found this image"
                        />
                    </div>

                    <div className="elementor-widget-container" style={{width:"20%"}}>
                        <img decoding="async"
                            src={google} alt="Not found this image"
                        />
                    </div>

                </div>
            </Container>

        </>
    )
}

export const LeatestBlog = () => {
    return (
        <>
            <Container style={{ marginBottom: '100px' }}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <h3>Latest from Blog</h3>
                            <p>The more you know, the better your customer experience. So we gathered the most valuable ideas, materials, and tools to benefit your business, all in one place.

                            </p>
                        </div>
                    </Col>

                    <div className="e-con-inner">

                        {leatestBlog.map((item, key) => (

                            <div className="entries" key={key}>
                                <article >
                                    <a href="/">
                                        <img width={768} height={576} src={item.url}
                                            alt={item.title} />
                                    </a>
                                    <div className="entry-meta">

                                        <ul  >
                                            <li >
                                                <a href="/" rel="tag" className="ct-term-2">agency</a>
                                                <a href="/" rel="tag" className="ct-term-3">news</a>
                                            </li>
                                        </ul>
                                        <h2>
                                            <a href="/" rel="bookmark">
                                                {item.title}
                                            </a>
                                        </h2>
                                        <p>
                                            {item.dis}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        ))}

                    </div>

                </Row>
            </Container>
        </>
    )
}



export const HomeContainer_En = () => {
    return (
        <>
            <Header_en />
            <Container fluid style={{ marginBottom: '130px' }}>
                <Col md={12} >

                    <div className="imagesContainer">
                        <div className="col-md-7 mx-auto">
                            <div className="mainText">
                                <p className="mb-5">
                                    Modern business are seizing the opportunities driven by new technologies and reshaping avenues for growth

                                </p>
                                <h2 className="mb-5">
                                Generate new values from new technologies

                                                 </h2>
                            </div>
                        </div>
                        <div className="mainText mb-5">
                            <a href="/" className="elementor-button " role="button">
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">+details</span>
                                </span>
                            </a>
                        </div>
                        <div className="mainText height-full">
                            <div className="text-center">
                                <div className="elementor-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 33"><path d="M12 0C5.37 0 0 5.37 0 12v9c0 6.63 5.37 12 12 12s12-5.37 12-12v-9c0-6.63-5.37-12-12-12Zm0 2c5.557 0 10 4.443 10 10v9c0 5.557-4.443 10-10 10S2 26.557 2 21v-9C2 6.443 6.443 2 12 2Z" /><path d="M12.084 6.5a2.508 2.508 0 0 0-2.5 2.5c0 1.375 1.126 2.5 2.5 2.5 1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5z" /></svg>			</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Container>

            {/* Second container */}
            <div className="bg-image" style={{ marginBottom: '130px' }}>


                <Container>
                    <Col md={11} className="mx-auto">

                        <Row className="align-items-center">

                            {/* <div className="e-con-inner"> */}

                            <Col md={6}>

                                <div className="elementory-element">
                                    <div className="smallheading">
                                        <p>Our Services</p>
                                    </div>
                                    <div className="elementor-widget-container">
                                        <h2 className="mb-4">
                                            Our Digital Web Solutions
                                        </h2>
                                    </div>
                                    <div className="elementor-elementtesx mb-5" >
                                        <p>
                                        At Expert Digital Web, we help you look at your challenges differently, to create innovative solutions that deliver exceptional experiences and drive better performance. Bring ideas to market faster with insight-driven digital strategy, customer-centric design, and best-in-class engineering. Generate business results with scalable, transformative solutions.
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>

                                        <br></br>


                                        </p>
                                        <p className="mb-4">
                                            <strong>Optimal control of your costs: </strong>
                                            <ul>
                                                <li>A clear offer, at a fair price and adapted to your needs.</li>
                                                <li>No superfluous intermediaries to process your requests</li>
                                                <li>You are trained in our tools to gain autonomy.</li>
                                            </ul>
                                        </p>
                                        <p className="mb-4" >
                                            <strong>Free your mind: only your professional activity counts: </strong>
                                            <ul>
                                                <li>
                                                    We take care of the tests, the integration, the deployment, the production of the application architectures that we define together.
                                                </li>
                                                <li>Reactive and available after-sales service/support.</li>
                                                <li>We establish a complete and personalized audit to advise you and optimize your solutions in terms of IT urban planning.</li>
                                            </ul>
                                        </p>
                                        <p className="mb-4">
                                            <strong >Working with experienced IT experts
                                            </strong>
                                            <ul>
                                                <li>
                                                    An experienced IT team that has worked for multinationals like Microsoft.
                                                </li>
                                                <li>
                                                    Satisfied historical customers who trust us.
                                                </li>
                                            </ul>
                                        </p>

                                    </div>
                                    <div>
                                        <a href="/" className="elementor-button " role="button">
                                            <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-text">Explore More</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>

                                <div className="elementor-elementSecond">
                                    {
                                        Card.map((item, key) => (

                                            <div className="elementor-widget-container" key={key}>
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
                                                        <p className="elementor-icon-box-description">{item.dis} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </Col>
                            <Col md={3}>

                                <div className="elementor-elementSecond">
                                    {
                                        Card3.map((item, key) => (

                                            <div className="elementor-widget-container" key={key}>
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
                                                        <p className="elementor-icon-box-description">{item.dis} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Col>


                            {/* </div> */}
                        </Row>
                    </Col>
                </Container>

            </div>




            {/* Forth Conatiner */}
            {/* <PlansConatiner /> */}


            {/* Fifth Conatainer */}
            {/* <Container style={{ marginBottom: '130px' }}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <p> GOOD WORK, GOOD PEOPLE</p>
                            <h3>Our Professional Team</h3>
                            <p>We are a small team of talented professionals with a wide range of skills and experience. We love what we do, and we do it with passion                           </p>
                        </div>
                    </Col>
                    <ProfileContainer />
                </Row>
            </Container> */}

            <Testimonials />
            <GetInTouch />
            <Container style={{ marginBottom: '130px' }}>
                <div className="e-con-full" >
                    <div >
                        <h4 >Have a Project in Mind?</h4>


                        <p>If you'd like to discuss how we can get results for your project, then we'd love to hear from you. </p>
                    </div>

                    <div>
                        <a href="/" className=" elementor-button bg-white " role="button">

                            <span>Get in Touch</span>

                        </a>
                    </div>

                </div>
            </Container>


            <LeatestBlog />
        </>
    )
}