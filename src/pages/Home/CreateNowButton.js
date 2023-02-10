import React from "react";
import {useNavigate} from "react-router-dom";

const CreateNowButton = (props) => {

  const navigate = useNavigate();
  const gotoCreatePage = () => {navigate("/create")}

  return (
    <div
      className="box-border block w-[602px] h-[199px] absolute top-[4545px] left-[650px]"
      onClick={gotoCreatePage}
      style={{
        cursor: 'pointer',
        filter:
          "drop-shadow(400px 300px 140px rgba(0,50,70,0)) drop-shadow(256px 192px 128px rgba(0,50,70,0)) drop-shadow(144px 108px 108px rgba(0,50,70,0)) drop-shadow(64px 48px 80px rgba(0,50,70,0)) drop-shadow(16px 12px 44px rgba(0,50,70,0)) drop-shadow(0px 0px 0px rgba(0,50,70,0))",
      }}
    >
      <div
        className="w-[602px] h-[199px] relative top-0 left-0 rounded-[70px] bg-[#47b5ff]"
        style={{
          boxShadow:
            "394px 352px 148px 0 rgba(0,50,70,0), 252px 225px 135px 0 rgba(0,50,70,0.01), 142px 127px 114px 0 rgba(0,50,70,0.05), 63px 56px 85px 0 rgba(0,50,70,0.09), 16px 14px 46px 0 rgba(0,50,70,0.1), 0px 0px 0px 0 rgba(0,50,70,0.1)",
        }}
      >
		<p className="whitespace-pre-wrap top-[65px] left-[120px] relative w-[378px] h-[79px] font-['Montserrat'] text-5xl leading-[normal] tracking-[0.13em] font-medium text-left text-white align-baseline">
			Create Now!
		</p>
	  </div>
    </div>
  );
};

export default CreateNowButton;