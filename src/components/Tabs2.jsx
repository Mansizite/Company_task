import { useState } from "react";
import "./Tabs2.css";
import { FaRegFaceSmileWink } from "react-icons/fa6";

const Tabs = () => {
  const [show, setShow] = useState(false);

  const showBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="btn3" onClick={showBar}>
        About us
      </button>
      <div className={` main1 ${show ? "active-menu1" : ""}`}>
        <img
          src="https://www.fashioncluba.com/wp-content/uploads/2018/10/Face-Makeup-Kits.jpg"
          alt="img1"
          className="img1"
        />
        <h4>
          Beauty is all around us, in big things and small things. It’s in the
          bright sun, the twinkling stars, and the colorful rainbow. It’s in the
          smile of a friend, the laugh of a baby, or the wagging tail of a
          puppy. Beauty is not just about how things look, but also how they
          make us feel. It’s about being kind, helping others, and being happy.<FaRegFaceSmileWink />
        </h4>
      </div>
    </div>
  );
};

export default Tabs;
