import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://a-lokl.onrender.com/https://testdata-1.onrender.com/allusers")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          const searchValue = value.toLowerCase().trim(); // تحويل القيمة المدخلة إلى صيغة مناسبة للبحث
          const userName = user.name.toLowerCase(); // تحويل اسم المستخدم إلى صيغة مناسبة للمقارنة
          const userEmail = user.details.toLowerCase(); // تحويل بريد المستخدم إلى صيغة مناسبة للمقارنة
          const userPassword = user.more.toLowerCase(); // تحويل كلمة المرور إلى صيغة مناسبة للمقارنة
  
          // البحث عن النتائج التي تحتوي على القيمة المدخلة في أي من الحقول
          return (
            userName.includes(searchValue) ||
            userEmail.includes(searchValue) ||
            userPassword.includes(searchValue)
          );
        });
        setResults(results);
      })
      .catch((error) => {
        console.error("خطأ في جلب البيانات:", error);
        setResults([]); // في حال حدوث خطأ، ضبط نتائج البحث على فارغة
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
