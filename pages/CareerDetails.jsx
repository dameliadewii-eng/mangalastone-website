import React, { useState,useEffect } from "react";
import AdminHeader from "../src/components/AdminHeader/AdminHeader";
import AdminFooter from "../src/components/AdminFooter/AdminFooter";
import { FaFileDownload, FaTrash } from "react-icons/fa";
import axios from "axios";
import { data } from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import fileDownload from "js-file-download";

const CareerDetails = () =>{

    const [careers,setCareers] = useState([]);

    useEffect(() => {
        AOS.init({
          once: true,
          duration: 600,
          easing: 'ease-out'
        });
    
      }, []);

    useEffect(() =>{
        axios.get('http://localhost:3000/careers/all').then((res)=>{
            console.log(res.data);
            setCareers(res.data.careers);
        });
    },[]);
    const removeCareer = (careerId) => {
        axios.delete('http://localhost:3000/careers/remove',{careerId:careerId}).then((res)=>{
            let filteredCareers = careers.filter((career)=>{
                return career._id != careerId;
            });
            setCareers(filteredCareers);
            console.log('career has been removed');
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
    {/*<!-- End Header -->*/}
    <main id="main" data-aos="fade-up">

    {/*<!-- ======= Breadcrumbs Section ======= -->*/}
    <section className="breadcrumbs">
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
                <h1 style={{color: "black"}}>Careers</h1>
                <ol>
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">Career</a></li>
                </ol>
            </div>
        </div>
    </section>
    {/*<!-- Breadcrumbs Section -->*/}



    {/*<!-- Start Table -->*/}
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{backgroundColor:'white'}}>
                                <thead>
                                    <tr>
                                        <th>Sr.#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Specialization</th>
                                        <th>Description</th>
                                        <th>time</th>
                                        <th>Cv</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {
                                    careers.map((career,index)=>{
                                        return <tr key={index}>
                                        <td>{index}</td>
                                        <td>{career.name}</td>
                                        <td>{career.email}</td>
                                        <td>{career.cell}</td>
                                        <td>{career.specialization}</td>
                                        <td>{career.description}</td>
                                        <td>{career.date + ' ' + career.time}</td>
                                        <td className="text-center"><a className="text-warning"><i className="fas fa-file-download"><FaFileDownload onClick={(event,cv=career.cv)=>{
                                            event.preventDefault();
                                            handleDownload(cv);
                                        }}/></i></a></td>
                                        <td className="text-center"><a className="text-danger"><i className="fas fa-trash"><FaTrash onClick={(event,careerId=career._id)=>{
                                            event.preventDefault();
                                            removeCareer(careerId);
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

export default CareerDetails;