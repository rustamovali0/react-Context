import React from "react";

const Home = () => {


  const [users, setUser] = React.useState([])



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



  const requestEmpolyee = async () => {  
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (res.ok && res.status === 200){
        const data = await res.json()
        setUser(data)

    }else{
        alert("asas")
    }
}


React.useEffect(() => {
  requestEmpolyee()
}, [])

  

  return <div>

    
    {
      users.map((item, index) => (

        <h1>
          {item.name}
        </h1>
      ))
    }
  </div>;
};

export default Home;
