import React, { useEffect, useState } from "react";
import { FaFileDownload, FaTrash } from "react-icons/fa";
import AdminHeader from "../src/components/AdminHeader/AdminHeader";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import AdminFooter from "../src/components/AdminFooter/AdminFooter";
import fileDownload from "js-file-download";
import { useNavigate } from "react-router-dom";
const ContactDetails = () =>{
    let navigate = useNavigate();

    const [contacts,setContacts] = useState([]);
    useEffect(() => {
        AOS.init({
          once: true,
          duration: 600,
          easing: 'ease-out'
        });
    
      }, []);

    useEffect(()=>{
        axios.get('http://localhost:3000/contacts/all').then((res)=>{
            console.log(res.data);
            setContacts(res.data.contacts);
        }).catch((err)=>{
            alert('got an error');
        })
    },[]);

    const removeContact = (contactId) => {
        axios.delete('http://localhost:3000/contacts/remove',{contactId:contactId}).then((res)=>{
            let filteredContacts = contacts.filter((contact)=>{
                return contact._id != contactId;
            });
            setContacts(filteredContacts);
            console.log('contact has been removed');
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleDownload = (filename) => {
        axios.get("http://localhost:3000/cvs/"+filename, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        });
      }

    return(
        <>
        <AdminHeader/>
        <main id="main" data-aos="fade-up">

    {/*<!-- ======= Breadcrumbs Section ======= -->*/}
        <section className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h1 style={{color: "black}"}}>Contacts</h1>
                    <ol>
                        <li><a onClick={(event)=>{
                            event.preventDefault();
                            navigate('/career');
                        }}>Admin</a></li>
                        <li><a href="#">Contact</a></li>

                    </ol>
                </div>

            </div>
        </section>
        {/*<!-- Breadcrumbs Section -->*/}
        {/*<!-- Start Table -->*/}
       {/* <div className="card shadow m-4 "> */}
                        {/*<div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Contact Information</h6>
                        </div>
    <div className="card-body">*/}
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{backgroundColor:'white'}}>
                                    <thead>
                                        <tr>
                                            <th>Sr.#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Subject</th>
                                            <th>Message</th>
                                            <th>time</th>
                                            <th>Cv</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                  
                                    <tbody>

                                  {
                                    contacts.map((contact,index) =>{
                                        return <tr key={index}>
                                            <td>{index}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.subject}</td>
                                            <td>{contact.message}</td>
                                            <td>{contact.date +' '+ contact.time}</td>
                                            <td className="text-center"><a className="text-warning" ><i className="fas fa-file-download"><FaFileDownload onClick={(event,cv=contact.cv) =>{
                                                //download cv logic
                                                handleDownload(cv);
                                            }} /></i></a></td>
                                            <td className="text-center"><a className="text-danger"><i className="fas fa-trash"><FaTrash onClick={(event,contactId=contact._id)=>{
                                                event.preventDefault();
                                                removeContact(contactId);
                                            }}/></i></a></td>
                                        </tr>
                                    })    
                                }
                                    </tbody>
                                </table>
                            </div>
    </main>
    <AdminFooter/>
        </>
    )
}

export default ContactDetails;