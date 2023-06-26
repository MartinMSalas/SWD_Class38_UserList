import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

function UserList() {
  const [data, setData] = useState({});

  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => {
          return <div key={item.id}><User name={item.name}></User></div>;
        })
      ) : (
        <h1>LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING </h1>
        
      )}
    </>
  );
}

export default UserList;
