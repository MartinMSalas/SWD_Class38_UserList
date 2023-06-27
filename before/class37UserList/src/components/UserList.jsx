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
      <ul>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              
                <User key={item.id} name={item.name}></User>
              
            );
          })
        ) : (
          <h1>
            LOADING LOADING LOADING LOADING LOADING LOADING LOADING LOADING
            LOADING LOADING LOADING LOADING LOADING LOADING{" "}
          </h1>
        )}
      </ul>
    </>
  );
}

export default UserList;
