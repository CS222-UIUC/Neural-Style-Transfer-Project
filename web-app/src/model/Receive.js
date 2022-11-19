import React, { useState, useEffect } from "react";
import "./Receive.css";
const Receive = ({ route }) => {
  const [data, setData] = useState(null);

  async function fetchData(route) {
    const res = await fetch(`/${route}`);
    const data = await res.json();
    setData(data.message);
  }

  useEffect(() => {
    fetchData(route);
  }, [route]);

  return <p data-testid="apiReceive">{!data ? "Loading..." : data}</p>;
};

export default Receive;
