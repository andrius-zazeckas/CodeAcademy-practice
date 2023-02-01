import React, { useState, useEffect } from "react";
import axios from "axios";

export const Search = () => {
  const [data, setData] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(res.data);
        setFiltered(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const results = filtered.filter((res) =>
      res.name.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);
  //console.log(data)

  const onChange = (e: any) => {
    setResult(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="serch here .."
        value={result}
        onChange={onChange}
      />
      {data.map((r, i) => (
        <ul key={i}>
          <li>{r.name}</li>
        </ul>
      ))}
    </div>
  );
};
