import React, { useEffect, useState } from "react";

function FetchData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1122/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecords(data);
        console.log(data);
      })

      .catch((err) => console.log(err));
  }, []);
  console.log(records);
  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
