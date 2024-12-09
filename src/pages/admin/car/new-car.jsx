import React from "react";
import { useRouter } from 'next/router';
import blog2Data from "../../../data/blog2.json";
import LightTheme from "../../../layouts/Light";
import Navbar from "../../../components/Navbar/navbar";
import PageHeader from "../../../components/Page-header/page-header";
import Footer from "../../../components/Footer/footer";
import NewCarCharacteristics from "../../../components/New-car-characteristics/new-car-characteristics";
import NewCar from "../../../components/New-car/new-car";
import AddDetails from "../../../components/New-car/new-details";
const NewBlogDetailsLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);


  const router = useRouter();


  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        className="sub-bg"
        title="Details des Autos hinzuf&uuml;gen."
        paragraph="Alle aktuellen Auto und Veranstaltungen unseres kreativen Teams."
      />
      <AddDetails/>
      <NewCar/>
      <NewCarCharacteristics/>
      <Footer />
    </LightTheme>
  );
};

export default NewBlogDetailsLight;
