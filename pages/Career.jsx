import React, { useEffect, useState } from "react";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [cv, setCV] = useState();
  const [description, setDescription] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
    // setCurrentProjects(projects);
  }, []);

  const addCareer = () => {
    console.log(cell);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("cell", cell);
    formData.append("specialization", specialization);
    formData.append("cv", cv);
    formData.append("description", description);
    formData.append("filename", cv.name);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      if (cv) {
        axios
          .post("http://localhost:3000/careers/add", formData, config)
          .then((res) => {
            console.log(res);
          });
        alert("Congratulations your application has been sent!");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <Header />
      <main id="main" data-aos="fade-up">
        {/* ======= Breadcrumbs Section ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h1 style={{ color: "black" }}>Careers</h1>
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
                  <a
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/career");
                    }}
                  >
                    Career
                  </a>
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
                  {/* content here */}
                  <form action="" method="post" encType="multipart/form-data">
                    <div className="row">
                      <div className="col-md-6 form-group main_input pln">
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input
                          type="text"
                          vlaue={name}
                          className="form-control"
                          name="name"
                          placeholder="Full Name"
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-md-6 form-group main_input prn">
                        <label htmlFor="formGroupExampleInput2">Email</label>
                        <input
                          type="email"
                          value={email}
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
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
                        className="form-control"
                        name="phone"
                        placeholder="Contact No."
                        onChange={(event) => {
                          setCell(event.target.value);
                        }}
                      />
                    </div>

                    <div
                      className="col-md-12 form-group main_input prn"
                      style={{ marginTop: "10px" }}
                    >
                      <label htmlFor="formGroupExampleInput">
                        Specialization:
                      </label>
                      <br />
                      <select
                        className="select-menu_style form-control"
                        value={specialization}
                        onChange={(event) => {
                          setSpecialization(event.target.value);
                        }}
                        name="specialization"
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
                        Upload CV : <span>(upload only PDF File)</span>
                      </label>
                      <input
                        type="file"
                        onChange={(event) => {
                          event.preventDefault();
                          if (event.target.files.length > 0) {
                            setCV(event.target.files[0]);
                          }
                        }}
                        name="cv"
                        accept="application/pdf"
                        className="form-control"
                      />
                    </div>

                    <div
                      className="col-md-6 form-group main_input prn"
                      style={{ marginTop: "10px" }}
                    >
                      <label htmlFor="formGroupExampleInput2">
                        Description
                      </label>
                      {/* <input type="Email" class="form-control" name="email" placeholder="Email"> */}
                      {/* <textarea name="description" placeholder="Description" style="width:400px; height:100px;"></textarea> */}
                      <div className="form-group">
                        <textarea
                          vlaue={description}
                          onChange={(event) => {
                            event.preventDefault();
                            setDescription(event.target.value);
                          }}
                          className="col-md-12 form-control main_input prn"
                          style={{ width: "100%" }}
                          name="description"
                          rows="5"
                          cols="40"
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
                          addCareer();
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
                        <i className="fas fa-phone-alt">
                          <FaPhoneAlt />
                        </i>
                      </strong>{" "}
                      +92 320 7545617
                    </li>
                    <li>
                      <strong>
                        <i className="fas fa-phone-alt">
                          <FaPhoneAlt />
                        </i>
                      </strong>{" "}
                      +92 300 6521781
                    </li>
                    <li>
                      <strong>
                        <i className="fas fa-envelope">
                          <FaEnvelope />
                        </i>
                      </strong>{" "}
                      info@kingitsol.com
                    </li>
                    <li>
                      <strong>
                        <i className="fas fa-envelope">
                          <FaEnvelope />
                        </i>
                      </strong>{" "}
                      order@kingitsol.com
                    </li>
                    <li>
                      <strong>
                        <i className="fas fa-envelope">
                          <FaEnvelope />
                        </i>
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

export default Career;
