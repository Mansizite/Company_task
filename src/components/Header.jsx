// // import React, { useState } from "react";
// // import "./Header.css";
// // import { FaGoogle } from "react-icons/fa";
// // import { FaFacebook } from "react-icons/fa";
// // import { FaGithub } from "react-icons/fa";
// // import { FaLinkedin } from "react-icons/fa6";

// // const Header = () => {
// //   const images = [
// //     "https://wallpapercave.com/wp/wp2004296.jpg",
// //     "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2016/07/26174837/1200x672-lf-wk30-cg-Group-shot-v2.jpg",
// //     "https://wallpaperaccess.com/full/2537135.jpg",
// //   ];
// //   const [showForm, setShowForm] = useState(false);
// //   const [showMap, setShowMap] = useState(false);

// //   const form = () => {
// //     setShowForm(!showForm);
// //   };
// //   const toggleMap = () => {
// //     setShowMap(!showMap);
// //   };

// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const nextImage = () => {
// //     setCurrentIndex((id) => (id + 1) % images.length);
// //   };

// //   const prevImage = () => {
// //     setCurrentIndex((id) => (id - 1 + images.length) % images.length);
// //   };

// //   return (
// //     <div className="carousel-container">
// //       <h1 className="carousel-icon1" onClick={form}>
// //         &#9776;
// //       </h1>
// //       <div className={`mystyle ${showForm ? "show-active-form" : ""}`}>
// //         <input
// //           type="text"
// //           placeholder="Enter Your Name"
// //           className="input-field"
// //         />
// //         <input
// //           type="password"
// //           placeholder="Enter Your password"
// //           className="input-field"
// //         />
// //         <div
// //           style={{
// //             display: "flex",
// //             flexDirection: "row",
// //             justifyContent: "space-evenly",
// //           }}
// //         >
// //           <FaGoogle /> <FaFacebook /> <FaGithub /> <FaLinkedin />
// //         </div>
// //         <h4>Sign in / Sign Up</h4>
// //       </div>

// //       <button className="carousel-button1" onClick={prevImage}>
// //         Prev
// //       </button>
// //       <img
// //         className="carousel-image"
// //         src={images[currentIndex]}
// //         alt="carousel"
// //       />
// //       <button className="carousel-button2" onClick={nextImage}>
// //         Next
// //       </button>
// //       <h1 className="carousel-icon2" onClick={toggleMap}>
// //         &#9776;
// //         {showMap ? (
// //           <iframe
// //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30253.979755472916!2d73.66620135409788!3d18.585420381301457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb12c2bca185%3A0xb3879fc3627adcf4!2sPhase%203%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1727447260030!5m2!1sen!2sin"
// //             width="600"
// //             height="450"
// //             style="border:0;"
// //             allowfullscreen=""
// //             loading="lazy"
// //             referrerpolicy="no-referrer-when-downgrade"
// //           ></iframe>
// //         ) : (
// //           ''
// //         )}
// //       </h1>
// //     </div>
// //   );
// // };

// // export default Header;

// import React, { useState } from "react";
// import "./Header.css";
// import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

// const Header = () => {
//   const images = [
//     "https://wallpapercave.com/wp/wp2004296.jpg",
//     "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2016/07/26174837/1200x672-lf-wk30-cg-Group-shot-v2.jpg",
//     "https://wallpaperaccess.com/full/2537135.jpg",
//   ];

//   const [showForm, setShowForm] = useState(false);
//   const [showMap, setShowMap] = useState(false);

//   const form = () => setShowForm(!showForm);
//   const toggleMap = () => setShowMap(!showMap);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const nextImage = () => setCurrentIndex((id) => (id + 1) % images.length);
//   const prevImage = () => setCurrentIndex((id) => (id - 1 + images.length) % images.length);

//   return (
//     <div className="carousel-container">
//       <h1 className="carousel-icon1" onClick={form}>
//         &#9776;
//       </h1>
//       {/* Form Section */}
//       <div className={`mystyle ${showForm ? "show-active-form" : ""}`}>
//         <input type="text" placeholder="Enter Your Name" className="input-field" />
//         <input type="password" placeholder="Enter Your password" className="input-field" />
//         <div className="social-icons">
//           <FaGoogle /> <FaFacebook /> <FaGithub /> <FaLinkedin />
//         </div>
//         <h4>Sign in / Sign Up</h4>
//       </div>

//       {/* Image Carousel */}
//       <button className="carousel-button1" onClick={prevImage}>
//         Prev
//       </button>
//       <img className="carousel-image" src={images[currentIndex]} alt="carousel" />
//       <button className="carousel-button2" onClick={nextImage}>
//         Next
//       </button>

//       {/* Map Section */}
//       <h1 className="carousel-icon2" onClick={toggleMap}>
//         &#9776;
//       </h1>
//       <div className={`map-style ${showMap ? "show-active-map" : ""}`}>
//       {showMap && (
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30253.979755472916!2d73.66620135409788!3d18.585420381301457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb12c2bca185%3A0xb3879fc3627adcf4!2sPhase%203%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1727447260030!5m2!1sen!2sin"
//             width="600"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Google Maps"
//           ></iframe>
//       )}
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./Header.css";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const images = [
    "https://wallpapercave.com/wp/wp2004296.jpg",
    "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2016/07/26174837/1200x672-lf-wk30-cg-Group-shot-v2.jpg",
    "https://wallpaperaccess.com/full/2537135.jpg",
  ];

  const [showForm, setShowForm] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const form = () => setShowForm(!showForm);
  const toggleMap = () => setShowMap(!showMap);

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((id) => (id + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((id) => (id - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <h1 className="carousel-icon1" onClick={form}>
        &#9776;
      </h1>
      {/* Form Section */}
      <div className={`mystyle ${showForm ? "show-active-form" : ""}`}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter Your password"
          className="input-field"
        />
        <div className="social-icons">
          <FaGoogle /> <FaFacebook /> <FaGithub /> <FaLinkedin />
        </div>
        <h4>Sign in / Sign Up</h4>
      </div>

      {/* Image Carousel */}
      <button className="carousel-button1" onClick={prevImage}>
        Prev
      </button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt="carousel"
      />
      <button className="carousel-button2" onClick={nextImage}>
        Next
      </button>

      {/* Map Section */}
      <h1 className="carousel-icon2" onClick={toggleMap}>
        &#9776;
      </h1>
      <div className={`map-style ${showMap ? "show-active-map" : ""}`}>
        {showMap && (
          // <iframe
          //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30253.979755472916!2d73.66620135409788!3d18.585420381301457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb12c2bca185%3A0xb3879fc3627adcf4!2sPhase%203%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1727447260030!5m2!1sen!2sin"
          //   width="600"
          //   height="450"
          //   style={{ border: 0 }}
          //   allowFullScreen=""
          //   loading="lazy"
          //   referrerPolicy="no-referrer-when-downgrade"
          //   title="Google Maps"
          // ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.989778422492!2d73.68680099999999!3d18.5854215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb12c2bca185%3A0xb3879fc3627adcf4!2sPhase%203%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1727448849530!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Header;
