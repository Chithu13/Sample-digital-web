
import { Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";


const Header_fr = () => {
  const [language, setLanguage] = useState("FR");
  const onSelect = (code) => setLanguage(code);
  if (language === "US") {
    window.location.assign("/");
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3   header">
        <div className="container">
          <Link className="header-title" to="/fr/home">

            Expert Web numérique

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="header-subtitle" aria-current="page" to="/fr/home">

                  Maison

                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/fr/services">

                  Prestations de service

                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/fr/about">
                  À propos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-subtitle" to="/fr/blogs">
                  Blogues              </Link>
              </li>
            </ul>
            <div className="d-flex gap-3 align-items-center">
              <Link to="/fr/contact" className=" elementor-button " role="button">

                <span className="text-capitalize">
                  entrer en contact
                </span>

              </Link>
              <ReactFlagsSelect
                selected={language}
                onSelect={onSelect}
                countries={["US", "FR"]}
                customLabels={{ US: "English", FR: "Franse" }}
                placeholder="Select Language"
              />
            </div>
          </div>
        </div>
      </nav>
      <Toolbar />
      < div style={{ marginTop: '2rem' }}></div>
    </>
  )
}

export default Header_fr