import { Row, Container, Col } from "react-bootstrap";
import { Card, Card3, leatestBlog, Plans, ProfileCard } from "./Data/CardDiscrption";
import Header_fr from "./Header_fr";
// import profile from "../../Assets/images/smallprofile.png";



export const PlansConatiner = () => {
    return (
        <Container style={{ marginBottom: '130px' }}>
            <Row>
                <Col md={8} className="mx-auto">
                    <div className="smallheading text-center mb-5">
                        <p>PRICING PLANS</p>
                        <h3>Nos approche tarifaires est très simple</h3>
                        <p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
                        </p>
                    </div>
                </Col>
                <div className="grid-boxes">
                    {
                        Plans.map((items, key) => (

                            <div className="e-con-boxed" key={key}>
                                <div className="e-con-inner">
                                    <div className="elementor-widget-containerheading">
                                        <h5>{items.plantype}</h5>

                                        <h2>{items.price}</h2>
                                        <p>{items.short}</p>
                                    </div>
                                    <div className=" elementor-icon-list">
                                        <ul>
                                            {items.list.map((e, key) => (
                                                <li key={key}>

                                                    <span className="material-symbols-outlined" >
                                                        {
                                                            e.available
                                                        }
                                                    </span>
                                                    <span  >{e.name}</span>
                                                </li>
                                            ))}

                                        </ul>

                                    </div>
                                    <div className="mb-4">
                                        <button href="/" className="elementor-button">
                                               Get Started
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
    )
}
export const ProfileContainer = () => {
    return (
        <>

            <div className="e-con-inner">

                {ProfileCard.map((item, key) => (
                    <div className=" e-con-boxed" key={key}>
                        <div className="d-flex">
                            <div className="img-fluid" >
                                <div className="elementor-widget-container">
                                    <div className="elementor-image-box-wrapper">
                                        <figure className="elementor-image-box-img">
                                            <img width={600} height={700} src={item.url} />
                                        </figure>
                                        <div className="elementor-widget-containerheading">
                                            <h5 >{item.name}</h5>
                                            <p >{item.dis}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}

export const Testimonials = () => {
    return (
        <>
            <Container style={{ marginBottom: '130px' }}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <p>TESTIMONIALS</p>
                            <h3>What Our Client’s Say </h3>
                            <p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
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
                                        Nous aimerions recommander les efforts superlatifs de l'équipe d’expert digital web pour leur excellente gestion de projet, compte tenu des défis posés par le client et les sites. Cependant, l'équipe a assuré le suivi avec des mises à jour régulières, soulignant les problèmes en temps opportun et collaborant pour fournir une approche centrée sur le client. Ils sont des piliers solides et apportent une grande valeur ajoutée à votre organisation. Ce projet n'aurait pas été mené à bien sans leur contribution.
                                    </p>

                                </div>
                                <div className="text-end">
                                    <span>
                                        Société de conseil en technologie de premier plan

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
                                        Votre ingénieur nous a soutenu dans notre engagement dès le début et a établi une relation de travail efficace avec toutes les parties prenantes et les utilisateurs finaux. Il est impliqué dans de multiples activités et a fait un excellent travail. Il est très apprécié pour son dévouement et son attitude.
                                    </p>
                                </div>
                                <div className="text-end">
                                    <span>
                                        Société de conseil en technologie de premier plan

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
                    <div className="elementor-widget-container">
                        <img decoding="async" src="http://34.102.124.77/wp-content/uploads/2021/07/slack-logo.svg" alt="Not found this image" />
                    </div>

                    <div className="elementor-widget-container">
                        <img decoding="async" src="http://34.102.124.77/wp-content/uploads/2021/07/dropbox-logo.svg" alt="Not found this image" />
                    </div>

                    <div className="elementor-widget-container">
                        <img decoding="async"
                            src="http://34.102.124.77/wp-content/uploads/2021/07/shopify-logo.svg" alt="Not found this image"
                        />
                    </div>

                    <div className="elementor-widget-container">
                        <img decoding="async"
                            src="http://34.102.124.77/wp-content/uploads/2021/07/google-logo.svg" alt="Not found this image"
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
                            <p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
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



export const HomeContainer = () => {
    return (
        <>
            <Header_fr />

            <Container fluid style={{ marginBottom: '130px' }}>
                <Col md={12}>

                    <div className="imagesContainer">
                        <div className="col-md-7 mx-auto">

                            <div className="mainText">
                                <p className="mb-5">
                                    Nous accompagnons nos clients pour répondre de manière adaptée à leurs besoins quant à la gestion de vos solutions applicatives informatique.

                                </p>
                                <h2 className="mb-5">
                                    Professional  IT Solution
                                </h2>
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
                                            Nos Solutions Web Digital
                                        </h2>
                                    </div>
                                    <div className="elementor-elementtesx mb-5" >
                                        <p>Expert Digital Web spécialiste en solution informatique Cloud, Web et Applicatifs pour les entreprises.
                                            Nous accompagnons nos clients pour répondre de manière adaptée à leurs besoins quant à la gestion de vos solutions applicatives informatique.
                                            Découvrez l’ensemble de nos services et contactez-nous pour recevoir une expertise personnalisée.
                                            Des solutions IT adaptées à vos besoins
                                            Quel que soit votre secteur d’activité : finance, marketing, distribution …..

                                            Nous répondons aux évolutions de vos besoins et de vos clients avec nos solutions applicatives scalable en adéquations de vos exigences en sécurité web.
                                        </p>
                                        <p className="mb-4">
                                            <strong>Maîtriser vos coûts de manière optimale: </strong>
                                            <ul>
                                                <li>Une offre claire, à un prix juste et adaptée à vos besoins.
                                                </li>
                                                <li>Pas d’intermédiaires superflus pour traiter vos demandes.</li>
                                                <li>Vous êtes formé à nos outils pour gagner en autonomie.
                                                </li>
                                            </ul>
                                        </p>
                                        <p className="mb-4" >
                                            <strong>Vous libérer l'esprit : seule votre activité professionnelle compte </strong>
                                            <ul>
                                                <li>
                                                    Nous nous occupons des tests, de l’intégration,  du déploiement,  de la production des architectures applicatives que nous définissons emsemble.
                                                </li>
                                                <li>Un SAV/support réactif et disponible.</li>
                                                <li>Nous établissons un audit complet et personnalisé pour vous conseiller et optimiser vos solutions en termes d'urbanisme informatique.</li>

                                            </ul>
                                        </p>
                                        <p className="mb-4">
                                            <strong >Travailler des expert IT expérimenté
                                            </strong>
                                            <ul>
                                                <li>
                                                    Une équipe expérimentée dans l’IT qui a travaillé pour des multinationales comme Microsoft.
                                                </li>
                                                <li>
                                                    Des clients historiques satisfaits qui nous font confiance.
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
            <PlansConatiner />


            {/* Fifth Conatainer */}
            <Container style={{ marginBottom: '130px' }}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <div className="smallheading text-center mb-5">
                            <p> GOOD WORK, GOOD PEOPLE</p>
                            <h3>Our Professional Team</h3>
                            <p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.                            </p>
                        </div>
                    </Col>
                    <ProfileContainer />
                </Row>
            </Container>

            <Testimonials />
            <GetInTouch />
            <Container style={{ marginBottom: '130px' }}>
                <div className="e-con-full" >
                    <div >
                        <h4 >Have a Project in Mind?</h4>


                        <p>Nullam eget felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi sagittis.</p>
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