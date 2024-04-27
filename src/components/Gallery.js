// import React, { useState, useEffect } from 'react';

// const Gallery = () => {
//     const [imageData, setImageData] = useState([]);

//   useEffect(() => {
//     const fetchImageData = async () => {
//       try {
//         const response = await fetch('https://api.artic.edu/api/v1/artworks');
//         if (!response.ok) {
//           throw new Error('Failed to fetch image data');
//         }
//         const data = await response.json();
//         const randomizedData = data.sort(() => Math.random() - 0.5);
//         setImageData(randomizedData);
//       } catch (error) {
//         console.error('Error fetching image data:', error);
//       }
//     };

//     fetchImageData();
//   }, []);
// }

// //   return (
// //     <div className="gallery">
// //       {imageData.map((image) => (
// //         <Card key={image.id} image={image} />
// //       ))}
// //     </div>
//   );
// }; 

export default Gallery;