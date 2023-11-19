import React from 'react'

const Service = () => {


  const [data, setData] = React.useState([])
  const [title, setTitle] = React.useState("")



//   const add = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
            
//         })
//     })

//     .then( res => console.log(res))
//     .then(res2 => setData(res2))


//     // .then(data => console.log(data))
//     // .catch(err => console.log(err))
// }

  // const add = async () => {
  //  const res =  fetch("https://jsonplaceholder.typicode.com/posts", {
  //             method: "post",
  //             // body: JSON.stringify({
                  
  //             // })
  //         })

  //       console.log(res)
  // }


  // React.useEffect(() => {
  //   // add()
  // }, [])



  const handleSubmit = async () => {
    const response = await fetch('https://reqres.in/api/posts', {
      method: 'post',
      body: JSON.stringify({
        title: title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log("result", result);
  }


 const componentDidMount = () => {
    // POST request using fetch with set headers
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log("data", data));
}




   React.useEffect(() => {
    handleSubmit()
    componentDidMount()
  }, [title])

  


  return (
    <div>

      {/* <button className='btn btn-success' onClick={(e) => handleSubmit(e)} >
        Add
      </button> */}


        <input className='form-control w-50'
          onChange={(e) => setTitle(e.target.value) } 
        />

    </div>
  )
}

export default Service