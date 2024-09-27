import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [show, setShow] = useState(false);

  const showBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="btn" onClick={showBar}>
        Our Clients
      </button>
      <div className={` main ${show ? "active-menu" : ""}`}>
      <div style={{display:'flex',
            flexDirection:'column'
        }}>
        <img
          src="https://media.ulta.com/i/ulta/About_ulta_the_salon_3up?w=800&fmt=auto"
          alt="img1"
          className="img2"
        />
       
        <p>
          Our licensed beauty professionals are committed to bringing your
          vision to life. Hair, skin, makeup, brows, ear piercing—all here.
          Watch now for a preview of our service line up.
        </p>
        </div>
        <div style={{display:'flex',
            flexDirection:'column'
        }}>
        <img
          src="https://i.ytimg.com/vi/fW4FwvaXmP4/maxresdefault.jpg"
          alt="img1"
          className="img2"
        />
       
        <p>
          Our licensed beauty professionals are committed to bringing your
          vision to life. Hair, skin, makeup, brows, ear piercing—all here.
          Watch now for a preview of our service line up.
        </p>
        </div>
        <div style={{display:'flex',
            flexDirection:'column'
        }}>
        <img
          src="https://c.stocksy.com/a/NHt000/z9/212497.jpg"
          alt="img1"
          className="img2"
        />
       
        <p>
          Our licensed beauty professionals are committed to bringing your
          vision to life. Hair, skin, makeup, brows, ear piercing—all here.
          Watch now for a preview of our service line up.
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default Tabs;
