import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronRight, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import Map from '../Map/Map'
function Footer() {
  return (
    <footer id="footer">
      <Map/>
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} md={6} className="footer-contact">
              <h3>Watu Mangala Stone<span>.</span></h3>
              <p>
                Jl. Nyi Ageng Serang, Lengkong Kulon, Kec. Sindangwangi, Kabupaten Majalengka,  <br />
               Jawa Barat 45474<br /> Indonesia <br />
                <br />
                <strong>
                  <i className="fas fa-phone-alt"><FaPhoneAlt/></i>
                </strong>{' '}
                +62 *** ******<br />
                <strong>
                  <i className="fas fa-phone-alt"><FaPhoneAlt/></i>
                </strong>{' '}
                +62 *** ******<br />
                <strong>
                  <i className="fas fa-envelope"><FaEnvelope/></i>
                </strong>{' '}
                info@WATU MANGLA.com<br />
                <strong>
                  <i className="fas fa-envelope"><FaEnvelope/></i>
                </strong>{' '}
                order@WATU MANGLA.com<br />
                <strong>
                  <i className="fas fa-envelope"><FaEnvelope/></i>
                </strong>{' '}
                career@WATU MANGLA.com<br />
              </p>
            </Col>

            <Col lg={4} md={6} className="footer-links">
              <h3>Our Products</h3>
              <ul>
                <li>
                  <i className="bx bx-chevron-right "><FaChevronRight/></i>{' '}
                  <a href="#">Andesite Stone</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right "><FaChevronRight/></i>{' '}
                  <a href="#">Palem Sandstone</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right "><FaChevronRight/></i>{' '}
                  <a href="#">Wall Cladding</a>
                </li>
                <li>
                  {/* <i className="bx bx-chevron-right "><FaChevronRight/></i>{' '} */}
                  {/* <a href="#">Graphic Design</a> */}
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="footer-links">
              <h3>Our Social Networks</h3>
              <div className="social-links mt-3">
                <a
                  href="https://twitter.com/WATU MANGLA"
                  target="_blank"
                  rel="noreferrer"
                  className="twitter"
                >
                  <FaTwitter/>
                </a>
                <a
                  href="https://www.facebook.com/WATU MANGLAs/"
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <FaFacebook/>
                </a>
                <a
                  href="https://www.instagram.com/WATU MANGLAs/"
                  target="_blank"
                  rel="noreferrer"
                  className="instagram"
                >
                  <FaInstagram/>
                </a>

                <a
                  href="https://www.linkedin.com/in/WATU MANGLA-t-1a2966202/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin"
                >
                  <FaLinkedin/>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
