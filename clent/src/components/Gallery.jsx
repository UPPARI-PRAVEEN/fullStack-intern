import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import security from '../assets/security.png'; // Lock icon with hand
import bubble from '../assets/bobble.png'; // Abstract bubble/blur shape 1
import bubble2 from '../assets/bubble2.png'; // Abstract bubble/blur shape 2
import jan from '../assets/jan.png'; // Hourglass
import pic from '../assets/pic1.png'; // Small user profile picture
import girl from '../assets/girl.png'; // Single woman in red blazer
import logo from '../assets/logo.png'; // WASS logo
import family from '../assets/family.png'; // Group of diverse people (family)
import trophy from '../assets/trophy.png'; // Golden trophy
import phone from '../assets/phone.png'; // Hand holding phone
import image from '../assets/image.png'; // Hand holding phone

// const Gallery = () => {
//   return (
//     // Outer container with reduced padding to make grid tighter, similar to expected output
//     <div className="container py-3">
//       {/* Bootstrap row with tighter gap for spacing between cards */}
//       <div className="row g-2"> {/* Changed g-3 to g-2 for tighter spacing */}

//         {/* Top Left - Security & Data is key */}
//         <div className="col-12 col-md-4">
//           <div className="rounded p-4 text-center d-flex flex-column align-items-center justify-content-center overflow-hidden"
//                style={{ backgroundColor: '#202020', minHeight: '280px', border: '1px solid #4a4a4a', position: 'relative' }}>
//             {/* The lock image often has a glowing effect, if not part of image, it could be a shadow or filter */}
//             <p className="text-white mb-3 fs-5 fw-semibold" style={{ letterSpacing: '0.5px' }}>Security & Data is key</p>
//             <img src={security} alt="Security Lock" className="img-fluid" style={{ maxWidth: '160px', filter: 'drop-shadow(0 0 10px #a020f0)' }} />
//           </div>
//         </div>

//         {/* Top Middle - Gradient with Bubbles */}
//         <div className="col-12 col-md-4">
//           <div className="rounded position-relative overflow-hidden d-flex align-items-center justify-content-center"
//                style={{ background: 'linear-gradient(135deg, #FFB6C1, #87CEEB)', minHeight: '280px' }}> {/* More vibrant light pink to light blue gradient */}
//             {/* Adjust bubble positioning and filters for a blurred, abstract look */}
//             <img src={bubble} alt="Bubble" className="position-absolute opacity-75" style={{ top: '-20%', left: '-20%', width: '80%', filter: 'blur(30px)' }} />
//             <img src={bubble2} alt="Bubble2" className="position-absolute opacity-75" style={{ bottom: '-20%', right: '-20%', width: '80%', filter: 'blur(30px)' }} />
//           </div>
//         </div>

//         {/* Top Right - Fast & Safe */}
//         <div className="col-12 col-md-4">
//           <div className="rounded p-4 text-center d-flex flex-column align-items-center justify-content-center text-white"
//                style={{ background: 'linear-gradient(135deg, #9b5de5, #f15bb5)', minHeight: '280px' }}>
//             <h5 className="mb-2 fw-bold fs-4">Fast & Safe</h5> {/* Increased font size */}
//             <p className="small mb-3" style={{ lineHeight: '1.4', fontSize: '0.875rem' }}> {/* Adjusted font size */}
//               Stand out of the crowd with safe & smart team easy to understand & reliable solutions
//             </p>
//             <img src={jan} alt="Hourglass" className="img-fluid" style={{ maxWidth: '120px' }} /> {/* Adjusted max width */}
//           </div>
//         </div>

//         {/* Middle Left - Trusted */}
//         <div className="col-12 col-md-4">
//           <div className="rounded p-4 text-center text-white d-flex flex-column align-items-center justify-content-center"
//                style={{ background: 'linear-gradient(135deg, #9b5de5, #f15bb5)', minHeight: '280px' }}>
//             <div className="d-flex align-items-center justify-content-center mb-3">
//                 {/* Assuming five stars are separate elements as in the previous code */}
//                 <span className="text-warning me-2 fs-5">★★★★★</span> {/* Added spacing and adjusted font size */}
//                 <p className="fs-4 fw-semibold mb-0">Trusted</p> {/* Increased font size */}
//             </div>
//             <small className="mb-3 text-center" style={{ lineHeight: '1.3', fontSize: '0.8rem' }}>by top Business Houses & Brands, +200 Client</small>
//             <div className="d-flex justify-content-center gap-2 mt-2">
//               {[...Array(5)].map((_, i) => (
//                 <img key={i} src={pic} className="rounded-circle border border-white" width="45" height="45" alt={`user${i}`} style={{ objectFit: 'cover' }} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Middle Middle - Logo + Person */}
//         <div className="col-12 col-md-4">
//           <div className="rounded bg-white p-3 position-relative overflow-hidden"
//                style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
//             <img src={logo} alt="WASS Logo" className="img-fluid mb-2" style={{ maxWidth: '180px', marginLeft: '1rem', marginTop: '1rem' }} /> {/* Adjusted max width and position */}
//             {/* The 'girl' image as per expected output is a single woman, partially cropped on the right */}
//             <img src={girl} alt="Woman" className="position-absolute"
//                  style={{ height: '100%', bottom: 0, right: '-15%', objectFit: 'cover' }} /> {/* Adjusted height and right position */}
//           </div>
//         </div>

//         {/* Middle Right - Team (Family) - This section was MISSING in current_output.png */}
//         <div className="col-12 col-md-4">
//           <div className="rounded p-3 bg-white d-flex align-items-center justify-content-center"
//                style={{ minHeight: '280px', overflow: 'hidden' }}>
//             <img src={family} alt="Team" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
//           </div>
//         </div>

//         {/* Bottom Left - Connecting Ideas, Empowering Innovation */}
//         <div className="col-12 col-md-6">
//           <div className="rounded p-5 text-center text-dark d-flex align-items-center justify-content-center"
//                style={{ background: 'linear-gradient(135deg, #f6d365, #fda085)', minHeight: '250px' }}>
//             <h5 className="fw-bold mb-0 fs-3">Connecting Ideas,<br />Empowering Innovation</h5> {/* Increased font size and line break */}
//           </div>
//         </div>

//         {/* Bottom Middle - Trophy - This section was MISSING in current_output.png */}
//         <div className="col-12 col-md-3">
//           <div className="rounded p-3 bg-white d-flex align-items-center justify-content-center"
//                style={{ minHeight: '250px' }}>
//             <img src={trophy} alt="Trophy" className="img-fluid" style={{ maxWidth: '180px' }} /> {/* Adjusted max width */}
//           </div>
//         </div>

//         {/* Bottom Right - Complexity with Simple Solutions (Phone) */}
//         <div className="col-12 col-md-3">
//           <div className="rounded p-3 text-white text-center d-flex flex-column align-items-start justify-content-end"
//                style={{ backgroundColor: '#202020', minHeight: '250px', position: 'relative', overflow: 'hidden' }}>
//             <div className="position-absolute top-0 start-0 w-100 p-3 pb-0">
//                 <h6 className="mb-0 text-start" style={{fontSize: '0.9rem'}}>Complexity with</h6>
//                 <strong className="text-start d-block" style={{fontSize: '1.25rem'}}>Simple Solutions</strong> {/* Adjusted font size */}
//             </div>
//             {/* Phone image is often cropped at the bottom, using translateY for that */}
//             <img src={phone} alt="Phone" className="img-fluid mt-auto" style={{ maxWidth: '100%', transform: 'translateY(15%)' }} /> {/* Adjusted transform for cropping */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;




// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import combinedImage from "../assets/finalCombinedImage.png"; // replace with actual image name

const Gallery = () => {
  return (
<div style={{ backgroundColor: "#0A0A1A", minHeight: "100vh" }} className="d-flex justify-content-center align-items-center">
     
      <img
        src={image}
        alt="WASS Layout"
        className="img-fluid rounded shadow"
        style={{ width: "85%", height: "600px" }}
      />
    </div>
  );
};

// export default Gallery;

export default Gallery