import React, { createElement, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ellipse1 from "./assets/ellipse1.png";
import image5 from "./assets/Template1img.png";
import image6 from "./assets/Image6a.png";
import sidebar from "./assets/Sidebar.png"
import Draggable from "react-draggable";
import TextEditable from "./TextEditable";
import TextIcon from "./assets/TextIcon.png"
import ChangeTemplateIcon from "./assets/ChangeTemplateIcon.png"
import {useNavigate} from 'react-router-dom';


// image5 = readFil
// const reader = new FileReader()
// reader.addEventListener("load", ()=>{
//   image5 = reader.result
// })
// reader.readAsDataURL(image5)

function Resume(props){
  return(
      <div>
        <img
          className="w-[626px] h-[877px] absolute top-[120px] left-[457px] rounded-3xl object-none"
          // onClick={pushText}
          style={{
            boxShadow:
            "301px 537px 172px 0 rgba(0,50,70,0.01), 193px 343px 158px 0 rgba(0,50,70,0.07), 109px 193px 133px 0 rgba(0,50,70,0.23), 48px 86px 98px 0 rgba(0,50,70,0.4), 12px 21px 54px 0 rgba(0,50,70,0.46), 0px 0px 0px 0 rgba(0,50,70,0.47)",
          }}
          src={props.CI}
          // alt={image6}
          />
          {/* {children} */}
      </div>
  )

}


const CreatePage = (props) => {

  let [selected, setSelected] = useState({
    textcon: "Select some text",
    key: 0,
    tfs: "Select some text",
    st: null,
    stfs: null,
    col: "",
    setcol: null
  });
  let [children, setChildren] = useState([<TextEditable key={0} sS={setSelected}/>]);
  let [currImage, setCurrImage] = useState(image5);


  let pushText = ()=>{
    let x = [...children]
    x.push(<TextEditable key={x.length+1} sS={setSelected}/>)
    setChildren(x)
  }

  const navigate = useNavigate();
  const gotoHomePage = () => {navigate("/home")}


  return (
    <div className="box-border block w-[1920px] h-[1080px] relative overflow-hidden bg-[#dff6ff]">
      
      {/* <img src={sidebar}></img> */}
      <Sidebar />

      <img
      className="absolute top-[486px] left-[33px]"
      src={TextIcon}
      onClick={pushText}
      style={{cursor: "pointer"}}
      ></img>

      <img
      className="absolute top-[630px] left-[33px]"
      src={ChangeTemplateIcon}
      style={{cursor: "pointer"}}
      onClick={()=>{

        fetch('http://localhost:8081/get-img')
        .then((res)=>{
            // let i = createElement('img', {src: 'data:image/png;base64,' + btoa(res.toString())})
            
            setCurrImage(<img src={`data:image/jpeg;base64,${res.toString()}`} />)
        })
      }}
      ></img>

      <Resume CI={currImage}/>

      <img className="absolute top-[84px] left-[45px]" src={ellipse1}
      onClick={gotoHomePage}
      style={{cursor: "pointer"}}
      />
      <div className="w-[561px] h-[1114px] absolute top-[-17px] left-[1364px] bg-[#47b5ff]/50" >
      </div>
        {children}
      {/* <div className="w-[1972px] h-[59px] absolute top-[-24px] left-0 bg-[#06283d]" /> */}
      <div className="w-[459px] h-[103px]" >
        <div className="w-[459px] h-[103px] absolute top-[92px] left-[1415px] rounded-[79px] bg-[#dff6ff]" />
        <p className="whitespace-pre-wrap absolute top-[120px] left-[1512px] w-[265px] h-[47px] font-['Montserrat'] text-[40px] leading-[normal] tracking-[0.12em] font-semibold text-left text-[#06283d]"
          
        >
          Properties
        </p>
      </div>
      

      <div className="w-[430px] px-10 h-[47px] absolute top-[291px] left-[1410px] rounded-[50px] bg-[#fff4f4]/[0.47] flex">
        <p className="w-min text-[30px]">Text:</p>
        <input type="text" value={selected.textcon} multiple
        className="w-full ml-[30px] rounded-[50px] px-[10px]"
        onChange={(e)=>{
          selected.st(e.target.value)
        }}
        ></input>
      </div>

      <div className="w-[430px] px-10 h-[47px] absolute top-[391px] left-[1410px] rounded-[50px] bg-[#fff4f4]/[0.47] flex">
        <p className="w-min text-[30px]">Fontsize:</p>
        <input type="number" value={selected.tfs}
        className="w-full ml-[30px] rounded-[50px] px-[10px]"
        onChange={(e)=>{
          selected.stfs(e.target.value)
        }}
        ></input>
      </div>

      <div className="w-[430px] px-10 h-[47px] absolute top-[491px] left-[1410px] rounded-[50px] bg-[#fff4f4]/[0.47] flex">
        <p className="w-min text-[30px]">Color:</p>
        <input type="color" 
        className="w-full ml-[30px] mt-[10px]"
        onChange={(e)=>{
          selected.setcol(e.target.value)
          // console.log(selected.col)
        }}
        ></input>
      </div>
    </div>
  );
};

export default CreatePage;