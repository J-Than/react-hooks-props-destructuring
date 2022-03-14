import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      <MovieCard title={title} posterSrc={posterURL} genres={genresArr} />
    </div>
  );
}

// function App() {
//   const socialLinks = {
//     github: "https://github.com/liza",
//     linkedin: "https://www.linkedin.com/in/liza/",
//   };

//   return (
//     <div>
//       <SocialMedia socialLinks={socialLinks} />
//     </div>
//   );
// }

// function SocialMedia({ socialLinks : {github, linkedin} }) {
//   return (
//     <div>
//       <a href={github}>{github}</a>
//       <a href={linkedin}>{linkedin}</a>
//     </div>
//   );
// }

export default App;
