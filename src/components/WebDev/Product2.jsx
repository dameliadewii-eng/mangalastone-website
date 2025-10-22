import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import webimg from "../../assets/img/web.png";
import webfront from "../../assets/img/webfront.png";
import backend from "../../assets/img/backend.png";
import weblaptop from "../../assets/img/weblaptop.png";
function Product2() {
 
  return (
  <div className="row " style={{marginTop: "10%", paddingLeft: "10%",paddingRight:"10%"}}>
    <div className="col-lg-6 col-md-6 col-sm-6">
        <img src={webimg}/>
        <h3 style={{marginTop: "20px"}}>Palm Sandstone</h3>
        <p style={{textAlign: "justify"}}>Palm Sandstone is a natural sandstone (sand rock) found in the Mountains located in Bobos, Cirebon Regency, Indonesia. This stone features a unique surface texture similar to Palimanan Stone but with a distinct color difference. While Palimanan Stone has a yellowish tone, Palm Sandstone is characterized by its warm brown hues, making it a preferred choice for natural and earthy aesthetics.</p>
        <div className="row">
            <div className="col-1">
                {/* <img src={webfront} className="img-fluid" alt="Sheep 2" /> */}
            </div>
            <div className="col-6">
                {/* <h5 style={{padding: "3px"}}>Front End</h5> */}
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                {/* <img src={backend} className="img-fluid" alt="Sheep 2" /> */}
            </div>
            <div className="col-6">
                {/* <h5 style={{padding: "3px"}}>Back End</h5> */}
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6">
        <img src={weblaptop} width="70%" height="90%" style={{marginLeft: "25%"}} />
    </div>
</div>

  );
}

export default Product2;
