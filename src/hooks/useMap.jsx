// import { useState, useEffect } from "react";
// import axios from "axios";

// export const useMap = () => {
//   const [position, setPosition] = useState({
//     lat: -6.777559,
//     lng: 108.395361
//   });
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords }) => {
//         setPosition({ lat: coords.latitude, lng: coords.longitude });
//       },
//       (blocked) => {
//         if (blocked) {
//           const fetch = async () => {
//             try {
//               const { data } = await axios.get("https://ipapi.co/json");
//               setPosition({ lat: data.latitude, lng: data.longitude });
//             } catch (err) {
//               console.error(err);
//             }
//           };
//           fetch();
//         }
//       }
//     );
//   }, []);
//   return { position };
// };



import { useState } from "react";

// ✅ Use ONLY your business coordinates (static)
export const useMap = () => {
  const [position] = useState({
    lat: -6.777559,   // ← your business latitude
    lng: 108.395361   // ← your business longitude
  });

  return { position };
};