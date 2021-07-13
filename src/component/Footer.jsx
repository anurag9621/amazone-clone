import React from 'react'
import "../style/footer.css"
import Logo from "../img/logoa.png"
function Footer() {
    return (
      <footer className="end">
        <div className="width__on__a">
        <div className="endtop">

            <a href="/">
              <img src={Logo} alt="/" />
            </a>
            <div className="endcontacttop">
              <a href="./page/contact_us.html">Contact Us</a>|
              <a href="./page/podcast.html">Podcast</a>|
              <a href="./page/correction.html">Correction</a>
            </div>
          </div>
             <div className="endbox">
            <ul>
              <a href="#">
                <h3>Get to Know Us</h3>
              </a>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Press Releases</a>
              </li>
              <li>
                <a href="/">Amazon Cares</a>
              </li>
              <li>
                <a href="/">Gift a Smile</a>
              </li>
            </ul>
            <ul>
              <a href="#">
                <h3>Connect with Us</h3>
              </a>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
             
            </ul>
            <ul>
              <a href="#">
                <h3>Make Money with Us</h3>
              </a>
              <li>
                <a href="/">Sell on Amazon</a>
              </li>
              <li>
                <a href="/">Sell under Amazon Accelerator</a>
              </li>
              <li>
                <a href="/">Amazon Global Selling</a>
              </li>
              <li>
                <a href="/">Become an Affiliate </a>
              </li>
              <li>
                <a href="/">Fulfilment by Amazon </a>
              </li>
              <li>
                <a href="/">Advertise Your Products</a>
              </li>
              <li>
                <a href="/">Amazon Pay on Merchants</a>
              </li>
            </ul>
           
            <ul>
              <a href="#">
                <h3>Let Us Help You</h3>
              </a>
              <li>
                <a href="/">COVID-19 and Amazon</a>
              </li>
              <li>
                <a href="/">Your Account</a>
              </li>
              <li>
                <a href="/book">Returns Centre</a>
              </li>
              <li>
                <a href="/">100% Purchase Protection</a>
              </li>
              <li>
                <a href="/">Amazon App Download</a>
              </li>
              <li>
                <a href="/">Amazon Assistant Download</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
            </ul>
            
            
        </div>
        <div className="conditionterm">
            <a href="/">Terms Of Use</a>
            |
            <a href="/">Privacy Policy</a>
            |
            <a href="/">Advertise With Us</a>
            |
            <a href="/">About Us</a>
          </div>
          <h5 className="copyright_things">Copyright © 2020 Amazon . All Rights Reserved</h5>
          <h5 className="copyright_things"><a href="https://www.instagram.com/___mr_aaru___?r=nametag">Powered by A.P</a></h5>
          </div>
        </footer>
    )
}

export default Footer
