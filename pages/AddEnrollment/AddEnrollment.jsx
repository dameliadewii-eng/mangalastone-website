import React, { useEffect, useState } from "react";
import Header from "../../src/components/Header/Header";
import "./AddEnrollment.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "../../src/components/Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AddEnrollment = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [cnic, setCnic] = useState("");
  let [cell, setCell] = useState("");
  let [guardianName, setGuardianName] = useState("");
  let [guardianCell, setGuardianCell] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("");
  let [education, setEducation] = useState("");
  let [classType, setClassType] = useState("");
  let [address, setAddress] = useState("");
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  const enroll = () => {
    try {
      axios
        .post("http://localhost:3000/enrolls/add", {
          name,
          email,
          cell,
          cnic,
          guardianName,
          guardianCell,
          dob,
          gender,
          education,
          address,
          classType,
          course: location.state.course,
        })
        .then((res) => {
          console.log(res);
        });
      alert("Your are enrolled in this course!");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <Header />
      <main id="main" data-aos="fade-up">
        {/*<!-- ======= Breadcrumbs Section ======= -->*/}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h1 style={{ color: "black" }}>Enrollment</h1>
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
                      navigate("/enroll");
                    }}
                  >
                    Enroll Now
                  </a>
                </li>
                <li>
                  <a href="#">{/*<?php echo $course_title ?>*/}</a>
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/*<!-- Breadcrumbs Section -->*/}

        {/*<!-- ======= Careers Details Section ======= -->*/}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="col-md-8">
                  <form action="" method="post" encType="multipart/form-data">
                    <div className="row">
                      <div className="col-md-6 form-group main_input pln">
                        <label htmlFor="formGroupExampleInput ">Name</label>
                        <input
                          type="text"
                          onChange={(event) => {
                            event.preventDefault();
                            setName(event.target.value);
                          }}
                          className="form-control"
                          value={name}
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="col-md-6 form-group main_input prn">
                        <label htmlFor="formGroupExampleInput2">Email</label>
                        <input
                          type="Email"
                          onChange={(event) => {
                            event.preventDefault();
                            setEmail(event.target.value);
                          }}
                          value={email}
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-md-6 form-group main_input pln"
                        style={{ marginTop: "18px" }}
                      >
                        <label htmlFor="formGroupExampleInput2">
                          CNIC. (without dashes)
                        </label>
                        <input
                          type="text"
                          onChange={(event) => {
                            event.preventDefault();
                            setCnic(event.target.value);
                          }}
                          value={cnic}
                          maxLength="13"
                          className="form-control"
                          name="cnic"
                          placeholder="3310012345670"
                        />
                      </div>
                      <div
                        className="col-md-6 form-group main_input pln"
                        style={{ marginTop: "18px" }}
                      >
                        <label htmlFor="formGroupExampleInput2">
                          Contact No.
                        </label>
                        <input
                          type="text"
                          onChange={(event) => {
                            event.preventDefault();
                            setCell(event.target.value);
                          }}
                          value={cell}
                          className="form-control"
                          name="phone"
                          placeholder="Contact No."
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group main_input pln mt-3">
                        <label htmlFor="formGroupExampleInput ">
                          Guardian Name
                        </label>
                        <input
                          type="text"
                          onChange={(event) => {
                            event.preventDefault();
                            setGuardianName(event.target.value);
                          }}
                          value={guardianName}
                          className="form-control"
                          name="guardian_name"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="col-md-6 form-group main_input prn mt-3">
                        <label htmlFor="formGroupExampleInput2">
                          Guardian Phone No.
                        </label>
                        <input
                          type="text"
                          onChange={(event) => {
                            event.preventDefault();
                            setGuardianCell(event.target.value);
                          }}
                          value={guardianCell}
                          className="form-control"
                          name="guardian_phone"
                          placeholder="Father Phone No."
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group main_input pln mt-3">
                        <label htmlFor="formGroupExampleInput ">
                          Date of Birth
                        </label>
                        <input
                          onChange={(event) => {
                            event.preventDefault();
                            setDob(event.target.value);
                          }}
                          value={dob}
                          type="date"
                          className="form-control"
                          name="dob"
                          placeholder="date of birth"
                        />
                      </div>

                      <div className="col-md-6 form-group main_input prn mt-3">
                        <label htmlFor="formGroupExampleInput2">Gender.</label>
                        {/*<!-- <input type="Email" className="form-control" name="Father Phone No." placeholder="Email"> -->*/}
                        <div>
                          <input
                            className="form-check-input"
                            onChange={(event) => {
                              event.preventDefault();
                              setGender("male");
                            }}
                            type="radio"
                            name="gender"
                            id="male"
                            style={{ marginTop: "12px" }}
                            value="male"
                          />
                          <label
                            className="form-check-label mt-2"
                            htmlFor="male"
                          >
                            Male
                          </label>
                          <input
                            className="form-check-input"
                            onChange={(event) => {
                              event.preventDefault();
                              setGender("female");
                            }}
                            type="radio"
                            name="gender"
                            id="female"
                            style={{ margin: "12px", marginRight: "5px" }}
                            value="Female"
                          />
                          <label
                            className="form-check-label mt-2"
                            htmlFor="female"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-12 form-group main_input pln"
                      style={{ marginTop: "18px" }}
                    >
                      <label htmlFor="formGroupExampleInput2">Education.</label>
                      <input
                        type="text"
                        value={education}
                        onChange={(event) => {
                          event.preventDefault();
                          setEducation(event.target.value);
                        }}
                        className="form-control"
                        name="education"
                        placeholder="Your Education."
                      />
                    </div>

                    <div
                      className="col-md-12 form-group main_input prn"
                      style={{ marginTop: "10px" }}
                    >
                      <label htmlFor="formGroupExampleInput">Class Type:</label>
                      <br />
                      <select
                        className="select-menu_style form-control"
                        onChange={(event) => {
                          event.preventDefault();
                          setClassType(event.target.value);
                        }}
                        name="course_type"
                        id=""
                        style={{ marginLeft: "0px" }}
                        required
                        value={classType}
                      >
                        <option value="">Select One</option>
                        <option value="Online">Online</option>
                        <option value="Physical">Physical</option>
                      </select>
                    </div>
                    <div
                      className="col-md-6 form-group main_input prn"
                      style={{ marginTop: "10px" }}
                    ></div>
                    <label htmlFor="formGroupExampleInput2">
                      Complete Address
                    </label>
                    <div className="form-group">
                      <textarea
                        value={address}
                        onChange={(event) => {
                          event.preventDefault();
                          setAddress(event.target.value);
                        }}
                        className="col-md-12 form-control main_input prn"
                        style={{ width: "100%" }}
                        name="address"
                        rows="3"
                        cols="40"
                        placeholder="Address"
                        required
                      ></textarea>
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
                        onClick={(event) => {
                          event.preventDefault();
                          enroll();
                        }}
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>

              {/*<!-- Contact Information -->*/}
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Contact information</h3>
                  <p>
                    M9F Block A Miitary Accouts Society College Road Lahore,
                    Pakistan <br />
                    <br />
                  </p>
                  <ul>
                    <strong>
                      <i className="fas fa-phone-alt">
                        <FaPhoneAlt />
                      </i>
                    </strong>{" "}
                    +92 320 7545617
                    <br />
                    <strong>
                      <i className="fas fa-phone-alt">
                        <FaPhoneAlt />
                      </i>
                    </strong>{" "}
                    +92 300 6521781
                    <br />
                    <strong>
                      <i className="fas fa-envelope">
                        <FaEnvelope />
                      </i>
                    </strong>{" "}
                    info@kingitsol.com
                    <br />
                    <strong>
                      <i className="fas fa-envelope">
                        <FaEnvelope />
                      </i>
                    </strong>{" "}
                    order@kingitsol.com
                    <br />
                    <strong>
                      <i className="fas fa-envelope">
                        <FaEnvelope />
                      </i>
                    </strong>{" "}
                    career@kingitsol.com
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- End Portfolio Details Section -->*/}
      </main>
      <Footer />
    </>
  );
};

export default AddEnrollment;
