import React from "react";
import NavBarRect from "./NavBarRect";
import Vector1 from "./Vector1";
import mainIcon from "./assets/mainIcon.png";
import footerIcon from "./assets/footerIcon.png";
import Rectangle5 from "./Rectangle5";
import CreateNowButton from "./CreateNowButton";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img4 from "./assets/img4.png";
import img3 from "./assets/img3.png";
import Fade from "react-reveal/Fade";
import Reveal from 'react-reveal/Reveal';
import {useNavigate} from 'react-router-dom';

const HomePage = (props) => {
  const navigate = useNavigate();
  const gotoCreatePage = () => {navigate("/create")}
  const gotoHomePage = () => {navigate("/home")}


  return (
    <div className="box-border block w-[1920px] h-[5408px] absolute overflow-clip bg-[#dff6ff] top-0 left-0">
      

      <Vector1 />
      <Fade top>
        <NavBarRect />
        <p className="whitespace-pre-wrap absolute top-[416px] left-[253px] w-[593px] h-52 font-['Montserrat'] text-9xl leading-[normal] tracking-[0.08em] text-left text-[#06283d]">
          ResuME
        </p>
        <p className="whitespace-pre-wrap absolute top-[624px] left-[273px] w-[468px] h-[87px] font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.08em] text-left text-[#06283d]/75">
          All in one solution for your resumes.
        </p>

      </Fade>

      <Fade left>
        
      </Fade>

      <Fade right>
        <img
          className="w-[702px] h-[467px] absolute top-[332px] left-[1070px] rounded-[37px] object-cover"
          style={{
            boxShadow: "16px 16px 36px 0 rgba(71,181,255,0.5)",
          }}
          src={img1}
        />

        <p className="whitespace-pre-wrap absolute top-[2477px] left-[1087px] w-[776px] h-52 font-['Montserrat'] text-9xl leading-[normal] tracking-[0.08em] text-left text-[#06283d]">
          Templates
        </p>

        <p className="whitespace-pre-wrap absolute top-[2685px] left-[1120px] w-[743px] h-[159px] font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.08em] text-left text-[#06283d]/75">
          To streamline your process as much as possible!
        </p>

      </Fade>

      
      <Fade left>
        <p className="whitespace-pre-wrap absolute top-[1395px] left-56 w-[593px] h-52 font-['Montserrat'] text-9xl leading-[normal] tracking-[0.08em] text-left text-[#06283d]">
          Design
        </p>

        <p className="whitespace-pre-wrap absolute top-[1603px] left-60 w-[674px] h-[159px] font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.08em] text-left text-[#06283d]/75">
          Awesome resumes with a few simple taps!
        </p>

        <img
          className="w-[742px] h-[742px] absolute top-[2292px] left-[148px] rounded-[42px] object-none"
          style={{
            boxShadow: "16px 16px 36px 0 rgba(71,181,255,0.5)",
          }}
          src={img3}
        />

        <p className="whitespace-pre-wrap absolute top-[3622px] left-[148px] w-[776px] h-52 font-['Montserrat'] text-9xl leading-[normal] tracking-[0.08em] text-left text-[#06283d]">
          Download
        </p>
        <p className="whitespace-pre-wrap absolute top-[3831px] left-[147px] w-[849px] h-[159px] font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.08em] text-left text-[#06283d]/75">
          Your resume in PDF, image or format of your choice!
        </p>

      </Fade>

      {/* <Rectangle5></Rectangle5> */}
      
      <CreateNowButton></CreateNowButton>
      
      
      <div className="w-[1049px] h-[82px]">
        <p className="whitespace-pre-wrap absolute top-[81px] left-[460px] w-[177px] h-20 font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.08em] text-left text-white"
        onClick={gotoHomePage}
        style={{cursor: "pointer"}}
        >
          Home
        </p>
        <p className="whitespace-pre-wrap absolute top-[82px] left-[896px] w-[177px] h-20 font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.08em] text-left text-white"
          onClick={gotoCreatePage}
          style={{cursor: "pointer"}}
        >
          Build
        </p>
        <p className="whitespace-pre-wrap absolute top-[83px] left-[1332px] w-[177px] h-20 font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.08em] text-left text-white">
          About
        </p>
      </div>
      
      <Fade right>
        <img
          className="w-[742px] h-[742px] absolute top-[1232px] left-[1030px] rounded-[42px] object-cover"
          style={{
            boxShadow: "16px 16px 36px 0 rgba(71,181,255,0.5)",
          }}
          src={img2}
        />
        <img
          className="w-[742px] h-[742px] absolute top-[3435px] left-[1030px] rounded-[42px] object-none"
          style={{
            boxShadow: "16px 16px 36px 0 rgba(71,181,255,0.5)",
          }}
          src={img4}
        />
      </Fade>
      
      
      <div className="w-[1920px] h-[394px] absolute top-[5014px] left-0 bg-[#06283d]" />
      <div className="w-[204px] h-[47px] absolute top-[5185px] left-[41px] rounded-[49px] bg-[#d9d9d9]/25" />
      <div className="w-[381px] h-[47px] absolute top-[5256px] left-[41px] rounded-[49px] bg-[#d9d9d9]/25" />
      <div className="w-[381px] h-[47px] absolute top-[5331px] left-[1475px] rounded-[49px] bg-[#d9d9d9]/25" />
      <div className="w-[195px] h-[47px] absolute top-[5264px] left-[1661px] rounded-[49px] bg-[#d9d9d9]/25" />
      <img className="absolute top-[39px] left-[79px]" src={mainIcon} />
      <img className="absolute top-[5050px] left-[41px]" src={footerIcon} />
    </div>
  );
};

export default HomePage;