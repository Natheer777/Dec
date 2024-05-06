// import "./SearchResult.css";

// export const SearchResult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };



// SearchResult.jsx

// SearchResult.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import './SearchResult.css';

const SearchResult = ({ name, email, password }) => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div className="search-result">
      <table className="result-table">
        <tbody>
          <tr>
            <th>{t('name')}</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>{t('email')}</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>{t('password')}</th>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
