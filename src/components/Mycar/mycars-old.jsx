give me all code and chnage me the first option with the option that i will get it (brand ) and add to each type of verkehr i id to sendf it to the backend to get the brands : import React, { useState } from "react";
import Split from "../Split";
import Link from "next/link";
import CarDetails from "../Car-details/car-details";
import axios from "axios";
const Mycar = ({ img }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setIsSelected(true);
  };

  const [selectedVehicle, setSelectedVehicle] = useState(""); // Store the selected vehicle ID
  const [brands, setBrands] = useState([]); // Store fetched brands
  const [loading, setLoading] = useState(false); // Manage loading state

  const handleVehicleChange = async (e) => {
    const vehicleId = e.target.value;
    setSelectedVehicle(vehicleId);
    setLoading(true); // Start loading

    try {
      // Fetch brands from the backend
      const response = await axios.get("http://127.0.0.1:8000/api/vehicle/brands", {
        params: { vehicle_id: vehicleId },
      });

      setBrands(response.data); // Populate brands
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };


  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{
        backgroundImage: `url(${img ? img : "/img/patrn.svg"})`,
        marginTop: "-100px"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>

                <h2 className="wow words chars splitting" data-splitting>
                Konfigurator  <br />
                </h2>
              </Split>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-2 valign mb-5 mt-5 ">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/img/sport-car.png"
                alt="Car Icon"
                className="img-fluid"
              />
              <div
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Autos</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-2 valign mb-5 mt-5 ">
            <div className="d-flex flex-column align-items-center">
              <img src="/img/lorry.png" alt="Car Icon" className="img-fluid" />
              <div
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>LKWs</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-2 valign mb-5 mt-5 ">
            <div className="d-flex flex-column align-items-center">
              <img src="/img/van.png" alt="Car Icon" className="img-fluid" />
              <div
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span> Vans</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-2 valign mb-5 mt-5 ">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/img/tracktor.png"
                alt="Car Icon"
                className="img-fluid"
              />
              <div
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Traktoren</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-2 valign mb-5 mt-5 ">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/img/camper-van.png"
                alt="Car Icon"
                className="img-fluid"
              />
              <div
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Wohnmobile</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-2 valign mb-5 mt-5 ">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/img/pickup-truck.png"
                alt="Car Icon"
                className="img-fluid"
              />
              <div
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Pickups</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 mt-70">
          <div className="col-12">
            <div className="row">
              {/* First Select */}
              <div className="col-lg-4 col-md-6 col-12 mb-3 position-relative">
        <select
          className="form-select border-radius-custom"
          style={{ background: "#fff", color: "#000" }}
          disabled={loading || brands.length === 0} // Disable if loading or no brands
        >
          <option value="" disabled selected hidden>
            Marke ausw&auml;hlen
          </option>
          {loading ? (
            <option>Loading...</option>
          ) : (
            brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))
          )}
        </select>
      </div>

              {/* Second Select */}
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <select
                  className="form-select border-radius-custom"
                  style={{ background: "#fff", color: "#000" }}
                >
                  <option value="" disabled selected hidden>
                  Modell ausw&auml;hlen
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              {/* Third Select */}
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <select
                  className="form-select border-radius-custom"
                  style={{ background: "#fff", color: "#000" }}
                >
                  <option value="" disabled selected hidden>
                  Jahr ausw&auml;hlen
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>

            <div className="row mt-15">
              {/* Fourth Select */}
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <select
                  className="form-select border-radius-custom"
                  style={{ background: "#fff", color: "#000" }}
                >
                  <option value="" disabled selected hidden>
                  Engine ausw&auml;hlen
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              {/* Fifth Select */}
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <select
                  className="form-select border-radius-custom"
                  style={{ background: "#fff", color: "#000" }}
                >
           <option value="" disabled selected hidden>
           Ecu ausw&auml;hlen
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              {/* Third Select */}
              <div className="col-md-2 mb-2">
                <button
                  className="butn dark bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span   >Select Your</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mycar;
