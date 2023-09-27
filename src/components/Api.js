import React from 'react'

export default function Api() {

    const [starwarsdata,setstarwarsdata]=React.useState({})

    console.log("Data renderd")

   

    // side effect
    React.useEffect(function(){
      // console.log("Effect function array")
      fetch("https://catfact.ninja/fact")
      .then(res=>res.json)
      .then(data=>setstarwarsdata(data))
    },[])

  return (
    <div>
    <pre>{JSON.stringify(starwarsdata,null,2)}</pre>
  </div>
  )
}
