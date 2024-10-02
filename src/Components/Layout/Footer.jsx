import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="w-full h-0 bg-footer flex justify-between items-center  py-8">
      <div className="  w-full flex  justify-center items-center">
        <p className=" text-sm text-white font-[Founder]   ml-10">
          {" "}
          &copy; {new Date().getFullYear()} Issue Tracker. All Rights Reserved.
        </p>
      </div>

      <Link to="https://linktr.ee/GsocIssueTracker" className="  mx-10 ">
        <svg
        width={25}
        height={25}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 417 512.238"
        >
          <path
            fill="black"
            fillRule="nonzero"
            d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Footer;
