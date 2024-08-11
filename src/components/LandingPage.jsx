import React from "react";
import Slider from "react-slick";
import TopNav from "./TopNav";
import LastNav from "./LastNav";
import Text from "./Text.jsx";
import "./LandingPage.css";
import Marquee from "./Marquee.jsx";




export default function LandingPage(){
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        autoplay:true,
        autoplaySpeed:10000,
        speed:6000,
        pauseOnFocus:false,
        pauseOnHover:false,
      };
    return(
        <>
        <div className="nav" >
        <div>
           <TopNav/>
           <LastNav/>
        </div>
      </div>
      <Slider {...settings}>
  <div className="slick-slide">
    <div className="img-div" style={{ backgroundImage: `url('https://images8.alphacoders.com/133/1339176.png')` }} />
    <div className="container-div-0">
     <Text/>
    </div>
  </div>
  <div className="slick-slide">
    <div className="img-div-1" style={{ backgroundImage: `url('https://images8.alphacoders.com/133/1339176.png')` }}/>

    <div className="container-div-1" >
    <Text/>
    </div>

  
  </div>
</Slider>
 <Marquee/>
    </>
    )
}