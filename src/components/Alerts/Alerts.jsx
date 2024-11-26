import React,{useEffect, useState} from 'react';
import axios from 'axios';


const Alerts = () =>{
    const [ alerts, setAlerts] = useState([]);
  
    useEffect(() =>{
        axios.get('http://localhost:3000/alerts/all').then((res)=>{
            console.log(res.data);
            setAlerts(res.data.alerts);
        });
    },[]);
    return (
        <div>
            <ul style={{listStyleType:"none",display:'flex',flexDirection:'column',gap:'5px',padding:'5px'}}>
                {
                    alerts.map((alert,index)=>{
                        return(
                            <li key={alert._id} style={index%2 == 0 ? {background:"lightpink",padding:"3px", textAlign:'center',borderRadius:'4px'}:{background:"lightblue",padding:"3px", textAlign:'center',borderRadius:'4px'}}>{alert.description}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Alerts;