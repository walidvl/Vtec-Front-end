/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
            <h2 className="color-font fw-700">
  Bei VTEC-Chiptuning bietet ein erfahrenes Team ma&szlig;geschneiderte L&ouml;sungen f&uuml;r die Optimierung Ihres Fahrzeugs.
</h2>

            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              <img src="/img/slid/about.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;