import React, { useState,useEffect } from "react";
import AdminHeader from "../src/components/AdminHeader/AdminHeader";
import AdminFooter from "../src/components/AdminFooter/AdminFooter";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const EnrollDetails = () =>{
    let navigate = useNavigate();
    const [enrolls,setEnrolls] = useState([]);

    useEffect(() => {
        AOS.init({
          once: true,
          duration: 600,
          easing: 'ease-out'
        });
    
      }, []);

    useEffect(() =>{
        axios.get('http://localhost:3000/enrolls/all').then((res)=>{
            console.log(res.data);
            setEnrolls(res.data.enrollments);
        });
    },[]);
    const removeEnroll = (enrollId) => {
        axios.delete('http://localhost:3000/enrolls/remove',{enrollId}).then((res)=>{
            let filteredEnrolls = enrolls.filter((enroll)=>{
                return enroll._id != enrollId;
            });
            setEnrolls(filteredEnrolls);
            console.log('enrollment has been removed');
        }).catch((err)=>{
            console.log(err);
        })
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
                <h1 style={{color: "black"}}>Enrolls</h1>
                <ol>
                    <li><a onClick={(event)=>{
                        event.preventDefault();
                        navigate('/career');
                    }}>Admin</a></li>
                    <li><a href="#">Career</a></li>
                </ol>
            </div>
        </div>
    </section>
    {/*<!-- Breadcrumbs Section -->*/}



    {/*<!-- Start Table -->*/}

    <div className="table-responsive">I
    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{backgroundColor:'white'}}>
                                             
<thead>
<tr>
    <th>Sr.#</th>
    <th>Name</th>
    <th>Phone</th>
    <th>Guardian Name</th>
    <th>Guardian Phone</th>
    <th>CNIC</th>
    <th>EMAIl</th>
    <th>Course Title</th>
    <th>DOB</th>
    <th>Education</th>
    <th>Gender</th>
    <th>Address</th>
    <th>Date</th>
    <th>Time</th>
    <th>Action</th>
</tr>
</thead>

<tbody>

{
enrolls.map((enroll,index) =>{
return <tr key={index}>
    <td>{index}</td>
    <td>{enroll.name}</td>
    <td>{enroll.cell}</td>
    <td>{enroll.guardianName}</td>
    <td>{enroll.guardianCell}</td>
    <td>{enroll.cnic}</td>
    <td>{enroll.email}</td>
    <td>{enroll.course}</td>
    <td>{enroll.dob}</td>
    <td>{enroll.education}</td>
    <td>{enroll.gender}</td>
    <td>{enroll.address}</td>
    <td>{new Date(enroll.date).toDateString()}</td>
    <td>{enroll.time}</td>
    <td className="text-center"><a className="text-danger"><i className="fas fa-trash"><FaTrash onClick={(event,enrollId=enroll._id)=>{
        event.preventDefault();
        removeEnroll(enrollId);
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

export default EnrollDetails;




 