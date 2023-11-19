// Home.js
import React from "react";
import { useContext } from "react";
import { Context } from '../../Context/Context';


const Home = () => {
  const [users, setUser] = React.useState([])
  const { theme, setTheme } = useContext(Context)
  const { textColor, setTextColor } = useContext(Context)

  const requestEmpolyee = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (res.ok && res.status === 200) {
      const data = await res.json()
      setUser(data)
    } else {
      alert("An error occurred while fetching data.")
    }
  }

  React.useEffect(() => {
    requestEmpolyee()
  }, [])

  return (
    <div className={`bg-${theme} text-${textColor}`} style={{width:"100%", height:"94vh"}}>
      {users.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  )
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

