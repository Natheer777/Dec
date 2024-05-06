// import "./SearchResultsList.css";
// import { SearchResult } from "./SearchResult";

// export const SearchResultsList = ({ results }) => {
//   return (
//     <div className="results-list">
//       {results.map((result, id) => (
//         <SearchResult
//           key={id}
//           name={result.name}
//           email={result.email}
//           password={result.password}
//         />
//       ))}
//     </div>
//   );
// };



// SearchResultsList.jsx

// SearchResultsList.jsx

import React from 'react';
import SearchResult from './SearchResult';
import './SearchResultsList.css';

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <SearchResult
          key={id}
          name={result.name}
          email={result.details}
          password={result.more}
        />
      ))}
    </div>
  );
};

export default SearchResultsList;
