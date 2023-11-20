// Home.js
import React, { useReducer, useEffect, useContext } from "react";
import { Context } from '../../Context/Context';

const initialState = {
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, users: action.setUsers };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const { theme, setTheme } = useContext(Context);
  const { textColor, setTextColor } = useContext(Context)

  const requestEmployee = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (res.ok && res.status === 200) {
        const data = await res.json();
        dispatch({ type: 'setUser', setUsers: data });
      } else {
        alert("An error occurred while fetching data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    requestEmployee();
  }, []);

  return (
    <div className={`bg-${theme} text-${textColor}`} style={{ width: "100%", height: "94vh" }}>
      {users.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
};

export default Home;


  // const Api = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) =>
  //     res.json()
  //   )
  //   .then(user => setUser(user))


  // }



  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) =>
  //     res.json()
  //   )
  //   .then(user => setUser(user))
  //   .catch(err => console.log(err))

  //   ;
  // }, []);

