
import { Toolbar } from "@mui/material";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import './header.css'


const Header_en = () => {
  const [language, setLanguage] = useState("US");
  const onSelect = (code) => setLanguage(code);
  if (language === "FR") {
    window.location.assign("/fr/home");
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 header">
        <div className="container">
          <Link className="header-title" to="/">
            Sample Digital Web
          </Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item dropdown">
          
          <Link className="nav-link dropdown-toggle" to="/en/industries" id="navbarDropdown" role="button" data-bs-toggle="dropdown" ria-expanded="false" style={{color:"black"}}>
              Industries
            </Link>
      
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <ul>
          <li> <Link className="dropdown-item" to="/en/automotive">
              Automotive
            </Link></li>
          <li> <Link className="dropdown-item" to="/en/banking">
              Banking
            </Link></li>
          <li> <Link className="dropdown-item" to="/en/capitalmarkets">
              Capital Markets
            </Link></li>
          <li> <Link className="dropdown-item" to="/en/communications">
          Communications, Media & Technology
            </Link></li>
          <li><Link className="dropdown-item" to="/en/consumergoods">
              Consumer Goods
            </Link></li>
            <li><Link className="dropdown-item" to="/en/education">
              Education
            </Link></li>
        </ul>
        <ul>
          <li><Link className="dropdown-item" to="/en/healthcare">
              Healthcare
            </Link></li>
          <li><Link className="dropdown-item" to="/en/informationservices">
              Information Services
            </Link></li>
          <li><Link className="dropdown-item" to="/en/insurance">
              Insurance
            </Link></li>
          <li><Link className="dropdown-item" to="/en/lifesciences">
              Life Sciences
            </Link></li>
            <li><Link className="dropdown-item" to="/en/manufacturing">
              Manufacturing
            </Link></li> 
        </ul>
        <ul>
          <li><Link className="dropdown-item" to="/en/oilandgas">
              Oil & Gas
            </Link></li>
          <li><Link className="dropdown-item" to="/en/retail">
              Retail
            </Link></li>
          <li><Link className="dropdown-item" to="/en/transportation">
          Transportation & Logistics
            </Link></li>
          <li><Link className="dropdown-item" to="/en/travel">
          Travel & Hospitality           
           </Link></li>
           <li><Link className="dropdown-item" to="/en/utilities">
           Utilities           
           </Link></li>
          
        </ul>
      </div>
    </li>

    <li class="nav-item dropdown">
          
          <Link className="nav-link dropdown-toggle" to="/en/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" ria-expanded="false" style={{color:"black"}}>
              Services
            </Link>
      
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <ul>
          <li> <Link className="dropdown-item" to="/en/applicationservices">
              Application Services & Modernization
            </Link></li>
          <li> <Link className="dropdown-item" to="/en/artificalintelligence">
              Artificial Intelligence
            </Link></li>
          <li> <Link className="dropdown-item" to="/en/businessprocess">
             Business Process Services
            </Link></li>
          <li> <Link className="dropdown-item" to="/en/cloudsolutions">
              Cloud Solutions
            </Link></li>
          <li><Link className="dropdown-item" to="/en/coremodernization">
              Core Modernization
            </Link></li>
        </ul>
        <ul>
          <li><Link className="dropdown-item" to="/en/digitalexperience">
              Digital Experience
            </Link></li>
          <li><Link className="dropdown-item" to="/en/digitalstrategy">
              Digital Strategy
            </Link></li>
          <li><Link className="dropdown-item" to="/en/enterpriseapplication">
              Enterprise Application Services
            </Link></li>
          <li><Link className="dropdown-item" to="/en/infrastructure">
              Infrastructure Services
            </Link></li>
            <li><Link className="dropdown-item" to="/en/intelligentprocess">
              Intelligent Process Automation
            </Link></li> 
        </ul>
        <ul>
          <li><Link className="dropdown-item" to="/en/internetofthings">
              Internet of Things
            </Link></li>
          <li><Link className="dropdown-item" to="/en/qualityengineering">
              Quality Enginnering & Assurance
            </Link></li>
          <li><Link className="dropdown-item" to="/en/security">
              Security
            </Link></li>
          <li><Link className="dropdown-item" to="/en/softwareproduct">
            Software Product Engineering
            </Link></li>
          
        </ul>
      </div>
    </li>

    
              {/* <li className="nav-item">
                <Link className="header-subtitle" aria-current="page" to="/" >
                  Industries
                </Link>
              </li> */}
              
              <li className="nav-item" style={{marginTop:"3%"}}>
                <Link className="header-subtitle" to="/en/about">
                  About
                </Link>
              </li>
              <li className="nav-item" style={{marginTop:"3%"}}>
                <Link className="header-subtitle" to="/en/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-3 align-items-center">
              <Link to="/en/contact" className=" elementor-button " role="button">

                <span>
                  Get in Touch
                </span>

              </Link>
              {/* <ReactFlagsSelect
                selected={language}
                onSelect={onSelect}
                countries={["US", "FR"]}
                customLabels={{ US: "English", FR: "Franse" }}
                placeholder="Select Language"
              /> */}
            </div>
          </div>
        </div>
      </nav>
      <Toolbar />
      < div style={{ marginTop: '2rem' }}></div>
    </>
  )
}

export default Header_en