import React, { useEffect, useState } from "react";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import "./Order.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Order = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [category, setCategory] = useState("");
  const [attachment, setAttachment] = useState();
  const [description, setDescription] = useState("");

  const createOrder = () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("cell", cell);
    formData.append("category", category);
    formData.append("attachment", attachment);
    formData.append("description", description);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      axios
        .post("http://localhost:3000/orders/add", formData, config)
        .then((res) => {
          console.log(res);
        });
      alert("Your order has been placed!");
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Header />
      <main data-aos="fade-up">
        {/* ======= Breadcrumbs Section ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h1 style={{ color: "black" }}>Orders</h1>
              <ol>
                <li>
                  <a
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Order</a>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="col-md-8">
                  <form action="" method="post" encType="multipart/form-data">
                    <div className="row">
                      <div className="col-md-6 form-group main_input pln">
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(event) => {
                            event.preventDefault();
                            setName(event.target.value);
                          }}
                          className="form-control"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-md-6 form-group main_input prn">
                        <label htmlFor="formGroupExampleInput2">Email</label>
                        <input
                          type="Email"
                          value={email}
                          onChange={(event) => {
                            event.preventDefault();
                            setEmail(event.target.value);
                          }}
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-12 form-group main_input pln"
                      style={{ marginTop: "18px" }}
                    >
                      <label htmlFor="formGroupExampleInput2">
                        Contact No.
                      </label>
                      <input
                        type="text"
                        value={cell}
                        onChange={(event) => {
                          event.preventDefault();
                          setCell(event.target.value);
                        }}
                        className="form-control"
                        name="phone"
                        placeholder="Contact No."
                      />
                    </div>
                    <div
                      className="col-md-12 form-group main_input prn"
                      style={{ marginTop: "10px" }}
                    >
                      <label htmlFor="formGroupExampleInput">Category:</label>
                      <br />
                      <select
                        className="select-menu_style form-control"
                        value={category}
                        onChange={(event) => {
                          event.preventDefault();
                          setCategory(event.target.value);
                        }}
                        name="category"
                        id=""
                        style={{ marginLeft: "0px" }}
                        required
                      >
                        <option value="">Select One</option>
                        <option value="Web Development">
                          Web Development (MERN Stack)
                        </option>
                        <option value="Android Development">
                          Android Development
                        </option>
                        <option value="iOS Development">iOS Development</option>
                        <option value="Flutter Development">
                          Flutter Development
                        </option>
                        <option value="React Development">
                          React Development
                        </option>
                        <option value="React Native Development">
                          React Native Development
                        </option>
                        <option value="NodeJs Development">
                          NodeJs Development
                        </option>
                        <option value="Game Developement">
                          Game Developement
                        </option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="Search Engine Optimization">
                          Search Engine Optimization
                        </option>
                        <option value="App Store  Optimization">
                          App Store Optimization
                        </option>
                        <option value="Creative Writing">
                          Creative Writing
                        </option>
                        <option value="Graphic Designer">
                          Graphic Designer
                        </option>
                        <option value="Video Editor">Video Editor</option>
                        <option value="Youtube Studio Expert">
                          Youtube Studio Expert
                        </option>
                        <option value="Quality Assurance">
                          Quality Assurance
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div
                      className="form-group main_input"
                      style={{ marginTop: "10px" }}
                    >
                      <label
                        htmlFor="formGroupExampleInput2"
                        style={{ marginTop: "10px" }}
                      >
                        Attachment (optional) :
                        <span>(upload only PDF File)</span>
                      </label>
                      <input
                        type="file"
                        onChange={(event) => {
                          setAttachment(event.target.files[0]);
                        }}
                        name="cv"
                        className="form-control"
                      />
                    </div>
                    <div
                      className="col-md-6 form-group main_input prn"
                      style={{ marginTop: "10px" }}
                    >
                      <label htmlFor="formGroupExampleInput2">
                        Project Description
                      </label>
                      <div className="form-group">
                        <textarea
                          value={description}
                          onChange={(event) => {
                            event.preventDefault();
                            setDescription(event.target.value);
                          }}
                          className="col-md-12 form-control form-group main_input prn"
                          style={{ width: "100%" }}
                          name="description"
                          rows="5"
                          cols="40"
                          maxLength="1000"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-md-12 mt-20"
                      style={{ marginTop: "20px" }}
                    >
                      <div
                        className="mb10 g-recaptcha mtb"
                        data-sitekey="6LczYccUAAAAAOk9FLu8n5AWkzpLiJwtP15F5pwS"
                      ></div>
                      <input
                        type="submit"
                        className="btn btn-primary"
                        name="submit"
                        id="submit"
                        value="Submit"
                        onClick={(event) => {
                          event.preventDefault();
                          createOrder();
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Contact information</h3>
                  <ul>
                    <li>
                      M9F Block A Miitary Accouts Society College Road Lahore,
                      Pakistan
                    </li>
                    <li>
                      <strong>
                        <FaPhone />
                      </strong>{" "}
                      +92 320 7545617
                    </li>
                    <li>
                      <strong>
                        <FaPhone />
                      </strong>{" "}
                      +92 300 6521781
                    </li>
                    <li>
                      <strong>
                        <FaEnvelope />
                      </strong>{" "}
                      info@kingitsol.com
                    </li>
                    <li>
                      <strong>
                        <FaEnvelope />
                      </strong>{" "}
                      order@kingitsol.com
                    </li>
                    <li>
                      <strong>
                        <FaEnvelope />
                      </strong>{" "}
                      career@kingitsol.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Order;
