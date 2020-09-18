import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="main-footer center">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>845-876-9034</li>
              <li>Orlando,FL</li>
              <li>1234 Big Street</li>
              {/* <li>1234 Dumb St.</li> */}
            </ul>

          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Resources</h4>
            <ul className="list-unstyled">
              <li>goodgood</li>
              <li>thanks</li>
              {/* <li>sorry</li> */}
            </ul>

          </div>
          {/* Column3 */}
          <div className="col">
            <h4>FAQ'S</h4>
            <ul className="list-unstyled">
              <li>good</li>
              <li>thanksthanks</li>
              {/* <li>sorryyy</li> */}
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm center">
            &copy;{new Date().getFullYear()} Trimboli Productions | All rights reserved | Terms of service | Privacy
          </p>
 
        </div>

      </div>

    </div>


  )
}

export default Footer