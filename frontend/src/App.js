import "./Assets/css/FontStyle.css"
import "./Assets/css/Style.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import React from "react";
import FooterComponent from "./Components/Footer"
import { HomeContainer } from "./Components/France/HomeContainer_fr";
import { ServiceContainer } from "./Components/France/ServicesContainer_fr";
import { AboutContainer } from "./Components/France/AboutConatiner_fr";
import { BlogConatainer } from "./Components/France/BlogContainer_fr";
import { ContactContainer } from "./Components/France/ContactContainer_fr"
import { HomeContainer_En } from "./Components/English/HomeContainer_En";
import { ServiceContainer_en } from "./Components/English/ServicesContainer_en";
import { AboutContainer_en } from "./Components/English/AboutConatiner_en";
import { BlogConatainer_en } from "./Components/English/BlogContainer_en";
import { ContactContainer_en } from "./Components/English/ContactContainer_en";
import { Automotive} from "./Components/English/Automotive";
import { Banking } from "./Components/English/Banking";
import { Capitalmarkets, Capitalmrkets } from "./Components/English/Capitalmarkets";
import { Communication } from "./Components/English/Communication";
import { Consumergoods } from "./Components/English/Consumergoods";
import { Education } from "./Components/English/Education";
import { Healthcare } from "./Components/English/Healthcare";
import { Informationservices } from "./Components/English/Informationservices";
import { Insurance } from "./Components/English/Insurance";
import { Lifescience } from "./Components/English/Lifescience";
import { Manufacturing } from "./Components/English/Manufacturing";
import { Oilandgas } from "./Components/English/Oilandgas";
import { Retail } from "./Components/English/Retail";
import { Transportation } from "./Components/English/Transportation";
import { Travel } from "./Components/English/Travel";
import { Utilities } from "./Components/English/Utilities";
import { ApplicationServices } from "./Components/English/ApplicationServices";
import { Businessprocess } from "./Components/English/Businessprocess";
import { Cloudsolutions } from "./Components/English/Cloudsolutions";
import { Coremodernization } from "./Components/English/Coremodernization";
import { Digitalexperience } from "./Components/English/Digitalexperience";
import { Digitalstrategy } from "./Components/English/Digitalstrategy";
import { Enterpriseapplication } from "./Components/English/Enterpriseapplication";
import { Intelligentprocess } from "./Components/English/Intelligentprocess";
import { Internetofthings } from "./Components/English/Internetofthings";
import { Qualityengineering } from "./Components/English/Qualityengineering";
import { Security } from "./Components/English/Security";
import { Softwareproduct } from "./Components/English/Softwareproduct";
import { Artificalintelligence } from "./Components/English/Artificalintelligence";
import {Infrastructure} from "./Components/English/Infrastructure";
 


function App() {

  return (
    <>

      <Router>
        <Routes >
          {/* France Container Links */}
          <Route path="/fr/home" element={<HomeContainer />} />
          <Route path='/fr/services' element={<ServiceContainer />} />
          <Route path='/fr/about' element={<AboutContainer />} />
          <Route path='/fr/blogs' element={<BlogConatainer />} />
          <Route path='/fr/contact' element={<ContactContainer />} />

          {/* English Container Links */}
          <Route path="/" element={<HomeContainer_En />} />
          <Route path="/en/services" element={<ServiceContainer_en/>}/>
          <Route path='/en/about' element={<AboutContainer_en />} />
          <Route path='/en/blogs' element={<BlogConatainer_en />} />
          <Route path='/en/contact' element={<ContactContainer_en />} />
          <Route path='/en/automotive' element={<Automotive/>} />
          <Route path='/en/banking' element={<Banking/>} />
          <Route path ='/en/capitalmarkets' element={<Capitalmarkets/>}/>
          <Route path='/en/communications' element={<Communication/>} />
          <Route path ='/en/consumergoods' element={<Consumergoods/>}/>
          <Route path ='/en/education' element={<Education/>}/>
          <Route path ='/en/healthcare' element={<Healthcare/>}/>
          <Route path ='/en/informationservices' element={<Informationservices/>}/>
          <Route path ='/en/insurance' element={<Insurance/>}/>
          <Route path ='/en/lifesciences' element={<Lifescience/>}/>
          <Route path ='/en/manufacturing' element={<Manufacturing/>}/>
          <Route path ='/en/oilandgas' element={<Oilandgas/>}/>
          <Route path ='/en/retail' element={<Retail/>}/>
          <Route path ='/en/transportation' element={<Transportation/>}/>
          <Route path ='/en/travel' element={<Travel/>}/>
          <Route path ='/en/utilities' element={<Utilities/>}/>
          <Route path ='/en/applicationservices' element={<ApplicationServices/>}/>
          <Route path='/en/artificalintelligence' element={<Artificalintelligence/>}/>
          <Route path ='/en/businessprocess' element={<Businessprocess/>}/>
          <Route path ='/en/cloudsolutions' element={<Cloudsolutions/>}/>
          <Route path ='/en/coremodernization' element={<Coremodernization/>}/>
          <Route path ='/en/digitalexperience' element={<Digitalexperience/>}/>
          <Route path ='/en/digitalstrategy' element={<Digitalstrategy/>}/>
          <Route path ='/en/enterpriseapplication' element={<Enterpriseapplication/>}/>
          <Route path ='/en/infrastructure' element={<Infrastructure/>}/>

          <Route path ='/en/intelligentprocess' element={<Intelligentprocess/>}/>
          <Route path ='/en/internetofthings' element={<Internetofthings/>}/>
          <Route path ='/en/qualityengineering' element={<Qualityengineering/>}/>
          <Route path ='/en/security' element={<Security/>}/>
          <Route path ='/en/softwareproduct' element={<Softwareproduct/>}/>
































          



        </Routes>
      </Router>
      <FooterComponent />
    </>
  );
}

export default App;
