import React from 'react'

export default function Ter() {

    const isGoingout = true

    let answer
    if(isGoingout === true){
        answer = "Yes"
    }else{
        answer = "No"
    }

  return (
    <div className='state'>
<h1 className='state--title'>Do i feel like iam going out tonight</h1>
<div className='state--value'>
    <h1>{answer}</h1>
</div>
    </div>
  )
}
