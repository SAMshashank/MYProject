import React from "react";
import "./IPhone1415ProMax1.css";
import Navbar from "./Navbar";

import jsonData from "./jsonData.json";
const IPhone1415ProMax1 = () => {
  return (
    <div className="iphone-14-15-pro-max-1">
      <Navbar
        svg={jsonData.tttIcon}
        story={jsonData.storiesText}
        dandi={jsonData.divContent}
        courses={jsonData.coursesText}
      />

      <img
        draggable="false"
        className="cover-pic-1-icon"
        alt=""
        src={jsonData.coverPic}
      />
      <img
        draggable="false"
        className="user-1-1-icon"
        alt=""
        src={jsonData.userIcon}
      />
      <div className="anuj-gosalia">{jsonData.userName}</div>
      <img
        draggable="false"
        className="iphone-14-15-pro-max-1-inner"
        alt=""
        src={jsonData.rectangleIcon}
      />
      <img
        draggable="false"
        className="rectangle-icon"
        alt=""
        src={jsonData.rectangleIcon}
      />
      <div className="div1">{jsonData.div1Text}</div>
      <div className="follower">{jsonData.followerText}</div>
      <div className="follower1">{jsonData.followerText1}</div>
      <div className="div2">{jsonData.div2Text}</div>
      <div className="former-developer-at">{jsonData.formerDeveloperText}</div>
      <div className="httpwwwinstagramcomanujg">{jsonData.instagramLink}</div>
      <div className="div3">{jsonData.starIcon}</div>
      <img
        draggable="false"
        className="like-1-icon"
        alt=""
        src={jsonData.likeIcon}
      />
      <img
        draggable="false"
        className="like-1-icon"
        alt=""
        src={jsonData.likeIcon}
      />
      <div className="div4">{jsonData.div4Text}</div>
      <div className="div5">{jsonData.thumbIcon}</div>
      <div className="div6">{jsonData.div6Text}</div>
      <div className="k">{jsonData.kText}</div>
      <div className="k1">{jsonData.k1Text}</div>
      <img
        draggable="false"
        className="iphone-14-15-pro-max-1-child1"
        alt=""
        src={jsonData.rectangle7Icon}
      />
      <div className="august-2-">{jsonData.august2Text}</div>
      <div className="musing-by-shashank-container">
        <span>{jsonData.musingText}</span>
        <span className="by-shashank">{` by ${jsonData.author}`}</span>
      </div>
      <div className="the-world-is-container">
        <p className="the-world-is">{jsonData.worldChangingText1}</p>
        <p className="the-world-is">{jsonData.worldChangingText2}</p>
        <p className="sadsadsadsasacascsadsadsadsads">
          {jsonData.sadsadsadsText}
        </p>
      </div>
      <div className="div7">{jsonData.thumbIcon}</div>
      <div className="a-changing-world">{jsonData.articleTitle}</div>
      <img
        draggable="false"
        className="iphone-14-15-pro-max-1-child2"
        alt=""
        src={jsonData.rectangle7Icon}
      />
      <div className="august-2-1">{jsonData.august2Text1}</div>
      <div className="musing-by-shashank-container1">
        <span>{jsonData.musingText1}</span>
        <span className="by-shashank">{` by ${jsonData.author}`}</span>
      </div>
      <div className="the-world-is-container1">
        <p className="the-world-is">{jsonData.worldChangingText11}</p>
        <p className="the-world-is">{jsonData.worldChangingText21}</p>
        <p className="sadsadsadsasacascsadsadsadsads">
          {jsonData.sadsadsadsText1}
        </p>
      </div>
      <div className="div8">{jsonData.thumbIcon}</div>
      <div className="a-changing-world1">{jsonData.articleTitle1}</div>
      <img
        draggable="false"
        className="iphone-14-15-pro-max-1-child3"
        alt=""
        src={jsonData.rectangle7Icon}
      />
      <div className="august-2-2">{jsonData.august2Text1}</div>
      <div className="musing-by-shashank-container2">
        <span>{jsonData.musingText1}</span>
        <span className="by-shashank">{` by ${jsonData.author}`}</span>
      </div>
      <div className="the-world-is-container2">
        <p className="the-world-is">{jsonData.worldChangingText2}</p>
        <p className="the-world-is">{jsonData.worldChangingText22}</p>
        <p className="sadsadsadsasacascsadsadsadsads">
          {jsonData.sadsadsadsText2}
        </p>
        <p className="sadsadsadsasacascsadsadsadsads">
          {jsonData.sadsadsadsText22}
        </p>
      </div>
      <div className="div9">{jsonData.thumbIcon}</div>
      <div className="a-changing-world2">{jsonData.articleTitle2}</div>
      <img
        draggable="false"
        className="vector-icon"
        alt=""
        src={jsonData.vectorIcon}
      />
      <div className="posts">{jsonData.postsText}</div>
      <div className="frame-div" />
      <img
        draggable="false"
        className="diamond-1-icon"
        alt=""
        src={jsonData.diamondIcon}
      />
      <img
        draggable="false"
        className="checked-1-icon"
        alt=""
        src={jsonData.checkedIcon}
      />
      <img
        draggable="false"
        className="view-1-icon"
        alt=""
        src={jsonData.viewIcon}
      />
      <img
        draggable="false"
        className="heart-1-icon"
        alt=""
        src={jsonData.heartIcon}
      />
    </div>
  );
};

export default IPhone1415ProMax1;
