// import React from 'react';
// function Category(props) {
//     return (
//         <div>
//             <div className="genre">
//                 <h3>
//                     Drama
//                 </h3>
//                 <h3>
//                     Thriller
//                 </h3>
//                 <h3>
//                     Supernatural
//                 </h3>
//         </div>
//         </div>
//     );
// }
// export default Category;

import React from "react";

function Category(props) {
  const genres = ["Drama", "Thriller", "Supernatural"];

  return (
    <div className="genre">
      {genres.map((genre, index) => (
        <h3 key={index}>{genre}</h3>
      ))}
    </div>
  );
}

export default Category;

