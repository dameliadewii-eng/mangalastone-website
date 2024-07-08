
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import neuclearmissile from "../../assets/img/nuclearmissle.png";
import {FaEnvelope,FaLocationArrow, FaPhone} from 'react-icons/fa';
import axios from 'axios';

function ContactUs() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');
  const [cv,setCv] = useState();

  function contact() {
    if(!cv){
      alert('cv is not selected');
      return;
    }
    alert(cv.name);
    let formData = new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('subject',subject);
    formData.append('message',message);
    formData.append('cv',cv);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post('http://localhost:3000/contacts/create',formData,config).then((res) =>{
      console.log(res);
      if(res.status === 2000) {
        alert('submitted');
      }
    })
  }
  return (
    <section id="contact" className="contact">
      <Container data-aos="fade-up">
        <div className="section-title">
          <h3>Contact Us</h3>
        </div>

        <Row data-aos="fade-up" data-aos-delay="100">
          <Col lg={6}>
            <div className="info-box mb-4">
              <FaLocationArrow/>
              <h3>Our Address</h3>
              <p>M9F Block A Military Accounts Society College Road Lahore</p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="info-box mb-4">
              <FaEnvelope/>
              <h3>Email Us</h3>
              <p>info@kingitsol.com</p>
              <p>order@kingitsol.com</p>
              <p>career@kingitsol.com</p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="info-box mb-4">
              <FaPhone/>
              <h3>Call Us</h3>
              <p>+92 320 7545617</p>
              <p>+92 300 6521781</p>
            </div>
          </Col>
        </Row>

        <Row data-aos="fade-up" data-aos-delay="100">
          <Col lg={6} style={{ marginTop: '6%' }}>
            <img src={neuclearmissile} width="70%" height="80%" alt="nuclear missile" />
          </Col>

          <Col lg={6}>
            <Form action="" method="post" encType="multipart/form-data">
              <Row>
                <Col className="form-group">
                  <Form.Control onChange={(event)=>{
                    // event.preventDefault();
                    setName(event.target.value);
                  }} type="text" name="name" id="name" placeholder="Your Name" required />
                </Col>
                <Col className="form-group">
                  <Form.Control onChange={(event)=>{
                    // event.preventDefault();
                    setEmail(event.target.value);
                  }} type="email" name="email" id="email" placeholder="Your Email" required />
                </Col>
              </Row>
              <div className="form-group main_input" style={{ marginTop: '20px' }}>
                <Form.Control onChange={(event)=>{
                  // event.preventDefault();
                  setSubject(event.target.value);
                }} type="text" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group main_input" style={{ marginTop: '20px' }}>
                <Form.Control onChange={(event)=>{
                  // event.preventDefault();
                  setMessage(event.target.value);
                }} as="textarea" name="message" rows={5} placeholder="Message" required />
              </div>
              <div className="form-group main_input" style={{ marginTop: '20px' }}>
                <Form.Label htmlFor="cv" style={{ marginTop: '10px' }}>
                  Attach File : <span>(upload only PDF File)</span>{' '}
                </Form.Label>
                <Form.Control onChange={(event)=>{
                  // event.preventDefault();
                  if(event.target.files){
                    console.dir(event.target.files[0]);
                    setCv(event.target.files[0]);
                  }
                }} type="file" accept='application/pdf' name="cv" id="cv" />
              </div>
              <div className="form-group main_input" style={{ marginTop: '20px' }}>
                <Button variant="primary" onClick={(event)=>{
                  event.preventDefault();
                  contact();
                }} type="submit" name="submit" id="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
