import Image from "next/image";
import logo from "/public/images/foo_logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="foo-desc">
              <div className="foo-desc-img">
                <Image src={logo} />
              </div>
              <div className="foo-desc-qoute">
                <h3>Ready to talk growth.</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foo-links">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foo-contact">
              <ul>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <a href={"tel:+92 12345678958"}>+92 12345678958</a>
                </li>
                <li>
                  <span>
                    <MdEmail />
                  </span>
                  <a href={"mailto:saadshahz369@gmail.com"}>
                    info@marketingagency.co
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
