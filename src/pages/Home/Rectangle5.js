import React from "react";

const Rectangle5 = () => {
  return (
    <svg
      className="absolute top-[4545px] left-[676px]"
      width={580}
      height={252}
      viewBox="0 0 580 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_48_89)">
        <path
          d="M20 72C20 43.2812 43.2812 20 72 20H476C504.719 20 528 43.2812 528 72V148C528 176.719 504.719 200 476 200H72C43.2812 200 20 176.719 20 148V72Z"
          fill="#47B5FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_48_89"
          x={0}
          y={0}
          width={580}
          height={252}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={16} dy={16} />
          <feGaussianBlur stdDeviation={18} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.278431 0 0 0 0 0.709804 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_48_89" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_48_89" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Rectangle5;

// import React from "react";

// const Rectangle5 = (props) => {
//   return (
//     <div
//       className="box-border block w-[602px] h-[199px] relative"
//       style={{
//         filter:
//           "drop-shadow(400px 300px 140px rgba(0,50,70,0)) drop-shadow(256px 192px 128px rgba(0,50,70,0)) drop-shadow(144px 108px 108px rgba(0,50,70,0)) drop-shadow(64px 48px 80px rgba(0,50,70,0)) drop-shadow(16px 12px 44px rgba(0,50,70,0)) drop-shadow(0px 0px 0px rgba(0,50,70,0))",
//       }}
//     >
//       <div
//         className="w-[602px] h-[199px] absolute top-0 left-0 rounded-[70px] bg-[#47b5ff]"
//         style={{
//           boxShadow:
//             "394px 352px 148px 0 rgba(0,50,70,0), 252px 225px 135px 0 rgba(0,50,70,0.01), 142px 127px 114px 0 rgba(0,50,70,0.05), 63px 56px 85px 0 rgba(0,50,70,0.09), 16px 14px 46px 0 rgba(0,50,70,0.1), 0px 0px 0px 0 rgba(0,50,70,0.1)",
//         }}
//       />
//     </div>
//   );
// };

// export default Rectangle5;
